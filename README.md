# Number Guessing Game

## Overview

The Number Guessing Game is an interactive web application built using React. Players attempt to guess a randomly generated number within a certain range. The game tracks the user's score and high score, and features a leaderboard to display top scores.

## Features

- **Gameplay:** Players guess numbers to match a randomly generated target number.
- **Score Tracking:** Displays the current score and the highest score achieved.
- **Leaderboard:** Shows top scores of all players.
- **User Authentication:** Allows users to log in, sign up, and view their profiles.
- **Responsive Design:** Optimized for various screen sizes.

## Technologies Used

- **Frontend:** React, React Router, Axios
- **Backend:** Node.js, Express, MongoDB
- **Authentication:** JWT for secure login and session management

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your machine.

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/number-guessing-game.git
   cd number-guessing-game
   ```

2. **Install Dependencies:**

   For the frontend:
   
   ```bash
   cd frontend
   npm install
   ```

   For the backend:

   ```bash
   cd ../backend
   npm install
   ```

### Running the Application

1. **Start the Backend Server:**

   ```bash
   cd backend
   npm start
   ```

   The backend server will run on `http://localhost:5000`.

2. **Start the Frontend Development Server:**

   ```bash
   cd ../frontend
   npm start
   ```

   The frontend application will run on `http://localhost:3000`.

### Build and Deploy

To build the frontend for production:

```bash
cd frontend
npm run build
```

Deploy the built frontend to Vercel and the backend to Render following their respective deployment guides.

## Usage

- **Play the Game:** Navigate to `http://localhost:5000` and start guessing numbers.
- **View Leaderboard:** Check the leaderboard to see top scores.
- **Manage Account:** Log in or sign up to manage your profile and scores.

## Contributing

Feel free to submit issues or pull requests. Please follow the coding standards and include tests with your contributions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
