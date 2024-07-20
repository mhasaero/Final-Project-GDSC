import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className=" font-sans">
      <div className="absolute top-0 w-full h-screen md:h-[45rem] xl:h-screen bg-[url('/img/bounty-board.png')] bg-cover bg-fixed bg-center"></div>
      <Home />
      <About />
      <Skills />
      <Footer />
    </main>
  );
}
