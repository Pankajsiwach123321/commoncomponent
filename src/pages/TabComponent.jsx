import React, { useState } from "react";

const TabComponent = () => {
  const [Tabs, setTabs] = useState("tab1");
  function changetab(tab) {
    setTabs(tab);
  }
  return (
    <section className="mt-10">
      <div className="max-w-[1140px] mx-auto px-3">
        <div>
          <div className=" flex gap-5 items-center mb-5">
            <button
              onClick={() => changetab("tab1")}
              className={`${
                Tabs === "tab1" && "text-red-400"
              } text-black text-xl font-bold font-exo  sm:px-6 px-3 sm:py-3 py-2 bg-white rounded-3xl`}
            >
              About
            </button>
            <button
              onClick={() => changetab("tab2")}
              className={`${
                Tabs === "tab2" && "text-red-400"
              } text-black text-xl font-bold font-exo  sm:px-6 px-3 sm:py-3 py-2 bg-white rounded-3xl`}
            >
              Blog
            </button>
            <button
              onClick={() => changetab("tab3")}
              className={`${
                Tabs === "tab3" && "text-red-400"
              } text-black text-xl font-bold font-exo  sm:px-6 px-3 sm:py-3 py-2 bg-white rounded-3xl`}
            >
              Suggestion
            </button>
          </div>
          <div
            className={` ${
              Tabs === "tab1"
                ? " scale-y-100 origin-top h-full duration-500 visible "
                : " invisible h-0 scale-y-0 "
            } text-white font-exo
                `}
          >
            content1 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Pariatur hic repellendus fugiat est quo! Veniam, necessitatibus! Ea
            reprehenderit ex illo molestias voluptatum deserunt soluta. Nemo
            voluptates, nobis optio vero ipsa itaque ratione in quis, provident
            nam illo voluptatum fugit labore quod asperiores cum magni sequi.
            Aliquid dignissimos odio, accusamus nam placeat soluta cum omnis
            itaque sequi voluptatibus officiis minus temporibus quas aliquam
            pariatur nihil explicabo? Obcaecati adipisci dolor dolore. At
            accusamus earum cupiditate cum! Dolorum suscipit odit, facilis quos
            iure velit qui, omnis praesentium veritatis doloremque aperiam!
            Dolorum odit quia culpa necessitatibus eos maxime non odio iusto.
            Dolore, esse provident?
          </div>

          <div
            className={` ${
              Tabs === "tab2"
                ? " scale-y-100 origin-top h-full duration-500 visible "
                : " invisible h-0 scale-y-0 "
            }
               text-white font-exo `}
          >
            content2 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Pariatur hic repellendus fugiat est quo! Veniam, necessitatibus! Ea
            reprehenderit ex illo molestias voluptatum deserunt soluta. Nemo
            voluptates, nobis optio vero ipsa itaque ratione in quis, provident
            nam illo voluptatum fugit labore quod asperiores cum magni sequi.
            Aliquid dignissimos odio, accusamus nam placeat soluta cum omnis
            itaque sequi voluptatibus officiis minus temporibus quas aliquam
            pariatur nihil explicabo? Obcaecati adipisci dolor dolore. At
            accusamus earum cupiditate cum! Dolorum suscipit odit, facilis quos
            iure velit qui, omnis praesentium veritatis doloremque aperiam!
            Dolorum odit quia culpa necessitatibus eos maxime non odio iusto.
            Dolore, esse provident?
          </div>

          <div
            className={` ${
              Tabs === "tab3"
                ? " scale-y-100 origin-top h-full duration-500 visible "
                : " invisible h-0 scale-y-0 "
            }
             text-white font-exo   `}
          >
            content3 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Pariatur hic repellendus fugiat est quo! Veniam, necessitatibus! Ea
            reprehenderit ex illo molestias voluptatum deserunt soluta. Nemo
            voluptates, nobis optio vero ipsa itaque ratione in quis, provident
            nam illo voluptatum fugit labore quod asperiores cum magni sequi.
            Aliquid dignissimos odio, accusamus nam placeat soluta cum omnis
            itaque sequi voluptatibus officiis minus temporibus quas aliquam
            pariatur nihil explicabo? Obcaecati adipisci dolor dolore. At
            accusamus earum cupiditate cum! Dolorum suscipit odit, facilis quos
            iure velit qui, omnis praesentium veritatis doloremque aperiam!
            Dolorum odit quia culpa necessitatibus eos maxime non odio iusto.
            Dolore, esse provident?
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabComponent;
