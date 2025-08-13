import "./App.css";
import Calculator from "./components/Calculator";

const App: React.FC = () => {
  return (
    <div className="App">
      <Calculator />
      <footer>
        <p>
          <a href="https://all-about-chris.vercel.app/" target="_blank" className="footer-link">
            {" "}
            Made with ❤️ by {"Chris"}
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
