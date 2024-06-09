import fetch from 'node-fetch';
import { config } from 'dotenv';

config();

const apiKey = process.env.OPENAI_API_KEY;
const organization = process.env.OPENAI_ORG_ID;
const projectID = process.env.OPENAI_PROJECT_ID;

async function testOpenAI() {
  const url = 'https://api.openai.com/v1/chat/completions';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
    'OpenAI-Organization': organization,
    'OpenAI-Project-ID': projectID
  };

  const data = {
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'You are an assistant that answers questions.' },
      { role: 'user', content: 'What is the capital of France?' }
    ]
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log('API Response:', JSON.stringify(responseData, null, 2));
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testOpenAI();
