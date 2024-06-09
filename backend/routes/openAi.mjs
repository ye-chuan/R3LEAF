import express from 'express';
import bodyParser from 'body-parser'; 
import { identifyObject, reccomendVideos } from '../controllers/openAiController.mjs'; 

const router = express.Router();
router.use(bodyParser.json());

router.post("/identify", async (req, res) => {
  try {
    const { caption, imageBase64 } = req.body;
    const { productName, material } = await identifyObject(caption, imageBase64);
    res.send({ productName, material });
  } catch (e) {
    console.error("An error occurred:\n", e);
    res.status(500).send("Internal Server Error");
  }
});

router.put("/reccomend", async (req, res) => {
  try {
    const { itemToBeUpcycled } = req.body;
    const urlToBeReccommended = await reccomendVideos(itemToBeUpcycled);
    console,log(urlToBeReccommended);
    res.send(urlToBeReccommended);
  } catch (e) {
    console.error("An error occurred:\n", e);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
