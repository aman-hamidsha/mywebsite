const body = document.body;
const button = document.getElementById("toggle");

const theme = localStorage.getItem("theme") || "dark";
body.className = theme;
button.textContent = theme === "dark" ? "light" : "dark";

button.onclick = () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");

    const newTheme = body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    button.textContent = newTheme === "dark" ? "light" : "dark";
};


