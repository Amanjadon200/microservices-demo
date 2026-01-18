
const express = require("express");
const app = express();

app.use(express.json());

app.get("/users/:id", (req, res) => {

  res.json({
    service: "USER-SERVICE",
    userId: req.params.id,
    name: "Aman",
    role: "ENGINEER"
  });

});

app.get("/health", (req, res) => {
  res.send("user-service is healthy");
});

const PORT = 8081;
app.listen(PORT, () => {
  console.log("user-service running on port " + PORT);
});
