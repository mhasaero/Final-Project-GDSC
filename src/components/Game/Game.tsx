import Layout from "./Layout";
import TicTacToe from "./TicTacToe";

export default function App() {
  return (
    <>
      <Layout>
        <h1 className="text-4xl font-bold mb-8 text-blue-400">Tic-Tac-Toe</h1>
        <TicTacToe />
      </Layout>
    </>
  );
}
