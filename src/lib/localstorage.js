'use client'
// import { LANGUAGES } from "./consts";
export const saveRegex = (title, regex) => {
    // if (title.trim() === "") return new Error(LANGUAGES[language].ALERT_MESSAGES.EMPTY_TITLE);
    // if (regex.trim() === "") return new Error(LANGUAGES[language].ALERT_MESSAGES.EMPTY_REGEX);

    const generatedRegex = JSON.parse(localStorage.getItem('Regexs')) || [];
    generatedRegex.push({ title, regex });

    localStorage.setItem('Regexs', JSON.stringify(generatedRegex));
}

export const getRegex = () => {
    // let error = null;
    const savedRegex = JSON.parse(localStorage.getItem('Regexs')) || [];

    // if (savedRegex.length === 0) error = new Error('No regex.');

    return savedRegex
};