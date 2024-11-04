import Footer from "@/Component/Foooter";
import Header from "@/Component/Header";
import "@/styles/globals.css";
import { Provider } from 'react-redux';
import store from "@/Redux/store";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  )

}
