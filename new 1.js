function checkAnswers() {
    const correctAnswers = ["false", "false", "false", "true", "true"];
    let score = 0;
    const form = document.getElementById("quiz-form");
    const result = document.getElementById("result");
    let answers = [];

    for (let i = 1; i <= correctAnswers.length; i++) {
        const answer = form.querySelector(`input[name="q${i}"]:checked`);
        if (answer && answer.value === correctAnswers[i - 1]) {
            score++;
            answers.push("✅");
        } else {
            answers.push("❌");
        }
    }

    result.innerHTML = `
        <p>You scored ${score} out of ${correctAnswers.length}</p>
        <p>Answers: ${answers.join(" ")}</p>
    `;
}
