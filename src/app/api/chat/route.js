import { google } from '@ai-sdk/google';
import { convertToCoreMessages, streamText } from "ai";
import { PROMPTS } from '@/lib/consts';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req) {
  const body = await req.json();
  console.log(body);
  const { messages, type, language } = body;

  console.log("Tipo seleccionado:", type);
  console.log("Tipo seleccionado:", language);


  const result = streamText({
    model: google('gemini-2.0-flash'),
    system: `El idioma de preferencia para tu respuesta debe ser en lenguaje ${language === 'ES' ? 'español' : 'inglés'}. El usuario podra cambiarlo luego, si así lo desea. ${type === 'encontrar' || type === 'find' ? PROMPTS.FIND_PROMPT : PROMPTS.TRANSLATE_PROMPT}`,
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}