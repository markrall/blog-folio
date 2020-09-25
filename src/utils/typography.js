import Typography from "typography"
const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.75,
  scaleRatio: 2.5,
  googleFonts: [
    {
      name: "Merriweather Sans",
      styles: ["300", "300i", "400", "400i", "700", "700i"],
    },
    {
      name: "Open Sans",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
  headerFontFamily: [
    "Merriweather Sans",
    "Avenir Next",
    "Helvetica Neue",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: [
    "Open Sans",
    "Helvetica Neue",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.toString()
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
