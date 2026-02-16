"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Navbar from "@/components/Navbar";
import { Quiz } from "@/types";
import { Button } from "@/components/ui/Button";
import { MOCK_QUIZZES } from "@/data/mocks";

export default function QuizPage() {
    const params = useParams();
    const router = useRouter();
    const { user } = useAuth();
    const [quiz, setQuiz] = useState<Quiz | null>(null);
    const [loading, setLoading] = useState(true);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (!params?.id) return;
        // Simulate API fetch
        const foundQuiz = MOCK_QUIZZES.find(q => q.id === params.id);
        if (foundQuiz) {
            setQuiz(foundQuiz);
        }
        setLoading(false);
    }, [params?.id]);

    const handleOptionSelect = (optionIndex: number) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [currentQuestionIndex]: optionIndex,
        });
    };

    const handleNext = () => {
        if (!quiz) return;
        if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            calculateScore();
        }
    };

    const calculateScore = async () => {
        if (!quiz || !user) return;
        setSubmitting(true);
        let calculatedScore = 0;
        quiz.questions.forEach((q, index) => {
            if (selectedAnswers[index] === q.correctAnswer) {
                calculatedScore++;
            }
        });
        setScore(calculatedScore);

        // Save attempt to LocalStorage
        const newAttempt = {
            id: Date.now().toString(),
            userId: user.uid,
            quizId: quiz.id,
            quizTitle: quiz.title,
            score: calculatedScore,
            totalQuestions: quiz.questions.length,
            timestamp: new Date().toISOString(),
        };

        const existingAttempts = JSON.parse(localStorage.getItem("quiz_attempts") || "[]");
        localStorage.setItem("quiz_attempts", JSON.stringify([...existingAttempts, newAttempt]));

        setTimeout(() => {
            setSubmitting(false);
            setShowResult(true);
        }, 500);
    };

    if (loading) {
        return (
            <ProtectedRoute>
                <Navbar />
                <div className="flex justify-center items-center h-[calc(100vh-64px)]">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
            </ProtectedRoute>
        );
    }

    if (!quiz) {
        return (
            <ProtectedRoute>
                <Navbar />
                <div className="text-center py-12">Quiz not found.</div>
            </ProtectedRoute>
        );
    }

    return (
        <ProtectedRoute>
            <Navbar />
            <div className="max-w-3xl mx-auto px-4 py-8">
                {!showResult ? (
                    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 text-gray-900">
                        <div className="mb-6">
                            <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                                <span>Question {currentQuestionIndex + 1} of {quiz.questions.length}</span>
                                <span>{Math.round(((currentQuestionIndex) / quiz.questions.length) * 100)}% Completed</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" style={{ width: `${((currentQuestionIndex) / quiz.questions.length) * 100}%` }}></div>
                            </div>
                        </div>

                        <h2 className="text-xl md:text-2xl font-bold mb-6">{quiz.questions[currentQuestionIndex].text}</h2>

                        <div className="space-y-3 mb-8">
                            {quiz.questions[currentQuestionIndex].options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleOptionSelect(index)}
                                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${selectedAnswers[currentQuestionIndex] === index
                                        ? "border-blue-600 bg-blue-50 text-blue-700"
                                        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                        }`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>

                        <div className="flex justify-end">
                            <Button
                                onClick={handleNext}
                                disabled={selectedAnswers[currentQuestionIndex] === undefined || submitting}
                                className="w-full sm:w-auto"
                            >
                                {currentQuestionIndex === quiz.questions.length - 1 ? (submitting ? "Submitting..." : "Finish Quiz") : "Next Question"}
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow-lg p-8 text-center animate-in fade-in zoom-in duration-300 text-gray-900">
                        <div className="mb-6">
                            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 text-blue-600 mb-4">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold mb-2">Quiz Completed!</h2>
                            <p className="text-gray-500">You scored {score} out of {quiz.questions.length}</p>
                        </div>

                        <div className="text-4xl font-extrabold text-blue-600 mb-8">
                            {Math.round((score / quiz.questions.length) * 100)}%
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button onClick={() => router.push("/quizzes")} variant="secondary">
                                Back to Quizzes
                            </Button>
                            <Button onClick={() => window.location.reload()}>
                                Retake Quiz
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </ProtectedRoute>
    );
}
