import React, { useEffect, useState } from "react";

const Square = () => {
  const colors = [
    "purple",
    "red",
    "blue",
    "orange",
    "grey",
    "white",
    "black",
    "brown",
    "green",
    "yellow",
    "pink",
  ];

  let randomColor = () => {
    return Math.floor(Math.random() * colors.length);
  };

  //   let randomColor = () => {
  //     return Math.floor(Math.random() * 255);
  //   };

  //   const [backgroundColor, setBackgroundColor] = useState(
  //     `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
  //   );

  const [backgroundColor, setBackgroundColor] = useState(colors[randomColor()]);

  let squareStyles = {
    backgroundColor: backgroundColor,
    width: "10px",
    height: "10px",
  };

  let updateSquareColor = () => {
    setBackgroundColor(colors[randomColor()]);
  };

  useEffect(() => {
    setInterval(updateSquareColor, 1000);
  }, []);

  return (
    <div
      className="square"
      style={squareStyles}
      onClick={() => setBackgroundColor(colors[randomColor()])}
    ></div>
  );
};

export default Square;
