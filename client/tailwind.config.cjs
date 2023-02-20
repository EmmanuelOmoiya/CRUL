/**@type{import('tailwindcss').Config}*/ module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    colors:{
      dark_navy: "var(--dark-navy)",
      navy: "var(--navy)",
      light_navy: "var(--light-navy)",
      lightest_navy: "var(--lightest-navy)",
      navy_shadow: "var(--navy-shadow))",
      dark_slate: "var(--dark-slate)",
      slate: "var(--slate)",
      light_slate: "var(--light-slate)",
      lightest_slate: "var(--lightest-slate)",
      white: "var(--white)",
      green: "var(--green)",
      green_opaque: "var(--green-opaque)",
      green_tint: "var(--green-tint)",
      pink: "var(--pink)",
      blue: "var(--blue)",
    },
    extend: {
      screens: { xs: "480px" },
      fontFamily: { 
        inter: ["Intervar)", "sans-serif"] ,
        poppins: ['Poppins', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        source_sans_pro: ['Source Sans Pro', 'sans-serif']
      },
      boxShadow: {
        card: "001px0rgba(189,192,207,0.06),010px16px-1pxrgba(189,192,207,0.2))",
        cardhover:
          "001px0rgba(189,192,207,0.06),010px16px-1pxrgba(189,192,207,0.4))",
      },
    },
  },
  plugins: [],
};
