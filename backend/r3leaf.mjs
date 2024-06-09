import express, { urlencoded, json } from 'express';
import openAiRouter from "./routes/openAi.mjs";

const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());

const PORT = process.env.PORT | 3000;


app.use("/openai", openAiRouter);

app.listen(PORT, () => {
  console.log("Server running at port " + PORT);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});