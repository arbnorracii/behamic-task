1️⃣ Prerequisites
Ensure you have the following installed:

Node.js (>=14)
MongoDB (running locally or on a cloud provider)
npm (or yarn)
2️⃣ Installation
Clone the repository and navigate into it:

git clone https://github.com/arbnorracii/behamic-task.git
cd behamic-task

Install the dependencies:

npm install

3️⃣ Environment Variables
Create a .env file in the root directory and add the following:

PORT=5000
MONGO_URI=mongodb://localhost:27017/carRental
JWT_SECRET=your_jwt_secret

Replace your_jwt_secret with a secure secret key.

4️⃣ Running the Server
To start the server in development mode:

npm run dev

To start the server in production mode:

npm start
