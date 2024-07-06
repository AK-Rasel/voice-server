const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post("/upload", upload.single("audio"), (req, res) => {
  const { text } = req.body;
  const audio = req.file;
  const data = {
    text,
    audio,
  };

  if (!text || !audio) {
    return res.status(400).send("Missing text or audio");
  }

  // Process the text and audio
  console.log(data);
  // console.log("Received audio:", audio);

  res.send("Data received");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
