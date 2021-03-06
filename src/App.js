import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container glass">
        <h1>Dictionary</h1>
        <h2>Find meaning...</h2>
        <main>
          <Dictionary defaultKeyword="moon" />
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
          created by{" "}
          <a
            href="https://www.linkedin.com/in/gina-lewis-98a96476/"
            target="_blank"
            rel="noreferrer"
          >
            Gina Lewis
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
