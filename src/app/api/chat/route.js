import { google } from '@ai-sdk/google';
import { convertToCoreMessages, streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req) {
  const body = await req.json();
  const { messages, type } = body;

  console.log("Tipo seleccionado:", type);

  const result = streamText({
    model: google('gemini-2.0-flash'),
    system: `Eres un asistente que ayuda a buscar o traducir expresiones regulares (Regex). Dime en que modo estas: ${type}`,
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}