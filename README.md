# automated-parking

## Project Description
Automated Parking is a system designed to manage parking spots efficiently. It provides features such as:
- Adding new parking spots
- Retrieving available parking spots
- Updating the status of parking spots
- Calculating time-based pricing for parking spots

## Setup Instructions
### Dependencies
- Node.js
- MongoDB

### Installation Steps
1. Clone the repository:
   ```
   git clone https://github.com/akaday/automated-parking.git
   ```
2. Navigate to the project directory:
   ```
   cd automated-parking
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Building the React App
1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```
2. Build the React app:
   ```
   npm run build
   ```

## Usage Instructions
### Starting the Server
1. Ensure MongoDB is running on your local machine.
2. Start the server:
   ```
   node index.js
   ```
3. The server will be running on `http://localhost:5000`.

### Using the API
- To get all parking spots:
  ```
  GET /api/spots
  ```
- To create a new parking spot:
  ```
  POST /api/spots
  ```
- To update entry and exit times for a parking spot and calculate the price:
  ```
  PUT /api/spots/:id/times
  ```

## Running the Python Script
1. Ensure MongoDB is running on your local machine.
2. Navigate to the `scripts` directory:
   ```
   cd scripts
   ```
3. Run the Python script:
   ```
   python user_data_reel.py
   ```

## Setting Up the Frontend
1. Create a `public` directory in the project root.
2. Add an `index.html` file in the `public` directory with a basic form to add parking spots.
3. Add a `script.js` file in the `public` directory to handle form submission and interact with the backend API.
4. Add a `styles.css` file in the `public` directory to style the form and parking spots list.

## Deploying the Application
1. Ensure all dependencies are installed and the server is running locally.
2. Choose a deployment platform (e.g., Heroku, AWS, etc.).
3. Follow the platform's instructions to deploy the application.
4. Ensure the MongoDB connection string is updated to use the production database.
5. Ensure your `index.js` serves the static files correctly from the `frontend/build` directory.

## Contributing Guidelines
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push the branch to your fork.
4. Create a pull request with a description of your changes.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.
