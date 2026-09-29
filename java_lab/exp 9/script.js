
function setTheme(theme) {

    if (theme === "dark") {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }

    
    localStorage.setItem("theme", theme);

    
    sessionStorage.setItem("sessionTheme", theme);

    document.getElementById("message").innerHTML =
        "Theme saved: " + theme;
}

function clearTheme() {

    localStorage.removeItem("theme");
    sessionStorage.removeItem("sessionTheme");

    document.body.classList.remove("dark");

    document.getElementById("message").innerHTML =
        "Theme preference cleared.";
}

window.onload = function () {

    var savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

    if (savedTheme) {
        document.getElementById("message").innerHTML =
            "Saved theme: " + savedTheme;
    }
};

