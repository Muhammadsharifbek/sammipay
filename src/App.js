import React from "react";
import { styles } from "./util/sytle";
console.log(styles);

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.coontainer}`}>
          <div className="text-white">Navbar</div>
        </div>
      </div>

      <div className="bg-slate-500">
        <p className="${styles.paragraph}"> lorem ipsum dolor </p>
      </div>
    </div>
  );
};

export default App;
