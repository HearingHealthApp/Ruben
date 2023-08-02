const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const secretKey = process.env.OPENAI_SECRET_KEY;

const config = new Configuration({
  apiKey: secretKey,
});

const openai = new OpenAIApi(config);

const runPrompt = async (average) => {
  const prompt = `I listened to an average of ${average} decibels 
  in a span of ten seconds. Is it healthy, and if not, give me suggestions in a parsable JSON format.
   `;

   const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    prompt: prompt,
    max_tokens: 2048,
    temperature: 1
   })

   const parsableJSONResponse = response.data.choices[0].text

   const parsedResponse = JSON.parse(parsableJSONResponse)

   console.log(parsedResponse)
};

runPrompt(10)
