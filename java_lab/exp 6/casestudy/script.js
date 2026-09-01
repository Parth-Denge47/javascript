// Substring Operation
function showSubstring() {
    let str = document.getElementById("stringInput").value;

    if (str === "") {
        document.getElementById("stringResult").innerText =
            "Please enter a string.";
        return;
    }

    let result = str.substring(0, 5);

    document.getElementById("stringResult").innerText =
        "Substring (0, 5): " + result;
}


// indexOf() Operation
function findIndex() {
    let str = document.getElementById("stringInput").value;

    if (str === "") {
        document.getElementById("stringResult").innerText =
            "Please enter a string.";
        return;
    }

    let searchWord = prompt("Enter text to search:");

    if (searchWord === null || searchWord === "") {
        return;
    }

    let index = str.indexOf(searchWord);

    document.getElementById("stringResult").innerText =
        "Index of '" + searchWord + "': " + index;
}


// split() Operation
function splitString() {
    let str = document.getElementById("stringInput").value;

    if (str === "") {
        document.getElementById("stringResult").innerText =
            "Please enter a string.";
        return;
    }

    let result = str.split("");

    document.getElementById("stringResult").innerText =
        "Split result: " + result.join(", ");
}


// replace() Operation
function replaceString() {
    let str = document.getElementById("stringInput").value;

    if (str === "") {
        document.getElementById("stringResult").innerText =
            "Please enter a string.";
        return;
    }

    let oldText = prompt("Enter text to replace:");

    if (oldText === null || oldText === "") {
        return;
    }

    let newText = prompt("Enter replacement text:");

    if (newText === null) {
        return;
    }

    let result = str.replace(oldText, newText);

    document.getElementById("stringResult").innerText =
        "Replaced string: " + result;
}


// Reverse String
function reverseString() {
    let str = document.getElementById("stringInput").value;

    if (str === "") {
        document.getElementById("stringResult").innerText =
            "Please enter a string.";
        return;
    }

    let reversed = str.split("").reverse().join("");

    document.getElementById("stringResult").innerText =
        "Reversed string: " + reversed;
}


// Count Vowels
function countVowels() {
    let paragraph = document.getElementById("paragraphInput").value;

    if (paragraph === "") {
        document.getElementById("vowelResult").innerText =
            "Please enter a paragraph.";
        return;
    }

    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < paragraph.length; i++) {
        if (vowels.includes(paragraph[i])) {
            count++;
        }
    }

    document.getElementById("vowelResult").innerText =
        "Number of vowels: " + count;
}