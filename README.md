# Meld Sandbox Demo

This project demonstrates a **basic integration with the Meld White-Label API Sandbox** using a simple **Node.js, Express backend** and **HTML/JavaScript frontend**.

The demo shows how to:
- Authenticate with the Meld API
- Retrieve supported cryptocurrencies
- Get a crypto purchase quote
- Create a crypto purchase session

The goal of this project is to demonstrate a working **on-ramp flow simulation** using the Meld Sandbox environment.

---

# Architecture

The application follows a simple architecture:

Frontend (HTML + JavaScript)  
↓  
Backend (Node.js + Express)  
↓  
Meld Sandbox API

The backend is used to securely communicate with the Meld API while keeping the API key protected.

---

# Features Demonstrated

## 1. Retrieve Supported Cryptocurrencies
Endpoint used: # Meld White-Label API Sandbox Demo

This project demonstrates a **basic integration with the Meld White-Label API Sandbox** using a simple **Node.js backend** and **HTML/JavaScript frontend**.

The demo shows how to:
- Authenticate with the Meld API
- Retrieve supported cryptocurrencies
- Get a crypto purchase quote
- Create a crypto purchase session

The goal of this project is to demonstrate a working **on-ramp flow simulation** using the Meld Sandbox environment.

---

# Architecture

The application follows a simple architecture:

Frontend (HTML + JavaScript)  
↓  
Backend (Node.js + Express)  
↓  
Meld Sandbox API

The backend is used to securely communicate with the Meld API while keeping the API key protected.

---

# Features Demonstrated

## 1. Retrieve Supported Cryptocurrencies
Endpoint used: GET /service-providers/properties/crypto-currencies

This returns a list of supported cryptocurrencies and networks available in the selected country.

---

## 2. Retrieve a Crypto Quote
Endpoint used: POST /payments/crypto/quote

This simulates a quote request for purchasing cryptocurrency.

Example request parameters:
- Source Currency: USD
- Destination Currency: ETH
- Amount: 200 USD
- Country: US

The API returns:
- Exchange rate
- Fees
- Amount of crypto received
- Available service providers

---

## 3. Create a Purchase Session
Endpoint used: POST /crypto/session/widget

This creates a purchase session that would normally launch a payment widget for completing the transaction.

Example session parameters:
- Wallet Address
- Country Code
- Source Currency
- Destination Currency
- Service Provider

---

# Project Structure

```plaintext
├── README.md
├── backend
│   ├── .env                  # Environment variables (API key). Not included in repo — create this manually with your API key
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── server.js             # Express backend that proxies requests to Meld API
└── frontend
    ├── index.html            # Frontend UI with step-by-step guided flow
    └── script.js             # Frontend JavaScript for calling the backend
```

---

# Setup Instructions

## 1. Clone or Download the Project
git clone https://github.com/annaneesha/meld-sandbox-demo.git
cd meld-sandbox-demo

---

## 2. Install Dependencies
cd backend
npm install

Dependencies used:

- express
- axios
- cors
- dotenv

---

## 3. Configure Environment Variables

Create a `.env` file inside the backend/ folder.
MELD_API_KEY=YOUR_SANDBOX_API_KEY
This keeps the API key secure and prevents it from being exposed in the frontend.

---

## 4. Start the Backend Server
cd backend
node server.js

Server will run at: http://localhost:3000/

---

## 5. Open the Frontend

Open the `index.html` file in your browser.

You will see three buttons:

- Get Crypto List
- Get Quote
- Create Session

Clicking these buttons triggers API requests through the backend.

---

# Example Flow

1. Click **Get Crypto List**
   - Retrieves supported cryptocurrencies.

2. Click **Get Quote**
   - Simulates a crypto purchase quote.

3. Click **Create Session**
   - Creates a purchase session for completing the transaction.

The API responses are displayed on the page in JSON format.

---

# Security Considerations

The API key is stored in the `.env` file and accessed through the backend using `process.env.MELD_API_KEY`.

This prevents exposing the API key in the frontend and follows best practices for API integrations.

---

# Technologies Used

Frontend:
- HTML
- JavaScript

Backend:
- Node.js
- Express.js
- Axios

Other Tools:
- dotenv
- CORS

---

# Notes

This project uses the **Meld Sandbox environment** and is intended for demonstration purposes only. No real transactions are processed.

---

# Author

Aneesha Ann Aloysious