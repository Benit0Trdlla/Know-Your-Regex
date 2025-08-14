'use client'
import { useEffect, useState } from "react";
export const useHidratationSolution = () => {
    const [isClient, setIsClient] = useState(false)
    
    useEffect(() => {
        setIsClient(true)
    }, [])

    return isClient
};