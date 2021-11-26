module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				'hero-banner': 'url(flamier_profolio_3b-20.jpg)'
			}),
			height: (theme) => ({
				screen: '100vh',
				'screen/2': '50vh',
				'screen/4': 'calc(100vh / 4)',
				'screen/5': 'calc(100vh / 5)'
			}),
			screens: {
				ss: { min: '200px', max: '767px' }
			},
			// screens: {
			// 	sm: { min: '200px', max: '767px' }
			// },
			margin: {
				190: '43rem'
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				blue: {
					light: '#85d7ff',
					DEFAULT: '#1fb6ff',
					dark: '#009eeb'
				},
				pink: {
					light: '#ff7ce5',
					DEFAULT: '#ff49db',
					dark: '#ff16d1'
				},
				red: {
					dark: '#B91C1C',
					DEFAULT: '#ef444b;',
					light: '#F87171'
				},
				white: {
					DEFAULT: '#FFF'
				},
				gray: {
					darkest: '#1f2d3d',
					dark: '#3c4858',
					DEFAULT: '#c0ccda',
					light: '#d4d4d8',
					//lightest: '#f9fafb',
					lightest: '#e2e8f0',
					lightest2: '#eceff7'
				},
				green: {
					DEFAULT: '#10B981',
					light: '#A7F3D0',
					//lightest: '#f9fafb',
					dark: '#065F46'
				},
				black: {
					light: '#3A3A3A'
				}
			}
		}
	},
	variants: {
		extend: {}
	},
	mode: 'jit',
	purge: ['./src/**/*.svelte']
};
