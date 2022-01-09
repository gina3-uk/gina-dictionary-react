import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary</h1>
        <h2>Find meaning...</h2>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          Open source code on{" "}
          <a
            href="https://github.com/gina3-uk/gina-dictionary-react"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          created by Gina Lewis.
        </footer>
      </div>
    </div>
  );
}
