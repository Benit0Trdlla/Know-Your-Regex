## Know YOur Regex

¿Necesitas utilizar una regex y no sabes cómo escribirla? ¿O tienes una expresión regular (regex) y quieres saber qué es lo que hace? ¡No te preocupes! Con la ayuda de Know Your Regex tus dudas se resolverán. La herramienta te muestra en detalle la regex que usaste o utilizarás y te ayudará a entender su funcionamiento. ¡Conocé tu regex ahora!

## Tecnologías utilizadas

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

## Setup breve

```bash
# Clonar el repositorio
[cd my-app](https://github.com/Benit0Trdlla/Know-Your-Regex.git)
```
```bask
# Instalar dependencias
npm install
# o
npm i
```
```bash
# Iniciar proyecto en local
npm run dev
```

## Estructura del editor

Se organiza en los siguientes componentes principales:

- Api/Chat
    - Ruta en donde se utiliza la API de Google Gemini (gemini-2.0-flash) para encontrar o traducir tu Regex.

- Toggle Switch: aquí es donde se selecciona en que modo va a funcionar la aplicacion, teniendo dos opcioes: 'Encontrar' y 'Traduccir'. Siendo por defecto 'Encontrar'. 
    - Encontrar: Analiza la regex y explica de forma clara y concisa qué patrones de texto puede encontrar.
    - Traducir: Toma la regex y explica en lenguaje natural, paso a paso, qué significa cada parte.
    - Ambos modos:
      1. Muestra nuevamente la regex destacada.
      2. Una explicación detallada en lenguaje claro y sencillo.
      3. Una lista en bullets con los componentes principales de la regex y qué significan.
      
- App SideBar
    - Lugar donde se puede guardar tus regex. Agrega en el locaslStorage la regex, con su titulo o breve descripcion.
    - Posibilidad de copiarlas dando click sobre la misma, de una manera rapida.

## Deploy en Vercel

Mirá el proyecto desplegado en [este enlace](#).
