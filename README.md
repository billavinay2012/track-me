Track Me Application
Description
Track Me is a real-time location tracking application built using Node.js, Socket.IO, and Leaflet.js. The app allows users to share and view live location updates on an interactive map.

Features
Real-time location sharing.
Interactive map powered by Leaflet.js.
Supports multiple users (demonstrated via dummy data).
Prerequisites
Ensure the following are installed on your system:

Node.js (version 16 or later)
npm (comes with Node.js)
Basic understanding of terminal/command-line.
Installation and Setup
Download and Extract the Project

Extract the contents of the provided track-me.zip file.
Navigate to the Project Directory

bash
Copy code
cd track-me
Install Dependencies

bash
Copy code
npm install
Start the Application

bash
Copy code
npm start
Access the App

Open your browser and go to http://localhost:3000.
Adding Dummy Locations (For Testing)
To test with multiple users or static locations:

Open multiple browser tabs pointing to http://localhost:3000.
Use the following dummy locations in your code (e.g., for testing markers):
Location 1: Latitude 37.7749, Longitude -122.4194 (San Francisco, USA)
Location 2: Latitude 40.7128, Longitude -74.0060 (New York City, USA)
Update the locations in the script.js file accordingly.
