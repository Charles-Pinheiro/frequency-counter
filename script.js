const button = document.getElementById("btn");

const TextNormalize = (text) => {
    text = text.toLowerCase();
    text = text.replace(/[^a-zà-ü'\s]+/g, "");

    return text;
}

const resetData = () => {
    let letters = document.createElement("p");
    letters.classList.add("letterWord");
    letters.innerHTML = "Letras:";

    let words = document.createElement("p");
    words.classList.add("letterWord");
    words.innerHTML = "Palavras:";

    document.getElementById("lettersBox").innerText = "";
    document.getElementById("lettersBox").appendChild(letters);

    document.getElementById("wordsBox").innerHTML = "";
    document.getElementById("wordsBox").appendChild(words);
}

const createObjectCount = (string) => {
    const counts = {};

    for (let i = 0; i < string.length; i++) {
        let current = string[i];

        if (counts[current] === undefined) {
            counts[current] = 1;
        } else {
            counts[current]++;
        }
    }

    return counts;
}

const createContent = (object, id) => {
    for (let item in object) {
        const span = document.createElement("p");

        const content = `"${item}": ${object[item]}, `;

        span.innerText = content;

        const element = document.getElementById(id);

        element.appendChild(span);
    }
}

const countFrequency = () => {
    resetData();
    let typedText = document.getElementById("inputText").value;

    typedText = TextNormalize(typedText);
    const letterCounts = createObjectCount(typedText);
    createContent(letterCounts, "lettersBox");

    words = typedText.split(/\s/);
    const wordCounts = createObjectCount(words);
    createContent(wordCounts, "wordsBox");
}

button.addEventListener("click", countFrequency);