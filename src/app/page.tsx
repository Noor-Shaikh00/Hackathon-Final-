
import Hero from "./components/Hero";
import Brand from "./components/Brands";
import Ceramics from "./components/Ceramics";
import Benefit from "./components/Benefits";
import Product from "./components/Product";
import Touch from "./components/Touch";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
   <Navbar />
    <Hero />
    <Brand />
    <Ceramics />
    <Product />
    <Benefit />
    <Touch />
    <Footer />
    {/* <ProductListing /> */}
    </>
  )
}