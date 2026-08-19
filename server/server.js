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
  const name = (req.body && req.body.name) || 'هذا العطر';
  const category = (req.body && req.body.category) || '';
  const description = (req.body && req.body.description) || '';
  if (!ai) {
    return res.json({ text: `تفاصيل ${name}:\n• رائحة أنيقة وثبات مميز\n• مناسب للاستخدام اليومي والمناسبات\n• تركيبة مختارة بعناية من القيصر` });
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `أنت خبير عطور في متجر القيصر. اكتب وصفاً عربياً قصيراً وحقيقياً قدر الإمكان للعطر التالي:
    الاسم: ${name}
    الفئة: ${category}
    وصف المتجر: ${description}

    أجب في 3 نقاط فقط عن طابع الرائحة المتوقع ودرجة الثبات أو الانتشار والاستخدام المناسب. اذكر أن التفاصيل تقديرية إن لم تكن موثقة، ولا تخترع مكونات دقيقة أو فوائد صحية.`,
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
