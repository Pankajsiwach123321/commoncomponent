import React from "react";

const PreLoader = () => {
  return (
    <section className=" fixed inset-0  bg-black z-20">
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="border-[#42ffe9]  border-dotted  p-5 border-[10px] animate-spin inline-block rounded-full">
          <div className="border-[#ff4242] border-dotted  p-5 border-[10px] animate-spin inline-block rounded-full">
            <div className="border-[#7bff42] border-dotted  p-5 border-[10px] animate-spin inline-block rounded-full">
              <div className="border-[#fff942] border-dotted  p-5 border-[10px] animate-spin inline-block rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreLoader;
