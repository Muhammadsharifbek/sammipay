import { styles } from "../util/sytle.js";
import { discount } from "../assets/logo.js";
import { robot } from "../assets/logo.js";
import Button from "./button";

export const Home = () => {
  return (
    <section
      id="
  home"
      className={`flex md:flex-row flex-col ${styles.paddingY} `}
    >
      {/* animation image */}
      <div className={`flex-1 ${styles.flexStart} md:my-0 my-10  mr-5`}>
        <img src={robot} alt="robot" className="w-[100%] h-[100%] relative z-10 rounded-sm" />
      </div>
      {/* information */}
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 ml-3  px-6`}>
        {/* discount */}

        <div className=" flex  flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 bg-slate-500 bg-discount-gradient">
          {" "}
          <img src={discount} alt="dicount" className="w-[32px] height-[32px]" />
          <p className={`${styles.paragraph} ml-2  text-gray-500`}>
            <span className="text-white">20%</span> chegirma <span className="text-white">1 Oylik </span> xisob uchun
          </p>
        </div>

        {/* {title} */}
        <div className="w-full">
          <h1 className={`${styles.heading1}`}>
            Yangi Avlod <br /> <span className="text-gradient">To'lov Usuli</span>
          </h1>
        </div>

        {/* description */}
        <div>
          <p className={`${styles.paragraph} mt-6 max-w-[550px] text-white mb-3`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem aliquid vel cum, esse praesentium iusto minima cumque error, voluptatibus ad
            iste numquam reprehenderit, et a vitae. Aliquid illo accusantium tenetur!
          </p>
        </div>
        {/* BUTTON */}

        <Button />

        <div class="absolute z-0 w-[40%] h-[35%] top-0  pink-gradient"></div>
        <div class="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40  white-gradient"></div>
        <div class="absolute z-[2] w-[50%] h-[55%] right-20 bottom-20 blue-graient"></div>
      </div>
    </section>
  );
};
