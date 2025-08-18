'use client'
import { useQueryState } from 'nuqs'
import { getLanguage } from '@/lib/language';
import { useHidratationSolution } from '@/hooks/useHidratationSolution';

function ToggleSwitch() {
    const language = getLanguage();
    const isClient = useHidratationSolution()
    
    const [activeOption, setActiveOption] = useQueryState("type", {
        defaultValue: '',
        shallow: false,
        // scroll: false,
        // history: 'push'
    });

    const conditionalToggleAnimation = activeOption === "traducir" || activeOption === "translate" ? "translate-x-full" : "translate-x-0";
    
    return (
        <>
            <div className="relative bg-inherit rounded-full border-1 border-gray p-0.5 m-3 w-48">
                <div
                    className={`absolute top-0.5 bottom-0.5 w-1/2 bg-gray-500 rounded-full transition-transform duration-300 ease-in-out ${conditionalToggleAnimation}`}
                />

                <div className="relative flex">
                    <button
                        type='button'
                        onClick={() => setActiveOption(`${language === 'ES' ? 'encontrar' : 'find'}`)}
                        className={`flex-1 py-2 px-4 text-sm text-center font-medium rounded-full transition-colors duration-300 ${activeOption === "encontrar" || activeOption === "find" ? "text-white" : "text-gray-600 hover:text-gray-800"}`}
                    >
                        {isClient && language === 'ES' ? 'Encontrar' : 'Find'}
                    </button>
                    <button
                        type='button'
                        onClick={() => setActiveOption(`${language === 'ES' ? 'traducir' : 'translate'}`)}
                        className={`flex-1 py-2 px-4 text-sm text-center font-medium rounded-full transition-colors duration-300 ${activeOption === "traducir" || activeOption === "translate" ? "text-white" : "text-gray-600 hover:text-gray-800"}`}
                    >
                        {isClient && language === 'ES' ? 'Traducir' : 'Translate'}
                    </button>
                </div>
            </div>
        </>
    )
}

export { ToggleSwitch }