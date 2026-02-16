export interface Question {
    text: string;
    options: string[];
    correctAnswer: number; // index of the correct option
}

export interface Quiz {
    id: string;
    title: string;
    description: string;
    questions: Question[];
    timeLimit?: number; // in minutes
}

export interface Attempt {
    id: string;
    userId: string;
    quizId: string;
    score: number;
    totalQuestions: number;
    timestamp: any;
}
