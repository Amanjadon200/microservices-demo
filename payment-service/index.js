
const express = require("express");
const app = express();

app.use(express.json());

app.post("/payments", (req, res) => {

  res.json({
    service: "PAYMENT-SERVICE",
    paymentId: "PAY123",
    status: "SUCCESS"
  });

});

app.get("/health", (req, res) => {
  res.send("payment-service is healthy");
});

const PORT = 8083;
app.listen(PORT, () => {
  console.log("payment-service running on port " + PORT);
});
