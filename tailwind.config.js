/** @type {import('tailwindcss').Config} */
const colors = {
  transparent: "transparent",
  current: "currentColor",
  black: {
    DEFAULT: "#000000",
    light: "#252525",
  },
  white: {
    DEFAULT: "#fff",
  },
  blue: {
    very_light: "#F3F4F6",
    DEFAULT: "#082045",
  },
  gray: {
    DEFAULT: "#B5B5B5",
    light: "#E5E5E5",
    dark: "#555555",
  },
  green: {
    very_light: "#F3FCFB",
    light: "#07C3AB",
  },
};

module.exports = {
  content: ["./**/*.{php,js,html}", "!./node_modules,*"],
  theme: {
    extend: {
      screens: {
        xsm: "576px",
        sm: "640px",
        md: "768px",
        xmd: "860px",
        xlg: "991px",
        lg: "1024px",
        xxl: "1150px",
        xl: "1280px",
        "2xl": "1536px",
      },
      boxShadow: {
        custome: "0 0 #0000,0 0 #0000,0.2rem 0.2rem 1.25rem rgba(73,73,73,.1)",
      },
      fontFamily: {
        sans: ["Open Sans"],
      },
      colors: {
        ...colors,
      },
      backgroundImage: {
        customGradient:
          " linear-gradient(232.2deg, #00D990 0%, #07C3AB 50.81%, #0DAEC5 100%)",
        customarrow:
          'url(\'data:image/svg+xml,<svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.36487 5.96484C6.09143 6.23828 5.68127 6.23828 5.43518 5.96484L1.06018 1.58984C0.786743 1.34375 0.786743 0.933594 1.06018 0.6875C1.30627 0.414062 1.71643 0.414062 1.96252 0.6875L5.87268 4.59766L9.81018 0.660156C10.0563 0.414062 10.4664 0.414062 10.7125 0.660156C10.986 0.933594 10.986 1.34375 10.7125 1.58984L6.36487 5.96484Z" fill="%23555555"/></svg>\')',
        hover_customarrow:
          'url(\'data:image/svg+xml,<svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.36487 5.96484C6.09143 6.23828 5.68127 6.23828 5.43518 5.96484L1.06018 1.58984C0.786743 1.34375 0.786743 0.933594 1.06018 0.6875C1.30627 0.414062 1.71643 0.414062 1.96252 0.6875L5.87268 4.59766L9.81018 0.660156C10.0563 0.414062 10.4664 0.414062 10.7125 0.660156C10.986 0.933594 10.986 1.34375 10.7125 1.58984L6.36487 5.96484Z" fill="%23fff"/></svg>\')',
      },
      fontSize: {
        h1: ["64px", { lineHeight: "76.8px", fontWeight: "700" }],
        res_h1: ["52px", { lineHeight: "66px", fontWeight: "700" }],
        h2: ["40px", { lineHeight: "48px", fontWeight: "700" }],
        res_h2: ["34px", { lineHeight: "42px", fontWeight: "700" }],
        res1_h2: ["28px", { lineHeight: "38px", fontWeight: "700" }],
        h3: ["24px", { lineHeight: "33.6px", fontWeight: "700" }],
        res_h3: ["22px", { lineHeight: "30.6px", fontWeight: "700" }],
        h4: ["20px", { lineHeight: "28px", fontWeight: "700" }],
        res_h4: ["18px", { lineHeight: "26px", fontWeight: "700" }],
        h5: ["16px", { lineHeight: "22.4px", fontWeight: "700" }],
        p: ["16px", { lineHeight: "24px", fontWeight: "400" }],
        btn: ["16px", { lineHeight: "24px", fontWeight: "600" }],
        body: ["14px", { lineHeight: "19.07px", fontWeight: "600" }],
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
        "2xl": "1312px",
      },
    },
  },
  plugins: [],
};
