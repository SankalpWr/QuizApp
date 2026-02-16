"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import Navbar from "@/components/Navbar";
import { Quiz } from "@/types";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MOCK_QUIZZES } from "@/data/mocks";

export default function QuizzesPage() {
    const [quizzes, setQuizzes] = useState<Quiz[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setQuizzes(MOCK_QUIZZES);
            setLoading(false);
        }, 500);
    }, []);

    return (
        <ProtectedRoute>
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Available Quizzes</h1>
                </div>

                {loading ? (
                    <div className="text-center py-12">Loading quizzes...</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {quizzes.map((quiz) => (
                            <div key={quiz.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border">
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold mb-2">{quiz.title}</h2>
                                    <p className="text-gray-600 mb-4 h-12 overflow-hidden">{quiz.description}</p>
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                        <span>{quiz.questions?.length || 0} Questions</span>
                                        <span>{quiz.timeLimit} mins</span>
                                    </div>
                                    <Link href={`/quiz/${quiz.id}`}>
                                        <Button className="w-full">Start Quiz</Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </ProtectedRoute>
    );
}
