import { useState } from "react";
import { styles } from "../util/sytle";
import { navigationsLinks } from "../util/constans";
import { close, menu } from "../assets/logo";

export const Navbar = () => {
  const [toggleNav, settoggleNav] = useState(true);
  const toggleHendler = () => settoggleNav((prev) => !prev);
  const [active, setActive] = useState("home");
  const activHendler = (id) => setActive(id);

  return (
    <div className={` w-full py-6 ${styles.flexBetween}`}>
      <div className={`${styles.heading1}`}>Logo</div>
      <ul className={`{list-none sm:flex hidden justify-end  items-center flex-1 `}>
        {navigationsLinks.map((nav, idx) => (
          <li
            key={nav.id}
            className={`font-montserrat font-normal cursor-pointer text-16  text-white   hover:text-white transition-all duration-500 ${
              idx === navigationsLinks.length - 1 ? "mr-0" : "mr-10"
            } ${active === nav.id ? "text-white" : "text-gray-800"}  `}
            onClick={() => activHendler(nav.id)}
          >
            {nav.title}
          </li>
        ))}
      </ul>

      <div className={"sm:hidden flex flex-1 justify-end items-center"}>
        <img src={toggleNav ? close : menu} alt="nav" className="w-[30px] h-[30px] object-contain max-w-min " onClick={toggleHendler} />
        <div className={`${!toggleNav ? "hidden" : "flex"}   p-3 sidebar absolute top-20 right-0 left-0  w-full bg-black-gradient`}>
          <ul className="list-none flex  justify-center items-center flex-1 ">
            {navigationsLinks.map((nav, idx) => (
              <li
                key={nav.id}
                className={`font-montserrat font-normal cursor-pointer text-16  text-white  hover:text-white transition-all duration-500 ${
                  idx === navigationsLinks.length - 1 ? "mr-0" : "mr-10"
                } ${active === nav.id ? "text-white" : "text-gray-500"}  `}
                onClick={() => activHendler(nav.id)}
              >
                {nav.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
