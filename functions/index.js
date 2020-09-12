const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { response, request } = require('express');
const stripe = require("stripe")('sk_test_51HQI7wJTlvEOgV71gqXnEIuBFr5g3Vgn7PgBgZhmUy5RA6VlyQitO2Osnqpp3IbXeJPprFIPDlI6FPT7aYIx55wd007o7O6g0e');
// const request = require('request');
//Setup API


//-App config
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//Example end point

//http://localhost:5001/clone-1-e14e1/us-central1/api