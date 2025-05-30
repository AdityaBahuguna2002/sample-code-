/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		fontFamily: {
        	sans: ['Satoshi', 'sans-serif'],
      	},
  		screens: {
  			'2xl': '1536px',
  			'3xl': '1800px',
  			'4xl': '2200px'
  		},
  		colors: {
  			white: '#ffffff',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
			primaryDark: "#0B1C39",
      		primaryAccent: "#1E3A8A",
  			primary: {
  				'50': '#e9f6ff',
  				'100': '#d7eeff',
  				'200': '#b7deff',
  				'300': '#8cc6ff',
  				'400': '#5fa0ff',
  				'500': '#3a7aff',
  				'600': '#184fff',
  				'700': '#0e42f4',
  				'800': '#103fd5',
  				'900': '#163899',
  				'950': '#0d1f59',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'50': '#e7f5ff',
  				'100': '#d3edff',
  				'200': '#b1dcff',
  				'300': '#81c3ff',
  				'400': '#5098ff',
  				'500': '#296eff',
  				'600': '#0540ff',
  				'700': '#003cff',
  				'800': '#0133d2',
  				'900': '#0c33a3',
  				'950': '#051340',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontSize: {
  			sm: '16px',
  			'4.5xl': '40px'
  		},
  		backgroundImage: {
  			'custom-gradient-1': 'linear-gradient(180deg,rgba(255,255,255,0.16)0%, rgba(255, 255,255,0) 104.82%)',
  			'custom-gradient-2': 'linear-gradient(194.09deg, #00277A -48.26%, rgba(0, 39, 122, 0) 111.53%)',
  			'custom-gradient-3': 'linear-gradient(180.62deg, rgba(12, 46, 145, 0.72) 0.58%, rgba(1, 13, 36, 0.72) 99.5%)',
  			'custom-gradient-4': 'linear-gradient(90deg, rgba(13, 0, 87, 0.98) 0%, rgba(36, 17, 142, 0) 65%)',
  			opportunity: 'url(\'/Home/Opportunity/Opportunity.gif\')',

  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
