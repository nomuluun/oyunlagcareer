import { DataContext } from "@/context/DataContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <DataContext>
    <Component {...pageProps} />;
  </DataContext>
}
