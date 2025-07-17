document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");
    const toggleButton = document.getElementById("toggle-sidebar");

    // Toggle sidebar collapse
    toggleButton.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
    });
});

