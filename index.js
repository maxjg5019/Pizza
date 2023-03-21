const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const ChatGo = async (prompt) => {
  const Res = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });
  const resmessage = Res.data.choices[0].message;
  console.log(resmessage);

  console.log(Res.data.choices[0].message);
};
ChatGo("請使用繁體中文回答");
