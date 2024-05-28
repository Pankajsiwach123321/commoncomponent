import { useEffect, useState } from "react";

export const Slider_Bar = () => {
  const [sideBar, setsideBar] = useState(false);
  useEffect(() => {
    if (sideBar) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [sideBar]);
  return [sideBar, setsideBar];
};
