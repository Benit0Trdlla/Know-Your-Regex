"use client"
import * as React from "react"
import { useState, useEffect, useRef } from "react";
import { Paperclip, Send } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { ToggleSwitch } from "./toggle-switch";
import { getLanguage } from "@/lib/language";


const AIChatInput = ({ input, onChange }) => {
    let language = getLanguage();
    const PLACEHOLDERS = [
        `${language === 'ES' ? 'Escribe tu regex' : 'Write your regex'}`,
        `${language === 'ES' ? 'Traduce tu regex' : 'Translate your regex'}`,
    ];
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [showPlaceholder, setShowPlaceholder] = useState(true);
    const [isActive, setIsActive] = useState(false);
    const wrapperRef = useRef(null);

    // Cycle placeholder text when input is inactive
    useEffect(() => {
        if (isActive || input) return;

        const interval = setInterval(() => {
            setShowPlaceholder(false);
            setTimeout(() => {
                setPlaceholderIndex((prev) => (prev + 1) % PLACEHOLDERS.length);
                setShowPlaceholder(true);
            }, 400);
        }, 3000);

        return () => clearInterval(interval);
    }, [isActive, input]);

    // Close input when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target)
            ) {
                if (!input) setIsActive(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [input]);

    const handleActivate = () => setIsActive(true);

    const placeholderContainerVariants = {
        initial: {},
        animate: { transition: { staggerChildren: 0.025 } },
        exit: { transition: { staggerChildren: 0.015, staggerDirection: -1 } },
    };

    const letterVariants = {
        initial: {
            opacity: 0,
            filter: "blur(12px)",
            y: 10,
        },
        animate: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            transition: {
                opacity: { duration: 0.25 },
                filter: { duration: 0.4 },
                y: { type: "spring", stiffness: 80, damping: 20 },
            },
        },
        exit: {
            opacity: 0,
            filter: "blur(12px)",
            y: -10,
            transition: {
                opacity: { duration: 0.2 },
                filter: { duration: 0.3 },
                y: { type: "spring", stiffness: 80, damping: 20 },
            },
        },
    };

    return (
        <div className="fixed bottom-0 w-full max-w-md p-2">
            <div className="flex items-center justify-center">
                <ToggleSwitch />
            </div>
            <motion.div
                ref={wrapperRef}
                className="w-full max-w-3xl"
                initial="collapsed"
                style={{ overflow: "hidden", borderRadius: 32 }}
                onClick={handleActivate}
            >
                <div className="flex flex-col items-stretch w-full h-full">
                    {/* Input Row */}
                    <div className="flex items-center gap-2 p-3 rounded-full bg-gray-200 max-w-3xl w-full border-gray-200 dark:bg-gray-800">
                        {/* <button
                            className="p-3 rounded-full hover:bg-gray-100 transition"
                            title="Attach file"
                            type="button"
                            tabIndex={-1}
                        >
                            <Paperclip size={20} />
                        </button> */}

                        {/* Text Input & Placeholder */}
                        <div className="relative flex-1">
                            <input
                                type="text"
                                value={input}
                                onChange={onChange}
                                className="flex-1 border-0 outline-0 rounded-md py-2 text-base bg-transparent w-full font-normal"
                                style={{ position: "relative", zIndex: 1 }}
                                onFocus={handleActivate}
                            />
                            <div className="absolute left-0 top-0 w-full h-full pointer-events-none flex items-center px-3 py-2">
                                <AnimatePresence mode="wait">
                                    {showPlaceholder && !isActive && !input && (
                                        <motion.span
                                            key={placeholderIndex}
                                            className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 select-none pointer-events-none"
                                            style={{
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                zIndex: 0,
                                            }}
                                            variants={placeholderContainerVariants}
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                        >
                                            {PLACEHOLDERS[placeholderIndex]
                                                .split("")
                                                .map((char, i) => (
                                                    <motion.span
                                                        key={i}
                                                        variants={letterVariants}
                                                        style={{ display: "inline-block" }}
                                                    >
                                                        {char === " " ? "\u00A0" : char}
                                                    </motion.span>
                                                ))}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                        <button
                            className="flex items-center gap-1 bg-black hover:bg-gray-700  text-white p-3 rounded-full font-medium justify-center"
                            title="Send"
                            type="submit"
                            tabIndex={-1}
                        >
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export { AIChatInput };