import { google } from '@ai-sdk/google';
import { convertToCoreMessages, streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

// Prompts mode
const findPrompt = "Actúa como un experto en expresiones regulares. Analiza la siguiente regex y explica de forma clara y concisa qué patrones de texto puede encontrar.Tu respuesta debe tener:1. Mostrar nuevamente la regex destacada. 2. Una breve explicación en lenguaje sencillo sobre lo que busca. 3. Una lista en bullets con los componentes principales de la regex y qué significan.";

const translatePrompt = "Actúa como un traductor de expresiones regulares. Tu tarea es tomar la siguiente regex y explicar en lenguaje natural, paso a paso, qué significa cada parte.Tu respuesta debe incluir: 1. Mostrar nuevamente la regex destacada. 2. Una explicación detallada en lenguaje claro y sencillo. 3. Desglose línea por línea o símbolo por símbolo en bullets, traduciendo cada elemento de forma entendible.";

export async function POST(req) {
  const body = await req.json();
  console.log(body);
  const { messages, type, language } = body;

  console.log("Tipo seleccionado:", type);
  console.log("Tipo seleccionado:", language);


  const result = streamText({
    model: google('gemini-2.0-flash'),
    system: `El idioma de preferencia para tu respuesta debe ser en lenguaje ${language === 'ES' ? 'español' : 'inglés'}. El usuario podra cambiarlo luego. ${type === 'encontrar' || type === 'find' ? findPrompt : translatePrompt}`,
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}