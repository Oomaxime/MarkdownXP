import Navbar from "./components/navbar";
import WebBrowser from "./components/WebBrowser/WebBrowser";

function App() {
  return (
    <>
    <body>
      <h1>MarkdownXP</h1>
      <main>
        <WebBrowser />;
      </main>
      <Navbar />
    </body>
    </>
  );
}

export default App;
