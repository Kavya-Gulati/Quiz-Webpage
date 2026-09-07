function checkQuiz() {
    let answers = "BCBCDACCBB";
    let score = 0;

    for (let i = 1; i <= 10; i++) {
        let correctValue = answers[i - 1];
        let correctInput = document.querySelector('input[name="q' + i + '"][value="' + correctValue + '"]');
        let chosenInput = document.querySelector('input[name="q' + i + '"]:checked');

        correctInput.parentElement.parentElement.className = "opt correct";

        if (chosenInput != null && chosenInput.value == correctValue) {
            score = score + 1;
        } else if (chosenInput != null) {
            chosenInput.parentElement.parentElement.className = "opt incorrect";
        }
    }

    let allInputs = document.querySelectorAll("input");
    for (let k = 0; k < allInputs.length; k++) {
        allInputs[k].disabled = true;
    }

    document.querySelector(".submitbtn").innerHTML = "<p>Your score is: " + score + "/10</p>";
}
