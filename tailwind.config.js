/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                DMSans: ["DM+San", "sans-serif"],
            },
            boxShadow: {
                secondary: "10px 10px 20px rgba(2,2,2,0.25)",
            },
            colors: {
                primary: "#468fd1",
                textBlack: "#161616",
                lightGray: "#f3f3f3",
                darkGray: "#868686",
            }
        },
    },
    plugins: [require('tailwind-scrollbar')],
};
