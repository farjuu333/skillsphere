Project Name: SkillSphere - Online Learning Platform
Live Site: https://skillsphere-beta.vercel.app

 Project Purpose
SkillSphere is a modern, high-performance online learning platform designed to help students acquire new skills through a premium digital experience. The project focuses on providing a seamless user interface where learners can browse courses across various categories, view detailed curriculums, and manage their educational journey. It ensures security through robust authentication and provides an engaging environment with modern animations and components.

 Key Features
Protected Routes: Sensitive pages like Course Details are restricted to logged-in users only.

Secure Authentication: Powered by Better Auth with Google OAuth integration for easy and secure access.

Comprehensive Course Details: Dedicated pages for each course featuring high-quality images, instructor info, ratings, and descriptions.

Static Course Curriculum: A clean, organized list of lessons providing a clear roadmap for learners.

Fully Responsive Design: Optimized for mobile, tablet, and desktop using Tailwind CSS and HeroUI.

Interactive UI/UX: Features advanced animations (Framer Motion) and high-quality sliders (SwiperJS) for a premium feel.

Real-time Notifications: Instant feedback on user actions like login/logout via React Toastify.

Database Integration: Scalable data management using MongoDB.

 NPM Packages Used
The following technologies and libraries were used to build this project:

Core Framework: Next.js

Styling: Tailwind CSS

UI Components: HeroUI (NextUI)

Database: MongoDB

Authentication: Better Auth

Icons: React Icons

Animations: Framer Motion & [Gravity UI]

Sliders/Carousels: Swiper.js

Loaders: [React Loader Spinner]

Notifications: React Toastify

 Getting Started
Clone the Repository:

Bash
git clone https://github.com/farjuu333/skillsphere.git
Install Dependencies:

Bash
npm install
Setup Environment Variables:
Create a .env.local file and add your MongoDB URI, Better Auth secrets, and Google Client IDs.

Run the Development Server:

Bash
npm run dev