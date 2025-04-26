# 📰 POV - Point of View: News Streaming Platform

POV (Point of View) is a full-stack news video streaming platform that bridges traditional news broadcasting with the digital age. It empowers users to explore personalized news content and enables news channels to publish their videos via a subscription-based model.

## 🚀 Project Overview

- **Frontend**: React.js (responsive and dynamic)  
- **Backend**: Flask (Python)  
- **Database**: MySQL  
- **Cloud Storage**: AWS S3 (for scalable video storage, up to 5TB)  
- **Authentication & Subscription**: Firebase (user authentication and subscription management)  
- **Recommendation Engine**: Machine Learning (K-Nearest Neighbors algorithm)  
- **Payment Gateway**: Stripe (channel subscription payments)

## 🎯 Key Features

- 🔑 Secure User Authentication (Login/Signup via Firebase)  
- 📺 Video Streaming — explore news videos across multiple genres  
- 🧠 Personalized Video Recommendations — based on user watch history  
- ❤️ Like and Comment on videos  
- 📊 Admin-Uploaded News Content — ensuring verified and authentic news  
- 🎬 Channel Pages — explore videos by specific news channels  
- 🗂️ Genre Exploration — browse news videos by category (Business, Sports, Tech, etc.)  
- 🔍 Robust Search System  
- 💳 Channel Subscription System — Stripe integration with Basic, Standard, Premium plans  
- ☁️ AWS S3 Storage — for highly scalable and reliable video storage  
- 🔒 Strong Security Practices — user data privacy and secure video handling  
- 📈 Feedback Mechanism — users can submit feedback for continuous platform improvement



## 🔧 Installation Guide
Backend Setup (Flask + ML + Database)
Navigate to the backend:

cd backend

Install dependencies:

pip install flask mysql-connector-python
Setup the MySQL database using queries.sql.

Run the backend server:
python app.py


Frontend Setup (React.js)

Navigate to the frontend:
cd frontend

Install Node modules:

npm install

npm install react-scripts bootstrap react-icons react-router-dom axios @stripe/react-stripe-js @stripe/stripe-js

Start the React app:

npm start

## 🛡️ Security & Performance
🔒 User authentication through Firebase

📦 Content storage through AWS S3

🛡️ Protection against unauthorized content upload

⚡ Optimized video loading for seamless streaming even at peak traffic

🔄 Regular database backups ensure data integrity

📊 Software Development Approach
📈 Agile Development Model
Iterative and flexible development with continuous feedback cycles for evolving platform features.

