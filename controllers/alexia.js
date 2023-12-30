const {
    GoogleGenerativeAI,
} = require("@google/generative-ai");

const MODEL_NAME = "gemini-pro";
const API_KEY = "AIzaSyCQP7r3dQl7bECxGTQQu-BwEyZ_c9LKjKc";

const alexiaRun = (async (req, res) => {
    const { question } = req.body;
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const chat = model.startChat({
        history: [],
        generationConfig: {
            maxOutputTokens: 100,
        },
    });

    const msg = question

    const result = await chat.sendMessage(msg);
    const response = await result.response;
    return res.status(200).json({ response })
});

module.exports = {
    alexiaRun
}