const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = process.env.MELD_API_KEY;
if (!API_KEY) {
  console.error("Missing MELD API key. Set API_KEY in environment.");
  process.exit(1);
}

app.get("/crypto-list", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api-sb.meld.io/service-providers/properties/crypto-currencies",
      {
        headers: {
          "Authorization": `BASIC ${API_KEY}`, 
          "Meld-Version": "2025-03-04"          
        },
        params: {
          countries: "US",
          accountFilter: true
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message); // log full error body
    res.status(500).json({ error: error.message });
  }
});

app.post("/quote", async (req, res) => {
  try {
    const response = await axios.post(
      "https://api-sb.meld.io/payments/crypto/quote",
      {
        sourceCurrencyCode: "USD",
        destinationCurrencyCode: "ETH",
        sourceAmount: "200",
        countryCode: "US"
      },
      {
        headers: {
          "Authorization": `BASIC ${API_KEY}`,
          "Meld-Version": "2025-03-04",
          "Content-Type": "application/json"
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Meld API error:", error.response?.data || error.message);
    res.status(500).json({
      error: error.message,
      details: error.response?.data
    });
  }
});

app.post("/create-session", async (req, res) => {
  try {
    const response = await axios.post(
      "https://api-sb.meld.io/crypto/session/widget",
      {
        sessionData: {
          walletAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
          countryCode: "US",
          sourceCurrencyCode: "USD",
          sourceAmount: "100",
          destinationCurrencyCode: "BTC",
          paymentMethodType: "CREDIT_DEBIT_CARD",
          serviceProvider: "TRANSAK"
        },
        sessionType: "BUY"
      },
      {
        headers: {
          "Authorization": `BASIC ${API_KEY}`,
          "Meld-Version": "2025-03-04",
          "Content-Type": "application/json"
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Meld API error:", error.response?.data || error.message);
    res.status(500).json({
      error: error.message,
      details: error.response?.data
    });
  }
});

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});