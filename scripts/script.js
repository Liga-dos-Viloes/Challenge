let button = document.getElementById("menuToggle");
let sidebar = document.getElementById("sidebar");



button.addEventListener("click", function() {
    sidebar.classList.toggle("active");
})