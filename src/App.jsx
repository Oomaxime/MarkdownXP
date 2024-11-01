import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import DesktopShortcut from "./components/DesktopShortcut/DesktopShortcut";

function App() {
  function Desktop() {
    return (
      <>
        <main>
          <DesktopShortcut
            label="API Storm"
            icon="src/assets/images/IeShortcutIcon.png"
          />
          <WebBrowser />
        </main>
        <Navbar />
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
