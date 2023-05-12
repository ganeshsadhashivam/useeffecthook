import React, { useEffect, useState } from "react";

const Greetings = () => {
  const [randomnumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 5) + 1
  );
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    window.localStorage.setItem("random", randomnumber);
    console.log("ran greetings");
    console.log(randomnumber);
    switch (randomnumber) {
      case 1:
        setGreeting("one");
        break;

      case 2:
        setGreeting("two");
        break;
      case 3:
        setGreeting("three");
        break;
      case 4:
        setGreeting("four");
        break;
      case 5:
        setGreeting("five");
        break;
      default:
        setGreeting("0");
    }
  }, [randomnumber]);

  return (
    <div>
      <h1>Random Greetings</h1>
      {/* {randomnumber === 1 ? (
        <h2>hello</h2>
      ) : randomnumber === 2 ? (
        <h2>howdy</h2>
      ) : randomnumber === 3 ? (
        <h2>hi</h2>
      ) : randomnumber === 4 ? (
        <h2>hey</h2>
      ) : (
        <h2>bye</h2>
      )} */}
      <span
        style={{
          background: "yellow",
          padding: "1rem",
          margin: "1rem",
          borderRadius: "1rem",
          fontSize: "larger",
        }}
      >
        {greeting}
      </span>
    </div>
  );
};

export default Greetings;
