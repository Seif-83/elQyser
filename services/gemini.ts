
// Frontend-safe AI call: proxy requests to a backend endpoint.
// This avoids bundling server-side SDKs or exposing API keys in the browser.

const FALLBACK = (name: string) => `تفاصيل ${name}:\n• رائحة أنيقة وثبات مميز\n• مناسب للاستخدام اليومي والمناسبات\n• تركيبة مختارة بعناية من القيصر`;

export const getPerfumeDetails = async (itemName: string): Promise<string> => {
  try {
    const res = await fetch('/api/benefits', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: itemName }),
    });

    if (!res.ok) {
      console.warn('AI proxy returned', res.status);
      return FALLBACK(itemName);
    }

    const json = await res.json();
    return json.text || FALLBACK(itemName);
  } catch (err) {
    console.error('Error calling AI proxy:', err);
    return FALLBACK(itemName);
  }
};
