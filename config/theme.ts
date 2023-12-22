// theme/themeConfig.ts
import type { ThemeConfig } from "antd"

const theme: ThemeConfig = {
  hashed: false,
  token: {
    fontFamily: "Nunito",
    colorPrimary: "#3172A9",
  },
  components: {
      Button: {
        colorLink: '#3172A9', 
      }
    },
}

export default theme
