import * as React from "react";

const THRESHOLD = 0;

module.exports = {
  sayHello: () => {
    console.log("Heloo");
  },

  useDirectScroll: () => {
    const [detectScroll, setDetectScroll] = React.useState("up");

    const blocking = React.useRef(false);
    const prevScrollY = React.useRef(0);

    React.useEffect(() => {
      prevScrollY.current = window.pageYOffset;

      const updateDetectScroll = () => {
        const scrollY = window.pageYOffset;

        if (Math.abs(scrollY - prevScrollY.current) >= THRESHOLD) {
          const newDetectScroll = scrollY > prevScrollY.current ? "down" : "up";

          setDetectScroll(newDetectScroll);

          prevScrollY.current = scrollY > 0 ? scrollY : 0;
        }

        blocking.current = false;
      };

      const onScroll = () => {
        if (!blocking.current) {
          blocking.current = true;
          window.requestAnimationFrame(updateDetectScroll);
        }
      };

      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
    }, [DetectScroll]);

    return detectScroll;
  },
};
