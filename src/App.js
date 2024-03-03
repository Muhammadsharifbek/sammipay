import { styles } from "./util/sytle";
import { Navbar } from "./components/navbar.jsx";
import "./index.css";

const App = () => {
  return (
    <div className="bg-black w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default App;
