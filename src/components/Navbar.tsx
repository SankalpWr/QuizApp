"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { Button } from "./ui/Button";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const { user, logout } = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push("/login");
    };

    if (!user) return null;

    return (
        <nav className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/quizzes" className="text-xl font-bold text-blue-600">
                            QuizApp
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href="/quizzes" className="text-gray-700 hover:text-blue-600">
                            Quizzes
                        </Link>
                        <Link href="/attempts" className="text-gray-700 hover:text-blue-600">
                            History
                        </Link>
                        <div className="border-l pl-4 flex items-center space-x-3">
                            <span className="text-sm text-gray-500">{user.displayName || user.email}</span>
                            <Button variant="outline" size="sm" onClick={handleLogout}>
                                Logout
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
