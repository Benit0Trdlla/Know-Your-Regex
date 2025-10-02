export const setLanguage = (lang) => {
    localStorage.setItem('language', lang);
}

export const getLanguage = () => {
    const language = localStorage.getItem('language');
    if (language === 'undefined' || language === 'null') {
        setLanguage('ES');
        return language
    }
    return language
}