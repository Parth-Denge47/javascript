

window.onload = function () {

   
    let savedDay = localStorage.getItem("selectedDay");

    if (savedDay) {
        document.getElementById("dayStatus").innerHTML = savedDay;
    }


    
    let savedTopic = sessionStorage.getItem("selectedTopic");

    if (savedTopic) {
        document.getElementById("topicStatus").innerHTML = savedTopic;
    }

};




function showSchedule(day, begin, end, topic) {

    
    localStorage.setItem("selectedDay", day);


    
    sessionStorage.setItem("selectedTopic", topic);


    document.getElementById("dayStatus").innerHTML = day;


    
    document.getElementById("topicStatus").innerHTML = topic;


    
    alert(
        "Seminar Schedule\n\n" +
        "Day: " + day + "\n" +
        "Time: " + begin + " - " + end + "\n" +
        "Topic: " + topic
    );

}




function toggleTheme() {

    document.body.classList.toggle("dark");

    let button = document.getElementById("themeButton");

    if (document.body.classList.contains("dark")) {

        button.innerHTML = "☀️ Light Mode";

    } else {

        button.innerHTML = "🌙 Dark Mode";

    }

}




function clearPreferences() {

    localStorage.removeItem("selectedDay");

   
    sessionStorage.removeItem("selectedTopic");


    document.getElementById("dayStatus").innerHTML = "None";

    document.getElementById("topicStatus").innerHTML = "None";


    alert("Saved preferences have been cleared.");

}   