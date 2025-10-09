export const LANGUAGES = {
    EN: {
        ALERT_MESSAGES: {
            EMPTY_TITLE: 'Please enter the Regex title 😉',
            EMPTY_REGEX: 'The Regex cannot be empty.',
            SUCCESS: 'Regex saved successfully.',
            NO_REGEX_SAVED: 'No regex saved.',
            COPY_SUCCESS: 'Regex copied successfully.',
            DELETE_REGEX: 'Regex deleted successfully.'
        },
        SIDEBAR: {
            LABELTITLE: 'Your Regex'
        },
        MODAL_ADDREGEX: {
            SAVEREGEX_TITLE: 'Save Your Regex',
            SAVEREGEX_SUBTITLE: 'Save your regex here with its title so you can use it at any time.',
            LABELINPUT_TITLE: 'Title',
            PLACEHOLDERINPUT_TITLE: 'Title of your Regex',
            LABELINPUT_REGEX: 'Regex',
            PLACEHOLDERINPUT_REGEX: '^\d{2}-\d{2}-\d{4}$',
            BUTTON_CANCEL: 'Cancel',
            BUTTON_SAVE: 'Save'
        },
        FOOTER_TEXT: {
            PARAGRAPH: 'I would really like to receive your feedback, you can do it here ⬇️',
            TEXT_FORM: 'Form'
        }
    },
    ES: {
        ALERT_MESSAGES: {
            EMPTY_TITLE: 'Ingresa el titulo de la Regex, por favor 😉',
            EMPTY_REGEX: 'La Regex no puede estar vacia',
            SUCCESS: 'Regex guardada correctamente',
            NO_REGEX_SAVED: 'No hay regex guardadas',
            COPY_SUCCESS: 'Regex copiada correctamente',
            DELETE_REGEX: 'Regex eliminada correctamente'
        },
        SIDEBAR: {
            LABELTITLE: 'Tus Regex'
        },
        MODAL_ADDREGEX: {
            SAVEREGEX_TITLE: 'Guarda Tu Regex',
            SAVEREGEX_SUBTITLE: 'Guarda aqui tu regex con su titulo para poder usarla en cualquier momento',
            LABELINPUT_TITLE: 'Titulo',
            PLACEHOLDERINPUT_TITLE: 'Titulo de tu Regex',
            LABELINPUT_REGEX: 'Regex',
            PLACEHOLDERINPUT_REGEX: '^\d{2}-\d{2}-\d{4}$',
            BUTTON_CANCEL: 'Cancelar',
            BUTTON_SAVE: 'Guardar'
        },
        FOOTER_TEXT: {
            PARAGRAPH: 'Me serviría muchísimo recibir tu feedback, puedes hacerlo en este link ⬇️',
            TEXT_FORM: 'Formulario'
        }
    }
}

export const PROMPTS = {
    FIND_PROMPT: "Actúa como un experto en expresiones regulares. Analiza la siguiente regex y explica de forma clara y concisa qué patrones de texto puede encontrar.Tu respuesta debe tener:1. Mostrar nuevamente la regex destacada. 2. Una breve explicación en lenguaje sencillo sobre lo que busca. 3. Una lista en bullets con los componentes principales de la regex y qué significan.",
    TRANSLATE_PROMPT: "Actúa como un traductor de expresiones regulares. Tu tarea es tomar la siguiente regex y explicar en lenguaje natural, paso a paso, qué significa cada parte.Tu respuesta debe incluir: 1. Mostrar nuevamente la regex destacada. 2. Una explicación detallada en lenguaje claro y sencillo. 3. Desglose línea por línea o símbolo por símbolo en bullets, traduciendo cada elemento de forma entendible."
}

export const AI_INPUT_PLACEHOLDERS = {
    EN: [
        'Write your regex',
        'Translate your regex',
        'Help me with my regex'
    ],
    ES: [
        'Escribe tu regex',
        'Traduce tu regex',
        'Ayudame con mi regex'
    ]
}