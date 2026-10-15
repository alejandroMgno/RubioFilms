tailwind.config = {
    theme: {
        extend: {
            colors: {
                'brand-black': '#0a0a0a',
                'brand-charcoal': '#161616',
                'brand-gray': '#2a2a2a',
                'brand-white': '#e5e5e5',
                'brand-red': '#9b0000',
            },
            fontFamily: {
                'anton': ['Anton', 'sans-serif'],
                'inter': ['Inter', 'sans-serif'],
                'mono': ['Space Mono', 'monospace'],
            },
            animation: {
                'noise': 'noise 0.4s infinite',
                'marquee': 'marquee 20s linear infinite',
                'blink': 'blink 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                noise: {
                    '0%, 100%': { backgroundPosition: '0 0' },
                    '10%': { backgroundPosition: '-5% -10%' },
                    '20%': { backgroundPosition: '-15% 5%' },
                    '30%': { backgroundPosition: '7% -25%' },
                    '40%': { backgroundPosition: '20% 25%' },
                    '50%': { backgroundPosition: '-25% 10%' },
                    '60%': { backgroundPosition: '15% 5%' },
                    '70%': { backgroundPosition: '0% 15%' },
                    '80%': { backgroundPosition: '25% 35%' },
                    '90%': { backgroundPosition: '-10% 10%' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                blink: {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.3 },
                }
            }
        }
    }
};
