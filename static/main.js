function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    } else {
        sidebar.style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
}
