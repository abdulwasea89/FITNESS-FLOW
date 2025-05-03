"use client";
import { useEffect, useState } from "react";

const SplashScreen = ({ onAnimationComplete }: { onAnimationComplete: () => void }) => {
    const [text, setText] = useState("");
    const [fadeOut, setFadeOut] = useState(false);

    const fullText = "FITNESS FLOW";
    const typingSpeed = 150;

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            if (index < fullText.length) {
                setText((prev) => prev + fullText.charAt(index));
                index++;
            } else {
                clearInterval(interval);

                // Begin fade-out after small delay
                setTimeout(() => {
                    setFadeOut(true);
                    setTimeout(onAnimationComplete, 800); // Let fade-out finish
                }, 500);
            }
        }, typingSpeed);

        return () => clearInterval(interval);
    }, [onAnimationComplete]);

    return (
        <div
            className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-700 ${fadeOut ? "opacity-0" : "opacity-100"
                }`}
        >
            <h1 className="text-4xl md:text-5xl tracking-widest text-white font-medium font-mono whitespace-nowrap">
                {text}
                {text.length < fullText.length && <span className="animate-pulse">|</span>}
            </h1>
        </div>
    );
};

export default SplashScreen;
