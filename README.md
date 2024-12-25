# Track Me Application

# Description
- Track Me is a real-time location tracking application built using Node.js, Socket.IO, and Leaflet.js. The app allows users to share and view live location updates on an interactive map.

# Features
- 🗺️ Real-Time Location Sharing: Share and track live user locations.
- 🌍 Interactive Map: Built with Leaflet.js for seamless user interaction.
- 👥 Multi-User Support: View multiple users on the same map (demonstrated with dummy data).

# Prerequisites
- Before you begin, ensure you have the following installed on your system:
- - Node.js (v16 or higher)
- - npm (comes bundled with Node.js)
- - Basic terminal/command-line skills
- - Installation and Setup
- - Download and Extract the Project or Clone the Project

- Extract the contents of the provided track-me.zip file into a folder.

# Navigate to the Project Directory
- Copy code
- cd track-me
- Install Dependencies by running - npm i
- Start the Application by running -  npx nodemon app.hjs

# Access the App
- Open your browser and visit: http://localhost:3000

# Testing with Dummy Locations
- To test the app with multiple users:
- Open Multiple Tabs:
- Open multiple browser tabs pointing to http://localhost:3000.
- Use Dummy Data:
- - Add the following latitude/longitude values in your script.js file for static location testing:
        Location 1:
        Latitude: 37.7749, Longitude: -122.4194 (San Francisco, USA)
        Location 2:
        Latitude: 40.7128, Longitude: -74.0060 (New York City, USA)
        Reload the tabs to view markers for each simulated location.

# Demo Video
Here is a demo of the application:
![Track Me Demo](/public/Track-me.mp4)

> The application tracks and displays multiple users on a real-time map.
