/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundSize: {
        'cover':'cover',
        'tudong':'auto',
        
      }
    }
  },
  theme: {
    extend: {
      backgroundPosition: {
        'trungtam': 'center',

      }
    }
  },
  theme:{
    minWidth: {
      'NN':"100v"

    }
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  theme: {
    extend: {
      color: {
        'Blue':'#243c5a'
      }
    }
  },
  theme: {
    extend: {
      backgroundImage: {
        'hiendai':"url('https://static.vecteezy.com/system/resources/thumbnails/007/872/278/small/abstract-boxes-background-modern-technology-with-square-mesh-geometric-on-white-background-with-lines-cube-cell-illustration-free-vector.jpg')",
        
      },
}
    },
  

}
