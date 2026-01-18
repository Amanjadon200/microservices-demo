
const express = require("express");
const app = express();

app.use(express.json());

app.get("/orders/:id", (req, res) => {

  res.json({
    service: "ORDER-SERVICE",
    orderId: req.params.id,
    status: "CONFIRMED",
    amount: 2500
  });

});

app.get("/health", (req, res) => {
  res.send("order-service is healthy");
});

const PORT = 8082;
app.listen(PORT, () => {
  console.log("order-service running on port " + PORT);
});
