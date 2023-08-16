### Table of Contents

1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Features](#features)
7. [Contexts and Components](#contexts-and-components)
8. [Styling](#styling)
9. [Future Improvements](#future-improvements)
10. [Conclusion](#conclusion)

### 1. Introduction

The Expense Tracker project is a web application that enables users to monitor their expenses and income. It offers a user-friendly interface for entering transactions, viewing recent transaction history, and managing their current balance.

### 2. Technologies Used

- **React:** JavaScript library for creating user interfaces.
- **Vite:** Build tool and development server for fast, modern web development.
- **React Router:** Library for managing navigation within the application.
- **Tailwind CSS:** Utility-first CSS framework for designing responsive interfaces.
- **Daisy UI:** Tailwind CSS component library that enhances the UI with pre-designed components.
- **Context API:** State management for efficient data sharing between components.
- **HTML:** Markup for structuring the web pages.

### 3. Project Structure

- `src/` directory: Contains the primary application code.

  - `components/`: Holds reusable UI components.
  - `contexts/`: Includes context providers for managing application-wide state.
  - `pages/`:

  - `index.css`: Global styles.
  - `index.jsx`: Entry point of the application.

### 4. Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd expense-tracker`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`

### 5. Usage

1. Once the server is running, access the application at `http://localhost:3000`.
2. Utilize the navigation buttons to switch between the expense and income transaction forms.
3. Complete the form fields and submit to add a new transaction.
4. The current balance will dynamically update based on the transactions added.

### 6. Features

- Add Expense and Income transactions with relevant details.
- View recent transactions presented in a table format.
- Real-time update of the current balance.
- **Future Enhancement:** Visual representation of spending using charts.

### 7. Contexts and Components

- **AppContext:** Manages global state for transactions and current balance.
- **ExpenseIncome:** Enables users to record expense and income transactions.
- **RecentTranx:** Displays recent transactions in a tabular format.
- **ProfileCard:** Presents the user's current balance and facilitates the "Add Money" function.

### 8. Styling

- **Tailwind CSS and Daisy UI:** Styling is achieved using Tailwind CSS, along with the Daisy UI component library for a polished and responsive design.
- CSS classes are employed for styling components, ensuring uniformity throughout the application.

### 9. Future Improvements

- User authentication for personalized data management.
- Advanced filtering and sorting options for the recent transactions table.
- Enhanced form validation and error handling mechanisms.
- Integration of dynamic charts and graphs for visualizing spending patterns.

### 10. Conclusion

The Expense Tracker project showcases the amalgamation of React, context API, and modern CSS frameworks (Tailwind CSS and Daisy UI) to build a user-friendly expense tracking application. By aiding users in keeping track of their financial activities, the application contributes to better financial management.
