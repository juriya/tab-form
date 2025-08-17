# Tab Form - React + Vite

This project is a multi-step/tabbed form built with React and Vite. It demonstrates how to create a user-friendly form experience by splitting input fields across multiple tabs, validating each step, and managing state efficiently.

## Features

- **Tabbed Navigation:** The form is divided into three tabs: Profile, Interests, and Settings. Users can navigate between tabs using the header or navigation buttons.
- **Step-wise Validation:** Each tab validates its own fields before allowing navigation to the next tab.
- **Live Error Feedback:** Validation errors are displayed inline for each field.
- **State Management:** All form data is managed in a single state object and passed down to tab components.
- **Profile Tab:** Collects user's name, age, and email with validation.
- **Interests Tab:** Allows users to select multiple interests using checkboxes.
- **Settings Tab:** Lets users choose a theme (dark or light) using radio buttons.
- **Submit Action:** On the last tab, users can submit the form, which logs the collected data to the console.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Setup & Run Locally

1. **Clone the repository:**

   ```sh
   git clone <your-repo-url>
   cd tab-form
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**

   ```sh
   npm run dev
   ```

   The app will be available at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

4. **Lint the code (optional):**

   ```sh
   npm run lint
   ```

5. **Build for production:**
   ```sh
   npm run build
   ```

## Project Structure

- `src/components/TabForm.jsx`: Main component managing tabs and form state.
- `src/components/Profile.jsx`: Profile tab for name, age, and email.
- `src/components/Interests.jsx`: Interests tab for selecting interests.
- `src/components/Settings.jsx`: Settings tab for theme selection.
- `src/App.jsx`: Root component.
- `src/main.jsx`: Entry point for React rendering.

## Custom Features

- **Tab Validation:** Navigation between tabs is only allowed if the current tab's fields are valid.
- **Dynamic Error Handling:** Errors are managed per tab and displayed next to relevant fields.
- **Flexible Data Structure:** All form data is stored in a single object, making it easy to extend or modify.
- **Simple Styling:** Basic CSS for layout and error highlighting.

---

This project is ideal for learning how to build multi-step forms in React, manage complex state, and implement custom validation and error handling logic.
