'use client'
export const setLanguage = (lang) => {
    localStorage.setItem('language', lang);
}

export const getLanguage = () => {
    let language
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
        return language = localStorage.getItem('language');
    }
    return language = 'ES'
}