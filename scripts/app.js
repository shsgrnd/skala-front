import { loadTodos, saveTodos } from "./storage.js";

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoError = document.querySelector("#todo-error");
const todoList = document.querySelector("#todo-list");
const todoEmpty = document.querySelector("#todo-empty");
const filterButtons = document.querySelectorAll("[data-filter]");
const totalCount = document.querySelector("#total-count");
const completedCount = document.querySelector("#completed-count");
const dailyQuote = document.querySelector("#daily-quote");
const todayDate = document.querySelector("#today-date");

let todos = loadTodos();
let currentFilter = "all";

function createTodo(text) {
    return {
        id: crypto.randomUUID(),
        text,
        done: false
    };
}

function getFilteredTodos() {
    if (currentFilter === "active") {
        return todos.filter(todo => !todo.done);
    }

    if (currentFilter === "completed") {
        return todos.filter(todo => todo.done);
    }

    return todos;
}

function createTodoElement(todo) {
    const item = document.createElement("li");
    const checkbox = document.createElement("input");
    const text = document.createElement("span");
    const deleteButton = document.createElement("button");

    item.className = "todo-item";
    item.dataset.id = todo.id;
    item.classList.toggle("completed", todo.done);

    checkbox.type = "checkbox";
    checkbox.className = "todo-checkbox";
    checkbox.checked = todo.done;
    checkbox.setAttribute(
        "aria-label",
        todo.done ? `${todo.text} 완료 취소` : `${todo.text} 완료`
    );

    text.className = "todo-item-text";
    text.textContent = todo.text;

    deleteButton.type = "button";
    deleteButton.className = "todo-delete";
    deleteButton.textContent = "✕";
    deleteButton.setAttribute("aria-label", `${todo.text} 삭제`);

    item.append(checkbox, text, deleteButton);

    return item;
}

function render() {
    const filteredTodos = getFilteredTodos();

    todoList.replaceChildren(
        ...filteredTodos.map(todo => createTodoElement(todo))
    );

    todoEmpty.hidden = filteredTodos.length > 0;
    totalCount.textContent = todos.length;
    completedCount.textContent = todos.filter(todo => todo.done).length;
}

function updateTodos(nextTodos) {
    todos = nextTodos;
    saveTodos(todos);
    render();
}

function addTodo(text) {
    updateTodos([...todos, createTodo(text)]);
}

function toggleTodo(id) {
    updateTodos(
        todos.map(todo =>
            todo.id === id ? {...todo, done: !todo.done} : todo
        )
    );
}

function deleteTodo(id) {
    updateTodos(todos.filter(todo => todo.id !== id));
}

todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const text = todoInput.value.trim();

    if (!text) {
        todoError.textContent = "할 일을 입력해 주세요.";
        todoInput.focus();
        return;
    }

    todoError.textContent = "";
    addTodo(text);
    todoInput.value = "";
    todoInput.focus();
});

todoInput.addEventListener("input", function () {
    if (todoInput.value.trim()) {
        todoError.textContent = "";
    }
});

todoList.addEventListener("click", function (event) {
    const item = event.target.closest(".todo-item");

    if (!item) {
        return;
    }

    if (event.target.closest(".todo-delete")) {
        deleteTodo(item.dataset.id);
        return;
    }

    if (event.target.matches(".todo-checkbox")) {
        toggleTodo(item.dataset.id);
    }
});

filterButtons.forEach(button => {
    button.addEventListener("click", function () {
        currentFilter = button.dataset.filter;

        filterButtons.forEach(filterButton => {
            const isActive = filterButton === button;

            filterButton.classList.toggle("active", isActive);
            filterButton.setAttribute("aria-pressed", String(isActive));
        });

        render();
    });
});

async function loadDailyQuote() {
    const fallbackQuote = "작은 실행이 좋은 계획보다 더 큰 변화를 만듭니다.";

    try {
        const response = await fetch("https://dummyjson.com/quotes/random");

        if (!response.ok) {
            throw new Error("오늘의 한마디 요청에 실패했습니다.");
        }

        const data = await response.json();
        dailyQuote.textContent = data.quote || fallbackQuote;
    } catch (error) {
        console.error(error);
        dailyQuote.textContent = fallbackQuote;
    }
}

todayDate.textContent = new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "full"
}).format(new Date());

render();
loadDailyQuote();
