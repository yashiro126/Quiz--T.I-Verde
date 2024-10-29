const questions = [
    {
        question: "O que significa o primeiro 'R' dos 5 Rs da sustentabilidade?",
        options: ["Reduzir", "Reciclar", "Reutilizar", "Repensar"],
        answer: "Reduzir"
    },
    {
        question: "Qual é uma prática importante do TI-Verde?",
        options: ["Desligar computadores não usados", "Usar muitas impressões", "Manter luzes sempre acesas", "Utilizar mais papel"],
        answer: "Desligar computadores não usados"
    },
    {
        question: "Qual é o segundo 'R' dos 5 Rs?",
        options: ["Reutilizar", "Reduzir", "Reciclar", "Recusar"],
        answer: "Reutilizar"
    },
    {
        question: "Como a TI-Verde ajuda o meio ambiente?",
        options: ["Reduz o uso de energia", "Aumenta o desperdício", "Usa mais recursos", "Consome mais eletricidade"],
        answer: "Reduz o uso de energia"
    },
    {
        question: "O que significa 'Reciclar'?",
        options: ["Transformar materiais em novos produtos", "Jogar fora o lixo", "Usar mais recursos", "Comprar novos materiais"],
        answer: "Transformar materiais em novos produtos"
    },
    {
        question: "O que devemos fazer com aparelhos eletrônicos que não usamos mais?",
        options: ["Reciclar", "Jogar fora", "Guardar em casa", "Queimar"],
        answer: "Reciclar"
    },
    {
        question: "O que é 'Repensar' nos 5 Rs?",
        options: ["Pensar antes de consumir", "Comprar sem planejar", "Desperdiçar recursos", "Não pensar nas consequências"],
        answer: "Pensar antes de consumir"
    },
    {
        question: "Qual é uma maneira de reduzir o consumo de energia em casa?",
        options: ["Desligar aparelhos em stand-by", "Manter luzes acesas", "Deixar aparelhos ligados o tempo todo", "Usar sempre o chuveiro elétrico"],
        answer: "Desligar aparelhos em stand-by"
    },
    {
        question: "O que podemos fazer com materiais que não queremos mais, mas ainda estão em bom estado?",
        options: ["Doar", "Queimar", "Jogar no lixo", "Ignorar"],
        answer: "Doar"
    },
    {
        question: "Qual é uma vantagem da TI-Verde?",
        options: ["Economia de energia", "Maior uso de recursos", "Desperdício", "Poluição"],
        answer: "Economia de energia"
    }
];

function loadQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        const questionText = document.createElement("p");
        questionText.textContent = (index + 1) + ". " + q.question;
        questionDiv.appendChild(questionText);

        q.options.forEach(option => {
            const label = document.createElement("label");
            const input = document.createElement("input");
            input.type = "radio";
            input.name = "question" + index;
            input.value = option;
            label.appendChild(input);
            label.append(option);
            questionDiv.appendChild(label);
            questionDiv.appendChild(document.createElement("br"));
        });

        quizContainer.appendChild(questionDiv);
    });
}

function submitQuiz() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });
    document.getElementById("result").textContent = "Você acertou " + score + " de " + questions.length + " perguntas.";
}

window.onload = loadQuiz;
