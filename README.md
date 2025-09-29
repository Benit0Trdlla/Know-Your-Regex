# Know Your Regex

¿Necesitas utilizar una regex y no sabes cómo escribirla? ¿O tienes una expresión regular (regex) y quieres saber qué es lo que hace? ¡No te preocupes! Con la ayuda de Know Your Regex tus dudas se resolverán. La herramienta te muestra en detalle la regex que usaste o utilizarás y te ayudará a entender su funcionamiento. ¡Conocé tu regex ahora!

# Tecnologías utilizadas

- React
- Next.js
- JavaScript
- Tailwind
- Radix UI
- Lucide React
- Sooner
- Motion
- AI SDK Vercel
- Nuqs

# Setup breve

## Clonar el repositorio
```bash
git clone https://github.com/Benit0Trdlla/Know-Your-Regex.git
cd Know-Your-Regex
```
## Instalar dependencias
```bask
npm install
```
## o
```bash
npm i
```
## Iniciar proyecto en local
```bash
npm run dev
```

## Configurar .ENV
```bash
GOOGLE_GENERATIVE_AI_API_KEY= TU API KEY DE GOOGLE, EN ESTE CASO SE UTILIZA GEMINI-2.0-FLASH. 
```

# Estructura del proyecto

El proyecto se organiza de la siguiente manera:

- Api/Chat
    - Ruta en donde se utiliza la API de Google Gemini (gemini-2.0-flash) para encontrar o traducir tu Regex.

- Toggle Switch: aquí es donde se selecciona en qué modo va a funcionar la aplicación, teniendo dos opciones: 'Encontrar' y 'Traducir'. Por defecto se selecciona 'Encontrar'. 
    - Encontrar: analiza la regex y explica de forma clara y concisa qué patrones de texto puede identificar.
    - Traducir: toma la regex y explica en lenguaje natural, paso a paso, qué significa cada parte.
    - Ambos modos:
      1- Muestra nuevamente la regex destacada.
      2- Una explicación detallada en lenguaje claro y sencillo.
      3- Una lista en bullets con los componentes principales de la regex y qué significan.
      
- App SideBar
    - Espacio donde puedes guardar tus regex. Se almacenan en el localStorage con su título o una breve descripción.
    - Posibilidad de copiarlas haciendo clic sobre ellas de manera rápida.

