import Navbar from "./components/navbar";
import Menu from "./components/menu";

function App() {
  return (
    <>
    <body>
      <h1>MarkdownXP</h1>
      <main>
        {/* Mettez ici les ajout pour qu'ils n'interferrent pas avec la navbar */}
      </main>
      <Navbar />
      <Menu />
    </body>
    </>
  );
}

export default App;
