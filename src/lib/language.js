'use client'
export const setLanguage = (lang) => {
    localStorage.setItem('language', lang);
}

export const getLanguage = () => {
    let language = '';
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
        const language = localStorage.getItem('language');
        if (language === 'undefined' || language === 'null') {
            setLanguage('ES');
            return language
        }
    }
    return language ? language : 'ES';
}