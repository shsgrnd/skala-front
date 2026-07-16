const STORAGE_KEY = "skala-todos";

export function loadTodos() {
    try {
        const savedTodos = localStorage.getItem(STORAGE_KEY);
        const parsedTodos = savedTodos ? JSON.parse(savedTodos) : [];

        return Array.isArray(parsedTodos) ? parsedTodos : [];
    } catch (error) {
        console.error("저장된 할 일을 불러오지 못했습니다.", error);
        return [];
    }
}

export function saveTodos(todos) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
        console.error("할 일을 저장하지 못했습니다.", error);
    }
}
