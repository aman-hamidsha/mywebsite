const b = document.body;
const t = document.getElementById("toggle");

t.onclick = () => {
    b.classList.toggle("light");
    b.classList.toggle("dark");
    t.textContent = b.classList.contains("dark") ? "light" : "dark";
};
