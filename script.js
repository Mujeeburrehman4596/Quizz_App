// Quiz data: 50 questions
const questions = [
{ question: "1. What is ReactJS?", options: ["Library", "Framework", "Language", "Tool"], correct: "A" },
    { question: "2. Who invented JavaScript?", options: ["Brendan Eich", "Mark Zuckerberg", "Bill Gates", "Elon Musk"], correct: "A" },
    { question: "3. HTML stands for?", options: ["Hyper Text Makeup Language", "Hyper Text Markup Language", "Highlevel Text Markup Language", "None of the above"], correct: "B" },
    { question: "4. Which year was JavaScript created?", options: ["1995", "1999", "2001", "1993"], correct: "A" },
    { question: "5. What is CSS used for?", options: ["Markup", "Scripting", "Styling", "Framework"], correct: "C" },
    { question: "6. Which is a backend programming language?", options: ["HTML", "CSS", "JavaScript", "Python"], correct: "D" },
    { question: "7. What does AI stand for?", options: ["Artificial Intelligence", "Automated Interaction", "Adaptive Interface", "None of the above"], correct: "A" },
    { question: "8. Which algorithm is commonly used in AI?", options: ["Bubble Sort", "A* Search", "Binary Search", "Linear Regression"], correct: "B" },
    { question: "9. What is the primary purpose of a database?", options: ["Store data", "Process data", "Secure data", "None of the above"], correct: "A" },
    { question: "10. What does SQL stand for?", options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "None of the above"], correct: "A" },
    { question: "11. What is a neural network?", options: ["A hardware component", "A software algorithm", "A type of machine learning", "All of the above"], correct: "C" },
    { question: "12. What is the main function of an operating system?", options: ["Manage hardware", "Manage software", "User interface", "All of the above"], correct: "D" },
    { question: "13. What is an IP address?", options: ["Internet Protocol address", "Internal Protocol address", "Interconnected Protocol address", "None of the above"], correct: "A" },
    { question: "14. Which of the following is a markup language?", options: ["HTML", "CSS", "JavaScript", "Python"], correct: "A" },
    { question: "15. What does HTTP stand for?", options: ["HyperText Transfer Protocol", "High Text Transfer Protocol", "Hyperlink Transfer Protocol", "None of the above"], correct: "A" },
    { question: "16. What is Agile methodology?", options: ["A programming language", "A project management approach", "A type of hardware", "None of the above"], correct: "B" },
    { question: "17. What is the main purpose of software testing?", options: ["Identify bugs", "Improve performance", "Enhance usability", "All of the above"], correct: "D" },
    { question: "18. Which programming paradigm does Python support?", options: ["Procedural", "Object-oriented", "Functional", "All of the above"], correct: "D" },
    { question: "19. What is a software development lifecycle?", options: ["A method for managing software projects", "A series of phases in software development", "A programming language", "None of the above"], correct: "B" },
    { question: "20. Which component is considered the brain of the computer?", options: ["CPU", "RAM", "Hard Disk", "Motherboard"], correct: "A" },
    { question: "21. What does GPU stand for?", options: ["Graphics Processing Unit", "General Purpose Unit", "Graphics Processing Unit", "None of the above"], correct: "A" },
    { question: "22. What is the primary purpose of RAM?", options: ["Store permanent data", "Store temporary data", "Execute programs", "None of the above"], correct: "B" },
    { question: "23. What is machine learning?", options: ["Teaching machines to learn from data", "Creating machines", "Using hardware", "None of the above"], correct: "A" },
    { question: "24. Which is a popular front-end JavaScript framework?", options: ["Django", "Flask", "React", "Laravel"], correct: "C" },
    { question: "25. What does REST stand for?", options: ["Representational State Transfer", "Restricted State Transfer", "Resource State Transfer", "None of the above"], correct: "A" },
    { question: "26. What is the primary function of a compiler?", options: ["Translate source code to machine code", "Execute code", "Debug code", "None of the above"], correct: "A" },
    { question: "27. What is an example of a NoSQL database?", options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"], correct: "C" },
    { question: "28. Which technology is used for cloud computing?", options: ["Virtualization", "AI", "Blockchain", "All of the above"], correct: "D" },
    { question: "29. What is a computer network?", options: ["A collection of computers connected together", "A single computer", "A programming language", "None of the above"], correct: "A" },
    { question: "30. What is the purpose of an API?", options: ["Allow different software to communicate", "Store data", "Run applications", "None of the above"], correct: "A" },
    { question: "31. What is big data?", options: ["Large volumes of data", "Data that is big", "Data that is complex", "All of the above"], correct: "D" },
    { question: "32. What does URL stand for?", options: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Resource Language", "None of the above"], correct: "A" },
    { question: "33. What is blockchain technology?", options: ["A type of database", "A programming language", "A computer network", "None of the above"], correct: "A" },
    { question: "34. Which language is primarily used for web development?", options: ["Python", "C++", "Java", "JavaScript"], correct: "D" },
    { question: "35. What does UX stand for?", options: ["User Experience", "User Exit", "Unified Experience", "None of the above"], correct: "A" },
    { question: "36. Which of the following is an operating system?", options: ["Windows", "Linux", "macOS", "All of the above"], correct: "D" },
    { question: "37. What is a variable in programming?", options: ["A storage location", "A function", "A data type", "None of the above"], correct: "A" },
    { question: "38. What is version control?", options: ["Managing changes to source code", "Managing software releases", "Both A and B", "None of the above"], correct: "C" },
    { question: "39. What is a software bug?", options: ["An error in code", "A feature", "A type of software", "None of the above"], correct: "A" },
    { question: "40. What does IDE stand for?", options: ["Integrated Development Environment", "Independent Development Environment", "Interlinked Development Environment", "None of the above"], correct: "A" },
    { question: "41. What is an algorithm?", options: ["A set of instructions", "A programming language", "A type of hardware", "None of the above"], correct: "A" },
    { question: "42. What is the main purpose of software documentation?", options: ["Explain how to use software", "Improve performance", "Enhance usability", "None of the above"], correct: "A" },
    { question: "43. What is a cache?", options: ["A type of storage", "A high-speed memory", "Both A and B", "None of the above"], correct: "C" },
    { question: "44. What does SaaS stand for?", options: ["Software as a Service", "System as a Service", "Software as a Solution", "None of the above"], correct: "A" },
    { question: "45. Which of the following is a cloud service model?", options: ["IaaS", "PaaS", "SaaS", "All of the above"], correct: "D" },
    { question: "46. What is a firewall?", options: ["A security system", "A type of software", "A hardware component", "All of the above"], correct: "D" },
    { question: "47. What is DevOps?", options: ["Development and Operations", "Development Only", "Operations Only", "None of the above"], correct: "A" },
    { question: "48. What is a primary key?", options: ["Unique identifier for a record", "A data type", "A programming concept", "None of the above"], correct: "A" },
    { question: "49. What does UX design focus on?", options: ["User satisfaction", "User interfaces", "Both A and B", "None of the above"], correct: "C" },
    { question: "50. What is the purpose of software deployment?", options: ["Install software", "Run software", "Remove software", "None of the above"], correct: "A" },
    { question: "51. What is the role of a project manager?", options: ["Manage the project timeline", "Assign tasks", "Ensure project delivery", "All of the above"], correct: "D" }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = ''; // Clear previous options

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('form-check');
        optionElement.innerHTML = `
            <input class="form-check-input" type="radio" name="option" id="option${index}" value="${String.fromCharCode(65 + index)}">
            <label class="form-check-label" for="option${index}">${option}</label>
        `;
        optionsContainer.appendChild(optionElement);
    });
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert('Please select an option before proceeding!');
        return;
    }

    const answer = selectedOption.value;
    if (answer === questions[currentQuestionIndex].correct) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    document.getElementById('question-text').style.display = 'none';
    document.getElementById('options-container').style.display = 'none';
    document.getElementById('next-button').style.display = 'none';

    const resultElement = document.getElementById('result');
    resultElement.textContent = `You scored ${score} out of ${questions.length}!`;
    resultElement.style.display = 'block';
}

// Load the first question on page load
window.onload = loadQuestion;
