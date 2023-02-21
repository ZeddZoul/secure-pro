import '@/styles/globals.scss'
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
export default function App({ Component, pageProps }) {
  let val = Component.getLayout ? (
    <Component.getLayout>
      <Component {...pageProps} />
    </Component.getLayout>
  ) : (
    <Component {...pageProps} />
  );
  return val;
}
