
// Frontend-safe AI call: proxy requests to a backend endpoint.
// This avoids bundling server-side SDKs or exposing API keys in the browser.

import { Product } from '../types';

const FALLBACK = (name: string) => `تفاصيل ${name}:\n• رائحة أنيقة وثبات مميز\n• مناسب للاستخدام اليومي والمناسبات\n• تركيبة مختارة بعناية من القيصر`;

export const getPerfumeDetails = async (product: Product): Promise<string> => {
  try {
    const res = await fetch('/api/benefits', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: product.name,
        category: product.category,
        description: product.description,
      }),
    });

    if (!res.ok) {
      console.warn('AI proxy returned', res.status);
      return FALLBACK(product.name);
    }

    const json = await res.json();
    return json.text || FALLBACK(product.name);
  } catch (err) {
    console.error('Error calling AI proxy:', err);
    return FALLBACK(product.name);
  }
};
