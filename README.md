# E-commerce Store

This project is an e-commerce store application built using modern web development technologies. It leverages a backend
API to manage and serve data.

## [Demo Admin](https://ecommerce-admin-pi-sage.vercel.app)

Here is the demo of the project. You can login with the following credentials:

**Email**: `yonilav532@amxyy.com`

**Password**: `JFrQ7dkMUwnAX6q`

Here is [source code](https://github.com/yaroslav-honchar/nextjs-ecommerce-admin) of the project.

## [Demo Client](https://nextjs-ecommerce-store-kappa.vercel.app/)

Here is the demo store of the admin panel and try by some products.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run format`: Formats the code using Prettier.
- `npm run prepare`: Sets up Husky Git hooks.

## Setup

To set up the project locally, follow these steps:

1. Clone the repository:
   ```sh git clone <repository-url> && cd <repository-directory>```

2. Install dependencies:  
   ```npm install```
3. Set up environment variables:
    - Copy the `.env.example` file to `.env`:
        - cp .env.example .env
        - Update the `NEXT_PUBLIC_API_URL` in the `.env` file with your API URL. Be sure that you have created your store
          in the [admin panel](https://ecommerce-admin-pi-sage.vercel.app). And copied the store id on the settings page.
4. Run the development server:  
   ```npm run dev```
5. Build the application for production:  
   ```npm run build```
6. Start the production server:  
   ```npm run start```

## Tech Stack

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework that enables server-side rendering and static site generation.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **TypeScript**: A statically typed superset of JavaScript that enhances code quality and maintainability.

### State Management

- **Zustand**: A small, fast, and scalable state management solution.

### UI Components

- **@headlessui/react**: Unstyled, fully accessible UI components.
- **lucide-react**: A collection of simple and beautiful SVG icons.

### Utilities

- **axios**: A promise-based HTTP client for making API requests.
- **classnames**: A utility for conditionally joining class names.
- **react-hot-toast**: A library for creating notifications.

### Development Tools

- **ESLint**: A tool for identifying and fixing problems in JavaScript code.
- **Prettier**: An opinionated code formatter.
- **Husky**: A tool for managing Git hooks.
- **lint-staged**: A tool for running linters on staged Git files.
- **PostCSS**: A tool for transforming CSS with JavaScript plugins.

## Environment Configuration

The project uses environment variables to configure the API URL, which can be set in the `.env` file. An example
configuration is provided in the `.env.example` file.

This setup ensures a robust and scalable e-commerce platform with a modern development workflow.

## License

This project is licensed under the MIT License.
