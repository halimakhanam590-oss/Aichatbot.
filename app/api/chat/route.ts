import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
    });
    return NextResponse.json({ reply: response.text });
  } catch (error) {
    return NextResponse.json({ reply: 'Error generating response.' }, { status: 500 });
  }
}
