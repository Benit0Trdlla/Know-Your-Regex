export const saveRegex = (title, regex) => {
    if (title.trim() === "") return new Error('Ingresa el titulo de la Regex, por favor 😉');
    if (regex.trim() === "") return new Error('La Regex no puede estar vacía');

    const generatedRegex = JSON.parse(localStorage.getItem('Regexs')) || [];
    generatedRegex.push({ title, regex });

    localStorage.setItem('Regexs', JSON.stringify(generatedRegex));
}