/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
    './.storybook/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // Systentando Core Colors
        systentando: {
          primary: '#004f4f',
          'primary-light': '#006d6d',
          'primary-dark': '#003535',
          accent: '#ff7d50',
          'accent-light': '#ff9b78',
          'accent-dark': '#dd5c30',
          background: '#004f4f',
          card: '#1e1e1e',
          border: '#333333',
        },
        
        // Life Tracker Colors
        health: {
          DEFAULT: '#00b894',
          light: '#00d4aa',
          dark: '#009a7a',
        },
        sleep: {
          DEFAULT: '#9b59b6',
          light: '#b370d4',
          dark: '#7d3c98',
        },
        personal: {
          DEFAULT: '#e84393',
          light: '#ff6ba8',
          dark: '#d63384',
        },
        work: {
          DEFAULT: '#3498db',
          light: '#5dade2',
          dark: '#2980b9',
        },
        finance: {
          DEFAULT: '#f39c12',
          light: '#f4d03f',
          dark: '#e67e22',
        },
        
        // Viral Kids Colors
        bronze: {
          DEFAULT: 'hsl(25 95% 53%)',
          light: 'hsl(30 80% 70%)',
          dark: 'hsl(20 90% 40%)',
        },
        copper: 'hsl(15 85% 45%)',
        gold: 'hsl(45 95% 60%)',
        
        // Feedback Colors
        success: '#00b894',
        warning: '#fdcb6e',
        error: '#d63031',
        info: '#0984e3',
        
        // Gamer Theme
        neon: {
          blue: '#00FFFF',
          purple: '#A259FF',
          green: '#39FF14',
          pink: '#FF00C8',
        },
        
        // Standard Design System Colors
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-bronze': 'linear-gradient(135deg, hsl(25 95% 53%), hsl(15 85% 45%))',
        'gradient-hero': 'linear-gradient(135deg, hsl(25 95% 53%) 0%, hsl(35 90% 60%) 50%, hsl(45 95% 60%) 100%)',
        'gradient-card': 'linear-gradient(145deg, hsl(25 45% 95%), hsl(30 40% 92%))',
        'gradient-gamer': 'linear-gradient(135deg, #0A0A0A 0%, #1a1a2e 50%, #23234d 100%)',
        'gradient-systentando': 'linear-gradient(135deg, #004f4f 0%, #006d6d 50%, #ff7d50 100%)',
      },
      boxShadow: {
        'bronze': '0 10px 30px -10px hsl(25 95% 53% / 0.3)',
        'glow': '0 0 40px hsl(35 90% 60% / 0.2)',
        'card': '0 4px 20px hsl(25 30% 20% / 0.1)',
        'neon': '0 0 20px rgba(0, 255, 255, 0.5)',
        'systentando': '0 4px 20px rgba(0, 79, 79, 0.3)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px hsl(25 95% 53% / 0.3)' },
          '50%': { boxShadow: '0 0 40px hsl(25 95% 53% / 0.6)' },
        },
        'neon-pulse': {
          '0%, 100%': { boxShadow: '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF' },
          '50%': { boxShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 30px #00FFFF' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
}
