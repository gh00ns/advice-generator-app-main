const dicePress = document.querySelector(".dice");
const adviceText = document.querySelector(".advice");
const adviceNumber = document.querySelector(".advice__number");

dicePress.onclick = function(){
    diceClicked()
};

function diceClicked() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            adviceNumber.textContent = "ADVICE #" + data["slip"]["id"];
            adviceText.textContent = "\"" + data["slip"]["advice"] + "\"";
        });
}