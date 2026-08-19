const fallback = (name) => ({
  text: `تفاصيل ${name}:\n• رائحة أنيقة وثبات مميز\n• مناسب للاستخدام اليومي والمناسبات\n• تركيبة مختارة بعناية من القيصر`,
});

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { name = 'هذا العطر', category = '', description = '' } = request.body || {};
  const apiKey = process.env.GOOGLE_GENAI_API_KEY;

  if (!apiKey) {
    return response.status(503).json({ error: 'AI API key is not configured' });
  }

  const prompt = `أنت خبير عطور في متجر القيصر. اكتب وصفاً عربياً قصيراً وحقيقياً قدر الإمكان للعطر التالي:
الاسم: ${name}
الفئة: ${category}
وصف المتجر: ${description}

أجب في 3 نقاط فقط:
• نوتات أو طابع الرائحة المتوقع، واذكر أنها تقديرية إن لم تكن موثقة
• درجة الثبات أو الانتشار بصياغة غير قطعية
• أفضل وقت أو مناسبة لاستخدامه
لا تخترع مكونات دقيقة أو معلومات عن ماركة غير مذكورة، ولا تذكر فوائد صحية أو طبية.`;

  try {
    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${encodeURIComponent(apiKey)}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { maxOutputTokens: 220, temperature: 0.6 },
        }),
      },
    );

    if (!geminiResponse.ok) {
      console.error('Gemini API returned', geminiResponse.status);
      return response.status(502).json({ error: 'Gemini request failed' });
    }

    const data = await geminiResponse.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

    if (!text) {
      return response.status(502).json({ error: 'Gemini returned no text' });
    }

    return response.status(200).json({ text });
  } catch (error) {
    console.error('Gemini request failed:', error);
    return response.status(502).json({ error: 'Gemini request failed' });
  }
}
