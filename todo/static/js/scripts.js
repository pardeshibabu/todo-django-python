document.addEventListener("DOMContentLoaded", () => {
    const tasks = document.querySelectorAll(".task-item");
    tasks.forEach((task) => {
        task.addEventListener("mouseenter", () => {
            task.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.2)";
        });
        task.addEventListener("mouseleave", () => {
            task.style.boxShadow = "none";
        });
    });
});
