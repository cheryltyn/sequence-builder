import OpenAI from "openai";
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.VITE_OPENAI_API_KEY
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "give me a 30 mins yoga sequence for beginners." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0].message.content);
}

main();
