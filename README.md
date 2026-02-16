# Quiz Web App

A full-stack Quiz Application built with Next.js (App Router), TypeScript, Tailwind CSS, and Firebase.

## Features

- **Authentication**: Email/Password login and signup.
- **Protected Routes**: Secure access to quizzes and history.
- **Quiz Interface**: Interactive quiz taking with progress tracking.
- **Scoring**: Instant score calculation.
- **History**: View past attempts and scores.
- **Responsive Design**: Works on mobile and desktop.

## Prerequisites

- Node.js (v18 or higher)
- A Firebase project with Authentication (Email/Password) and Firestore enabled.

## Setup

1.  **Clone the repository** (if applicable) or navigate to the project directory.

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Configure Firebase**:
    Create a `.env.local` file in the root directory and add your Firebase configuration:
    ```env
    NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
    ```

4.  **Run the development server**:
    ```bash
    npm run dev
    ```

5.  **Open the app**:
    Visit [http://localhost:3000](http://localhost:3000).

## Seeding Data

Since there is no Admin Panel in this MVP, you can seed sample quizzes by:
1.  Navigating to `/quizzes`.
2.  Clicking the "Seed Sample Quizzes" button (visible if no quizzes exist).

## Project Structure

- `src/app`: Next.js App Router pages.
- `src/components`: Reusable UI components.
- `src/context`: React Context (Auth).
- `src/lib`: Firebase configuration.
- `src/types`: TypeScript interfaces.

## License

MIT
