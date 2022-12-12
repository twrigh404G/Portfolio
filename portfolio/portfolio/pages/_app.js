import '../styles/globals.css'
import { theme } from "../utils/theme";
import { ThemeProvider } from "@mui/material"
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";

const clientSideEmotionCache = createEmotionCache();

function MyApp( Component, emotionCache = clientSideEmotionCache, pageProps ) {
  
  return 
  <CacheProvider value={emotionCache}>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider >
  </CacheProvider>  
}

export default MyApp
