import { LANGUAGES } from "./consts";
export const saveRegex = (title, regex, language) => {
    if (title.trim() === "") return new Error(LANGUAGES[language].ALERT_MESSAGES.EMPTY_TITLE);
    if (regex.trim() === "") return new Error(LANGUAGES[language].ALERT_MESSAGES.EMPTY_REGEX);

    const generatedRegex = JSON.parse(localStorage.getItem('Regexs')) || [];
    generatedRegex.push({ title, regex });

    localStorage.setItem('Regexs', JSON.stringify(generatedRegex));
}