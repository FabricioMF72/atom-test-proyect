# atom-test-proyect

Welcome to the `atom-test` project! This README will guide you through how to run the project, the technologies used, and the design decisions made.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Technologies Used](#technologies-used)
- [Design Decisions](#design-decisions)

## Getting Started

### Prerequisites

Before you start, ensure you have the following installed on your system:

- Node.js (version 16.14.0)
- npm (version 8.3.1)

### Installation

1. Clone this repository:
   git clone https://github.com/FabricioMF72/atom-test-proyect.git

2. Install the project dependencies:
   npm install

### Runnning the project
1. After the installation, you can run the project locally using the following command:
   npm run dev (This command will start the development server and make the project accessible at http://localhost:3000)

2. You also have this command to test the project:
   npm run test

## Technologies Used

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine, used for building server-side applications.

- **Express.js**: A fast, unopinionated, and minimalist web framework for Node.js, used to build robust and scalable APIs.

- **Yup**: A schema validation library for JavaScript and TypeScript, used for validating and sanitizing data before processing.

- **Firebase Realtime Database / Firestore**: Firebase offers real-time databases that enable data storage and synchronization across multiple clients in real time. Firestore is a NoSQL database solution that provides seamless scalability and offline support.

## Design Decisions

- **Backend Structure**: The project follows a modular backend structure using Express.js, with routes, controllers, and models. This approach promotes separation of concerns and maintainability.

- **Validation with Yup**: Yup was chosen for data validation due to its simplicity and integration with our existing JavaScript/TypeScript stack. It ensures that data entered by users is accurate and conforms to our expected structure.

- **RESTful API Design**: Our API endpoints follow RESTful design principles for consistency and predictability. Each endpoint corresponds to a specific resource and HTTP verb, making it easy for developers to understand and use.

- **Error Handling**: We implement robust error handling throughout the application, ensuring that users receive clear and meaningful error messages, and that potential issues are logged for development purposes.

- **Database Choice**: Firebase's Firestore was chosen as the database solution due to its scalability, real-time capabilities, and offline support. It allows us to focus on the application logic while Firebase handles data storage.

- **Scalability**: The architecture and tools chosen provide a solid foundation for scalability. Firebase's infrastructure can handle increased load, while our modular backend allows for easy integration of additional features.

- **Testing Strategy**: We use Jest for unit and integration testing. This approach ensures that changes are validated against our expectations and prevents regressions.
