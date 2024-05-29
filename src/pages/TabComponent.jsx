import React, { useState } from "react";

const TabComponent = () => {
  const [tabs, setTabs] = useState("tab1");
  function changetab(id) {
    setTabs(id);
  }
  return (
    <section className="mt-10 px-3">
      <div className="flex gap-2 sm:gap-5 items-center mb-5">
        <button
          onClick={() => changetab("tab1")}
          className={`${
            tabs === "tab1" && "!text-red-400"
          } text-white duration-300 text-xl font-bold font-exo sm:px-6 px-3 sm:py-3 py-2 bg-black rounded-3xl`}
        >
          About
        </button>
        <button
          onClick={() => changetab("tab2")}
          className={`${
            tabs === "tab2" && "!text-red-400"
          } text-white duration-300 text-xl font-bold font-exo  sm:px-6 px-3 sm:py-3 py-2 bg-black rounded-3xl`}
        >
          Blog
        </button>
        <button
          onClick={() => changetab("tab3")}
          className={`${
            tabs === "tab3" && "!text-red-400"
          } text-white duration-300 text-xl font-bold font-exo  sm:px-6 px-3 sm:py-3 py-2 bg-black rounded-3xl`}
        >
          Suggestion
        </button>
      </div>
      <div
        className={`${
          tabs === "tab1" ? "block h-full" : "hidden h-0"
        }text-black font-exo duration-300`}
      >
        content1 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Pariatur hic repellendus fugiat est quo! Veniam, necessitatibus! Ea
        reprehenderit ex illo molestias voluptatum deserunt soluta. Nemo
        doloremque aperiam! Dolorum odit quia culpa necessitatibus eos maxime
        non odio iusto. Dolore, esse provident?
      </div>

      <div
        className={` ${
          tabs === "tab2" ? "block h-full" : "hidden h-0"
        }text-black font-exo duration-300`}
      >
        content2 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Pariatur hic repellendus fugiat est quo! Veniam, necessitatibus! Ea
        reprehenderit ex illo molestias voluptatum deserunt soluta. Nemo
        voluptates, nobis optio vero ipsa itaque ratione in quis, provident nam
        illo vol? Obcaecati adipisci dolor dolore. At accusamus earum cupiditate
        cum! Dolorum suscipit odit, facilis quos iure velit qui, omnis
        praesentium veritatis doloremque aperiam! Dolorum odit quia culpa
        necessitatibus eos maxime non odio iusto. Dolore, esse provident?
      </div>

      <div
        className={`${
          tabs === "tab3" ? "block h-full" : "hidden h-0"
        }text-black font-exo duration-300`}
      >
        content3 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Pariatur hic repellendus fugiat est quo! Veniam, necessitatibus! Ea
        reprehenderit is doloremque aperiam! Dolorum odit quia culpa
        necessitatibus eos maxime non odio iusto. Dolore, esse provident?
      </div>
    </section>
  );
};

export default TabComponent;
