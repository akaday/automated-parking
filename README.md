# automated-parking

## Project Description
Automated Parking is a system designed to manage parking spots efficiently. It provides features such as:
- Adding new parking spots
- Retrieving available parking spots
- Updating the status of parking spots

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

## Contributing Guidelines
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push the branch to your fork.
4. Create a pull request with a description of your changes.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.
