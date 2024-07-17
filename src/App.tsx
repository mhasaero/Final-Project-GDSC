import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";

export default function App() {
  return (
    <main className="px-12 md:px-20 lg:px-28 xl:px-40">
      <Nav />
      <Home />
      <About />
      <h1>Hello World</h1>
    </main>
  );
}
