import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className=" font-sans">
      <Nav />
      <Home />
      <About />
      <Skills />
      <Footer />
    </main>
  );
}
