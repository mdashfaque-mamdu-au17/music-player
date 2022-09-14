/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				"theme-gray-900": "#252525",
				"theme-gray-800": "#1F1F1F",
				"theme-gray-700": "#6B7280",
				"theme-gray-500": "#363636",
				"theme-gray-400": "#39393B",
				"theme-gray-300": "#373737",
				"theme-white-700": "#FAFAFA",
				"theme-white-500": "#E5E7EB",
				"theme-white-300": "#8C8C8C",
				"theme-green-700": "#ADFF00",
			},
			variants: {
				extend: {
					visibility: ["group-hover"],
				},
			},
		},
	},
	plugins: [],
};
