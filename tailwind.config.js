import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vu',
        './node_modules/flowbite/**/*.js'

    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'primary-50': '#fff7ed',
                'primary-100': '#fdba74',
                'primary-200': '#fdba74',
                'primary-300': '#fdba74',
                'primary-400': '#9a3412',
                'primary-500': '#9a3412',
                'primary-600': '#9a3412',
                'primary-700': '#9a3412',
                'primary-800': '#9a3412',
                'primary-900': '#7c2d12',
                'primary-950': '#431407',
            },
        },
    },

    plugins: [
        forms,
        typography,
        require('flowbite/plugin'),
    ],
};
