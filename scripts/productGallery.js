const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = themeToggle.querySelector("[aria-hidden='true']");
const themeLabel = themeToggle.querySelector(".theme-label");

function applyTheme(theme) {
    const isDark = theme === "dark";

    document.body.classList.toggle("dark", isDark);
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeIcon.textContent = isDark ? "☀️" : "🌙";
    themeLabel.textContent = isDark ? "라이트 모드" : "다크 모드";
}

const savedTheme = localStorage.getItem("product-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

themeToggle.addEventListener("click", function () {
    const nextTheme = document.body.classList.contains("dark") ? "light" : "dark";

    localStorage.setItem("product-theme", nextTheme);
    applyTheme(nextTheme);
});
