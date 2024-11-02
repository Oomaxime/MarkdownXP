import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import MarkdownProvider from "./providers/MarkdownProvider";
import MainLayout from "./components/MainLayout/MainLayout";
import Editor from "./components/Editor/Editor";
import Preview from "./components/Preview/Preview";
import NavBarApp from "./components/NavBarApp/NavBarApp";
import BottomBar from "./components/BottomBar/BottomBar";
import Navbar from "./components/NavBar/Navbar";
import WebBrowser from "./components/WebBrowser/WebBrowser";
import EditorProvider from "./providers/EditorProvider";
import LocalStorageProvider from "./providers/LocalStorageProvider";
import Mocktail from "./components/Mocktails/Mocktail";
import History from "./components/HistoricEvents/HistoricEvents";
import Advice from "./components/Advices/Advice";
import Joke from "./components/Jokes/Joke";
import DesktopShortcut from "./components/DesktopShortcut/DesktopShortcut";
import Recipe from "./components/Recipe/Recipe";

function App() {
  const [reloadWebBrowsers, setReloadWebBrowsers] = useState(0);

  const reloadOnlyWebBrowsers = () => {
    setReloadWebBrowsers((prev) => prev + 1);
  };

  const markdownRoute = () => {
    window.location.href = '/markdown';
  };

  function Desktop() {
    return (
      <>
        <main>
          <DesktopShortcut
            label="API Storm"
            icon="src/assets/images/IeShortcutIcon.png"
            onClick={reloadOnlyWebBrowsers}
          />
          <DesktopShortcut 
            label="Markdown"
            icon="src/assets/images/markdown.png"
            onClick={markdownRoute}
          />

          <WebBrowser
            key={reloadWebBrowsers}
            title="Joke of the day"
            url="/jokes.com"
            leftOffset="14%"
            topOffset="8%"
          >
            <Joke />
          </WebBrowser>
          <WebBrowser
            key={reloadWebBrowsers}
            title="Recipe"
            url="/recipe.com"
            leftOffset="18%"
            topOffset="12%"
          >
            <Recipe />
          </WebBrowser>
          <WebBrowser
            key={reloadWebBrowsers}
            title="Advice"
            url="/advices.com"
            leftOffset="22%"
            topOffset="16%"
          >
            <Advice />
          </WebBrowser>

          <WebBrowser
            key={reloadWebBrowsers}
            title="Mocktail"
            url="/mocktails.com"
            leftOffset="26%"
            topOffset="20%"
          >
            <Mocktail />
          </WebBrowser>
          <WebBrowser
            key={reloadWebBrowsers}
            title="Historic Events"
            url="/historicevents.com"
            leftOffset="30%"
            topOffset="24%"
          >
            <History />
          </WebBrowser>
        </main>
        <Navbar reloadOnlyWebBrowsers={reloadOnlyWebBrowsers}/>
      </>
    );
  }

  function Markdown() {
    return (
      <>
        <LocalStorageProvider>
          <MarkdownProvider>
            <main className="markdownApp">
              <EditorProvider>
                <NavBarApp />
                <MainLayout>
                  <MainLayout.Column>
                    <Editor />
                  </MainLayout.Column>
                  <MainLayout.Column>
                    <Preview />
                  </MainLayout.Column>
                </MainLayout>
                <BottomBar />
              </EditorProvider>
            </main>
            <Navbar />
          </MarkdownProvider>
        </LocalStorageProvider>
      </>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Desktop()}></Route>
        <Route path="/markdown" element={Markdown()}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
