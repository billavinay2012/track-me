const socket = io();

// Create the map and default location
let map;
let markers = {};

// Get the user's current location and set it as the default
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      map = L.map("map").setView([latitude, longitude], 16);

      // Emit the user's location to the server
      socket.emit("send-location", { latitude, longitude });

      // Add OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "OpenStreetMap",
      }).addTo(map);
    },
    (error) => {
      console.error("Error fetching location:", error);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000,
    }
  );
} else {
  alert("Geolocation is not supported by your browser.");
}


// Listen for location updates from other users
socket.on("receive-location", (data) => {
  const { id, latitude, longitude } = data;

  // If the marker for this user already exists, update its position
  if (markers[id]) {
    markers[id].setLatLng([latitude, longitude]);
    map.setView([latitude, longitude]);
  } else {
    // Otherwise, create a new marker
    markers[id] = L.marker([latitude, longitude]).addTo(map);
  }
});

// Remove a user's marker when they disconnect
socket.on("user-disconnected", (id) => {
  if (markers[id]) {
    map.removeLayer(markers[id]);
    delete markers[id];
  }
});

