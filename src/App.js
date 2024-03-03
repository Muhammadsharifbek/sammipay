import { styles } from "./util/sytle";
import { Navbar } from "./components/navbar.jsx";
import "./index.css";
import { Home } from "./components/home";

const App = () => {
  return (
    <div className="bg-black w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Navbar />
        </div>
      </div>
      <div className={` bg-primary ${styles.flexStart}`}>
        <div className={`${styles.container}`}>
          {" "}
          <Home />
        </div>
      </div>
    </div>
  );
};

export default App;
