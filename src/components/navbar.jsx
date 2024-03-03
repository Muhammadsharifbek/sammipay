import { useState } from "react";
import { styles } from "../util/sytle";
import { navigationsLinks } from "../util/constans";
import { close, menu } from "../assets/logo";

export const Navbar = () => {
  const [toggleNav, settoggleNav] = useState(true);
  const toggleHendler = () => settoggleNav((prev) => !prev);

  return (
    <div className={` w-full py-6 ${styles.flexBetween}`}>
      <div className={`${styles.heading}`}>Logo</div>
      <ul className={`{list-none sm:flex hidden justify-end  items-center flex-1 `}>
        {navigationsLinks.map((nav, idx) => (
          <li
            key={nav.id}
            className={`font-montserrat font-normal cursor-pointer text-16 text-white opacity-1 hover:text-lightBlue transition-all duration-500 ${
              idx === navigationsLinks.length - 1 ? "mr-0" : "mr-10"
            } `}
          >
            {nav.title}
          </li>
        ))}
      </ul>
      5115090
      <div className={"sm:hidden flex flex-1 justify-end items-center"}>
        <img src={toggleNav ? close : menu} alt="nav" className="w-[30px] h-[30px] object-contain max-w-min" onClick={toggleHendler} />
      </div>
    </div>
  );
};
