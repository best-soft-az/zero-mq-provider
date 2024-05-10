const express = require("express");
const zmq = require("zeromq");

const app = express();

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.use(express.json());

app.use("/", async (req, res) => {
  const { cashboxIP, requestBody } = req.body;

  try {
    const sock = new zmq.Request();

    console.log(`Message sent to ${cashboxIP}...`);

    sock.connect(cashboxIP);
    sock.send(requestBody);

    const [result] = await sock.receive();

    res.send(result);
  } catch (error) {
    return res.status(500);
  }
});
