import Layout from "@/components/Layout";
import { DataContext } from "@/context/DataContext";
import "@/styles/globals.css";
import { PrimeReactProvider } from "primereact/api";

export default function App({ Component, pageProps }) {
  return <DataContext>
    <Layout>
    <Component {...pageProps} />;
    </Layout>
  </DataContext>
}
