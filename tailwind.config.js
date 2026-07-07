/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // 道系四色
        tao: {
          black: '#1a1a2e',      // 玄黑 - 主背景
          dark: '#16213e',       // 深墨蓝 - 次背景
          red: '#8b0000',        // 朱砂红 - 强调色
          gold: '#d4a574',       // 金色 - 边框/装饰
          cyan: '#00ced1',       // 青色 - 辅助色
          white: '#f5f5dc',      // 米白 - 文字
          gray: '#2d2d3f',       // 深灰 - 卡片背景
          light: '#e8e8d0',      // 浅米 - 次要文字
        }
      },
      fontFamily: {
        tao: ['Noto Serif SC', 'Songti SC', 'SimSun', 'serif'],
        sans: ['Noto Sans SC', 'Microsoft YaHei', 'sans-serif'],
      },
      animation: {
        'taiji-spin': 'taiji-spin 10s linear infinite',
        'bagua-breathe': 'bagua-breathe 3s ease-in-out infinite',
        'ink-fade': 'ink-fade 1.5s ease-out forwards',
      },
      keyframes: {
        'taiji-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'bagua-breathe': {
          '0%, 100%': { opacity: 0.7, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
        'ink-fade': {
          '0%': { opacity: 0, transform: 'scale(0.8)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'cloud-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a574' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
