import OpenAI from "openai";
import { config } from "dotenv";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORG_ID // Optional: Only needed if you need to specify organization ID at initialization
});

async function vision(prompt, formatOutput) {

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: prompt,
      timeout: 60000, // 60 seconds
    });

    // Log the full response object
    console.log("Full API Response:", JSON.stringify(response, null, 2));

    const formattedOutput = formatOutput(response.choices[0].message.content);
    console.log("Formatted Output:", formattedOutput);

    return formattedOutput;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Error Response:", JSON.stringify(error.response.data, null, 2));
      console.error("Error Status:", error.response.status);
      console.error("Error Headers:", JSON.stringify(error.response.headers, null, 2));
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Error Request:", JSON.stringify(error.request, null, 2));
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error Message:", error.message);
    }
    throw new Error("Failed to call OpenAI API");
  }
}

export default vision;
