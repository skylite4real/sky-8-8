document.addEventListener("DOMContentLoaded", function() {
    const manageLink = document.getElementById("manage");
    const manageContentSection = document.getElementById("manageContentSection");
    const closeManageContent = document.querySelector(".close-manage-content");

    manageLink.addEventListener("click", function(event) {
        event.preventDefault();
        manageContentSection.style.display = "block";
    });

    closeManageContent.addEventListener("click", function() {
        manageContentSection.style.display = "none";
    });
});














function openTab(evt, tabName) {
    var i, tabcontent, tabs;
    tabcontent = document.getElementsByClassName("manage-content-body")[0].getElementsByClassName("content-videos");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tabcontent = document.getElementsByClassName("manage-content-body")[0].getElementsByClassName("content-shorts");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tabcontent = document.getElementsByClassName("manage-content-body")[0].getElementsByClassName("content-posts");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tabs = document.getElementsByClassName("tab-container")[0].getElementsByClassName("tab-videos");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
    }
    tabs = document.getElementsByClassName("tab-container")[0].getElementsByClassName("tab-shorts");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
    }
    tabs = document.getElementsByClassName("tab-container")[0].getElementsByClassName("tab-posts");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Open the default tab (Videos)
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tab-videos').click();
});
