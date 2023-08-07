const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const secretKey = process.env.OPENAI_SECRET_KEY;

const config = new Configuration({
  apiKey: secretKey,
});

const openai = new OpenAIApi(config);

const runPrompt = async (average) => {
  const prompt = `I listened to an average of ${average} decibels 
  in a span of ten seconds. Is it healthy, and if not, give me a list of suggestions in a parsable JSON format as so:
  [ 
  {
    "analysis": "${average < 70 ? 'healthy' : 'unhealthy'}"
    "suggestions": ["suggestion", "suggestion"]
  }
]
   Where the analysis first states whether it is a healthy range or not and why (healthy if average < 70db), and a list of suggestions to continue being healthy. Healthy is considered anything below 70db`;

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: prompt,
      },
    ],
    max_tokens: 2048,
    temperature: 0,
  });

  if (
    !response ||
    !response.data ||
    !response.data.choices ||
    response.data.choices.length === 0
  ) {
    console.error("Invalid API response:", response);
    return;
  }

  const generatedContent = response.data.choices[0].message.content;
  try {
    const parsedResponse = JSON.parse(generatedContent);
    console.log(parsedResponse)
    return parsedResponse;
  } catch (error) {
    console.error("Error parsing JSON response:", error);
  }
};

module.exports = {runPrompt};