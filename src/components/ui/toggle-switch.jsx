'use client'
import { useQueryState } from 'nuqs'
function ToggleSwitch() {
    const [activeOption, setActiveOption] = useQueryState("type", {
        defaultValue: '',
        shallow: false
        // history: 'push'
    })
    return (
        <>
            <div className="relative bg-inherit rounded-full border-1 border-gray p-0.5 m-3 w-48">
                {/* Background slider */}
                <div
                    className={`absolute top-0.5 bottom-0.5 w-1/2 bg-gray-500 rounded-full transition-transform duration-300 ease-in-out ${activeOption === "traducir" ? "translate-x-full" : "translate-x-0"
                        }`}
                />

                {/* Toggle buttons */}
                <div className="relative flex">
                    <button
                        onClick={() => setActiveOption("encontrar")}
                        className={`flex-1 py-2 px-4 text-sm text-center font-medium rounded-full transition-colors duration-300 ${activeOption === "encontrar" ? "text-white" : "text-gray-600 hover:text-gray-800"
                            }`}
                    >
                        Encontrar
                    </button>
                    <button
                        onClick={() => setActiveOption("traducir")}
                        className={`flex-1 py-2 px-4 text-sm text-center font-medium rounded-full transition-colors duration-300 ${activeOption === "traducir" ? "text-white" : "text-gray-600 hover:text-gray-800"
                            }`}
                    >
                        Traducir
                    </button>
                </div>
            </div>

            {/* Display current selection */}
            {/* <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">Opción seleccionada:</p>
                    <p className="text-lg font-semibold text-blue-500 capitalize">{activeOption}</p>
                </div> */}
        </>
    )
}

export { ToggleSwitch }