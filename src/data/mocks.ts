import { Quiz } from "@/types";

export const MOCK_QUIZZES: Quiz[] = [
    {
        id: "js-basics",
        title: "JavaScript Basics",
        description: "Test your core JavaScript knowledge",
        questions: [
            {
                text: "Which keyword is used to declare a variable in modern JavaScript?",
                options: ["var", "let", "const", "Both let and const"],
                correctAnswer: 3
            },
            {
                text: "What is the result of typeof null?",
                options: ["null", "object", "undefined", "string"],
                correctAnswer: 1
            },
            {
                text: "Which method converts a JSON string into a JavaScript object?",
                options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.object()"],
                correctAnswer: 1
            },
            {
                text: "Which array method adds an element to the end?",
                options: ["push()", "pop()", "shift()", "concat()"],
                correctAnswer: 0
            },
            {
                text: "Which symbol is used for strict equality comparison?",
                options: ["==", "=", "===", "!="],
                correctAnswer: 2
            }
        ],
        timeLimit: 2 // 120 seconds
    },
    {
        id: "web-fundamentals",
        title: "Web Development Fundamentals",
        description: "HTML, CSS and Web concepts",
        questions: [
            {
                text: "Which HTML tag is used to create a hyperlink?",
                options: ["<link>", "<a>", "<href>", "<hyper>"],
                correctAnswer: 1
            },
            {
                text: "Which CSS property changes text color?",
                options: ["font-color", "text-color", "color", "text-style"],
                correctAnswer: 2
            },
            {
                text: "What does HTTP stand for?",
                options: [
                    "HyperText Transfer Protocol",
                    "HighText Transfer Protocol",
                    "Hyper Transfer Text Program",
                    "Home Tool Transfer Protocol"
                ],
                correctAnswer: 0
            },
            {
                text: "Which CSS layout model is best for one-dimensional layouts?",
                options: ["Grid", "Flexbox", "Float", "Table"],
                correctAnswer: 1
            },
            {
                text: "Which status code means 'Not Found'?",
                options: ["200", "301", "404", "500"],
                correctAnswer: 2
            }
        ],
        timeLimit: 2.5 // 150 seconds
    },
    {
        id: "programming-concepts",
        title: "General Programming Concepts",
        description: "Core programming fundamentals",
        questions: [
            {
                text: "What is a loop primarily used for?",
                options: ["Styling UI", "Repeating code", "Storing data", "Debugging"],
                correctAnswer: 1
            },
            {
                text: "Which data structure follows the FIFO principle?",
                options: ["Stack", "Queue", "Tree", "Graph"],
                correctAnswer: 1
            },
            {
                text: "What does OOP stand for?",
                options: [
                    "Object Oriented Programming",
                    "Object Ordered Program",
                    "Operational Object Program",
                    "Only Object Programming"
                ],
                correctAnswer: 0
            },
            {
                text: "Which keyword is used to define a function in JavaScript?",
                options: ["func", "function", "define", "method"],
                correctAnswer: 1
            },
            {
                text: "Which of these is NOT a primitive data type in JavaScript?",
                options: ["string", "boolean", "object", "number"],
                correctAnswer: 2
            }
        ],
        timeLimit: 2 // 120 seconds
    }
];
