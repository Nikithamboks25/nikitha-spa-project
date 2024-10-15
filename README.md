# Single-Page Application for Learning Digital Skills

<p>This project features a Single Page Application (SPA) designed to provide undergraduate students with a platform to learn digital skills through a variety of tutorials on computer software applications essential for their coursework. The application is built with React and focuses on user-friendly navigation and dynamic content loading.</p>

<strong>Multi-Page Structure:</strong>

<b>The SPA includes several key pages:</b>
<ul>
  <li>Homepage: Offers an overview of the application.</li>
  <li>About Page: Provides information about the platform, its goals, and how it can help students.</li>
  <li>User Profile Page: Allows users to manage their profiles and save favorite tutorials.</li>
</ul>

<b>Routing:</b>
<p>Implemented using React Router to enable seamless navigation between pages without full-page reloads. This enhances the user experience and maintains the SPA's efficiency.</p>

<b>State Management:</b>
<p>The application uses React’s useState and useEffect hooks to manage component state and side effects, such as fetching tutorial data and handling user interactions. This allows for real-time updates to the user interface based on user actions.</p>

<b>Project Structure in src Folder:</b>
<ul>
  <li>components/: Contains reusable components that can be shared across different pages, promoting code reusability and maintainability.</li>
  <li>pages/: Hosts the main pages of the application, including Home, About, and UserProfile. Each page is designed to provide specific functionality and content.</li>
  <li>App.js: The main component where routing is defined. It orchestrates navigation and rendering of the different pages based on user interactions.</li>
  <li>index.js: The entry point of the application, initializing the React app and rendering the root component.</li>
</ul>




