# 3D Developer Portfolio Walkthrough

I have built a modern, 3D-enabled developer portfolio using **React**, **Three.js**, and **Tailwind CSS**.

## Project Structure
- `src/components/canvas`: Contains 3D scenes (Computers, Earth, Stars).
- `src/components/dom`: Contains UI components (Navbar, Hero, About, Works, Contact).
- `src/hoc`: Higher-Order Components for animations and layout wrappers.
- `src/constants`: Project data and configuration.

## Key Features
- **3D Hero Section**: Interactive 3D setup using React Three Fiber.
- **Project Cards**: 3D-tilt enabled cards for showcasing work.
- **Star Background**: Procedurall generated star field that rotates.
- **Smooth Animations**: Powered by Framer Motion.

## Prerequisites
- **Node.js**: You must have Node.js installed to run this project.
  1. Download and install it from [nodejs.org](https://nodejs.org/).
  2. Verify verification by typing `node -v` and `npm -v` in your terminal.

## Setup Instructions
> [!IMPORTANT]
> The automated dependency installation failed due to environment restrictions. You **MUST** run the following command manually to start the project.

1. Open your terminal and navigate to the project folder:
   ```powershell
   cd C:\Users\91878\Desktop\3d-portfolio
   ```
   *Note: Using the absolute path is recommended to avoid "path not found" errors.*

2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the link shown in the terminal (usually `http://localhost:5173`).

## Deployment (Vercel)
To deploy your portfolio to the web for free:

1.  **Open Terminal** in your project folder:
    ```powershell
    cd C:\Users\91878\Desktop\3d-portfolio
    ```

2.  **Run Vercel Deployment**:
    ```powershell
    npx vercel
    ```
    - If asked to install Vercel CLI, type `y` and Enter.
    - Log in with your Vercel account (Github/Email).
    - Answer default to all questions (Keep pressing Enter):
        - Set up and deploy? [Y/n] **y**
        - Which scope? **[Enter]**
        - Link to existing project? [N/y] **n**
        - Project name? **[Enter]**
        - In which directory? **[Enter]**
        - Want to modify settings? [N/y] **n**

3.  **Wait**: It will install dependencies, build, and deploy.
4.  **Done!**: It will give you a `Production: https://...` link. Click it to view your live site.

## Customization
- Update `src/constants/index.js` to change your Name, Links, and Projects.
- Add your own 3D models to `src/components/canvas/Computers.jsx` (currently using a placeholder).
