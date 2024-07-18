import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";

export default function App() {
  return (
    <main className="px-12 md:px-20 lg:px-28 xl:px-40 font-sans">
      <Nav />
      <Home />
      <About />
      <Skills />
      <h1>Hello World</h1>
    </main>
  );
}
