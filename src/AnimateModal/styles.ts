import { createUseStyles } from "react-jss";

const animatePos = (effect: string) => {
  const start: any = {
    up: "translateY(30px)",
    down: "translateY(-30px)",
    left: "translateX(-30px)",
    right: "translateX(30px)",
  };
  const end: any = {
    up: "translateY(0)",
    down: "translateY(0)",
    left: "translateX(0)",
    right: "translateX(0)",
  };
  return {
    start: start[effect] || "scale(0.98) translateY(5px)",
    end: end[effect] || "scale(1) translateY(0)",
  };
};

export const useStyles = (myProps: any) => {
  const anim = animatePos(myProps.effect);
  const startPos = anim.start;
  const endPos = anim.end;
  console.log(startPos);
  return createUseStyles({
    modal: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, .7)",
      paddingTop: "30px",
      opacity: 0,
      transition: "opacity .2s linear",
    },

    fadeIn: {
      opacity: 1,
    },

    box: {
      width: "100%",
      maxWidth: "300px",
      backgroundColor: "#fff",
      margin: "0 auto",
      borderRadius: "10px",
      padding: "30px",
      transition: "all .2s linear",
      transform: startPos,
      opacity: 0,
    },
    showBox: {
      transform: endPos,
      opacity: 1,
    },
  })();
};
