import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import Main from "./components/banner/Main";
import Footer from "./components/navbar/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetchData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const productPromise = fetchData();
  const [cartValue, setCartValue] = useState(0);

  return (
    <>
      <ToastContainer></ToastContainer>
      <div className="manrope">
        <Navbar cartValue={cartValue}></Navbar>
        <Banner></Banner>
        <Suspense
          fallback={
            <div className="flex h-64 w-full items-center justify-center">
              <span className="loading loading-infinity w-24 text-indigo-600"></span>
            </div>
          }
        >
          <Products
            productPromise={productPromise}
            setCartValue={setCartValue}
            cartValue={cartValue}
          ></Products>
        </Suspense>
        <Main></Main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
