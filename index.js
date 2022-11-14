import express from 'express';
import multer from "multer";

// Custom Functions
import imageGeneration from './OpenAI/GenerateImages.js';

// Multer Config
const storage = multer.memoryStorage()
const upload = multer({ storage: storage });

// Express Config
const app = express();
const port = 3001

app.post('/openai/image-generation', upload.none(), async (req, res) => {

  if (req.body === undefined) {
    res.send('Error no body');
    return;
  }

  const description = req.body.description;
  const apiData = await imageGeneration(description);

  res.send(apiData);
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});