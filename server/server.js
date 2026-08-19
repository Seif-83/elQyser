// Simple Express server to proxy requests to Google GenAI
// Usage: set environment variable GOOGLE_GENAI_API_KEY then run `node server/server.js`

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { GoogleGenAI } = require('@google/genai');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const apiKey = process.env.GOOGLE_GENAI_API_KEY || '';
let ai = null;
if (apiKey) {
  try {
    ai = new GoogleGenAI({ apiKey });
  } catch (e) {
    console.warn('Failed to init GoogleGenAI:', e);
  }
}

app.post('/api/benefits', async (req, res) => {
  const name = (req.body && req.body.name) || 'المنتج';
  if (!ai) {
    return res.json({ text: `تفاصيل ${name}:\n• رائحة أنيقة وثبات مميز\n• مناسب للاستخدام اليومي والمناسبات\n• تركيبة مختارة بعناية من القيصر` });
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `بصفتك خبير عطور، اذكر نوتات الرائحة ودرجة الثبات والاستخدام المناسب لعطر "${name}" باختصار شديد. اجعل الإجابة عربية جذابة وودودة بصيغة نقاط مختصرة.`,
      config: { maxOutputTokens: 200, temperature: 0.7 },
    });

    return res.json({ text: response.text || null });
  } catch (err) {
    console.error('GenAI error:', err);
    return res.status(500).json({ text: `نعتذر، حدث خطأ أثناء جلب المعلومات.` });
  }
});

const port = process.env.PORT || 5174;
app.listen(port, () => console.log(`AI proxy running on http://localhost:${port}`));
