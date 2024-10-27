document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('parkingForm');
    const parkingSpotsList = document.getElementById('parkingSpotsList');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const spotNumber = document.getElementById('spotNumber').value;
        const entryTime = document.getElementById('entryTime').value;
        const exitTime = document.getElementById('exitTime').value;
        const location = document.getElementById('location').value;
        const size = document.getElementById('size').value;

        try {
            const response = await fetch('/api/spots', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ spotNumber, isAvailable: true, entryTime, exitTime, location, size })
            });

            if (response.ok) {
                const newSpot = await response.json();
                displayParkingSpot(newSpot);
            } else {
                console.error('Failed to add parking spot');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });

    async function fetchParkingSpots() {
        try {
            const response = await fetch('/api/spots');
            const spots = await response.json();
            spots.forEach(spot => displayParkingSpot(spot));
        } catch (error) {
            console.error('Error:', error);
        }
    }

    function displayParkingSpot(spot) {
        const listItem = document.createElement('li');
        listItem.textContent = `Spot Number: ${spot.spotNumber}, Available: ${spot.isAvailable}, Price: $${spot.price.toFixed(2)}, Location: ${spot.location}, Size: ${spot.size}`;
        parkingSpotsList.appendChild(listItem);
    }

    fetchParkingSpots();
});
