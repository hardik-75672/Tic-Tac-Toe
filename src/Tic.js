import React, { useRef, useState } from "react";
import "./Tic.css";
import x from "./x1.png";
import o from "./o2.png";
import sound from "./soundopedit.mp3";
import sound1 from "./success.mp3";

let data = ["", "", "", "", "", "", "", "", ""];
const Tic = () => {
  let [count1, setCount] = useState(0);
  let [X, setX] = useState(0);
  let [O, setO] = useState(0);
  let [tie, setTie] = useState(0);
  let [lock1, setLock] = useState(false);
  let [win, setWin] = useState("");
  let tittleref = useRef("");
  let box1 = useRef("");
  let box2 = useRef("");
  let box3 = useRef("");
  let box4 = useRef("");
  let box5 = useRef("");
  let box6 = useRef("");
  let box7 = useRef("");
  let box8 = useRef("");
  let box9 = useRef("");

  let box_arr = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
  const playSound = () => {
    const audio = new Audio(sound);
    audio.play();
  };
  const settle = (e, num) => {
    if (lock1) {
      return 0;
    }
    if (data[num] === "") {
      if (count1 % 2 === 0) {
        e.target.innerHTML = `<img src='${o}'>`;
        data[num] = "o";
        setCount(++count1);
      } else {
        e.target.innerHTML = `<img src='${x}'>`;
        setCount(++count1);
        data[num] = "x";
      }
    }
    playSound();
    checkwin();
    console.log(data);
  };

  const tiecheck = () => {
    setLock(true);
    tittleref.current.innerHTML = `Tie`;
    setCount(0);
    setTie(++tie);
    playwin();
  };

  let winner = "";
  const checkwin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      setLock(true);
      winner = data[0];
      console.log("1");
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      setLock(true);
      winner = data[3];
      console.log("2");
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      setLock(true);
      winner = data[6];
      console.log("4");
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      setLock(true);
      winner = data[0];
      console.log("5");
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      setLock(true);
      winner = data[4];
      console.log("6");
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      setLock(true);
      winner = data[2];
      console.log("7");
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      setLock(true);
      winner = data[0];
      console.log("8");
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      setLock(true);
      winner = data[2];
      console.log("9");
    }
    if (winner !== "") {
      changeref(winner);
    }
    if (count1 % 9 === 0 && winner == "") {
      tiecheck();
    }
  };
  const changeref = (winner) => {
    if (winner === "o") {
      tittleref.current.innerHTML = `winner is --O`;
      setWin("O");
      setO(++O);
    } else {
      tittleref.current.innerHTML = `winner is --X`;
      setWin("X");
      setX(++X);
    }
    playwin();
  };
  const playwin = () => {
    const audio = new Audio(sound1);
    audio.play();
  };
  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    tittleref.current.innerHTML = `Tic Tac Toe`;
    box_arr.map((e) => {
      e.current.innerHTML = "";
    });
    setCount(0);
    console.log(count1);
    winner = "";
  };

  const setall = () => {
    setLock(false);
    tittleref.current.innerHTML = `Tic Tac Toe`;
    data = ["", "", "", "", "", "", "", "", ""];
    setCount(0);
  };

  return (
    <>
      <div className="main">
        <h1 ref={tittleref}>Tic Toc Toe</h1>
        {lock1 ? (
          <div>
            <h3>Player {win} is Winner 😃😃</h3>
            <div className="plist">
              <div className="divme">
                <div className="fonts">
                  <b>player : X</b>
                </div>
                <h2>{X}</h2>
              </div>
              <div className="divme">
                <div className="fonts">
                  <b>Tie</b>
                </div>
                <h2>{tie}</h2>
              </div>
              <div className="divme">
                <div className="fonts">
                  <b>player : O</b>
                </div>
                <h2>{O}</h2>
              </div>
            </div>
            <button className="btn" onClick={setall}>
              reset
            </button>
          </div>
        ) : (
          <div>
            {/* <div className="turn">
              {count1 % 2 ? (
                <div className="x1">
                  Player <span className="s1"> X </span>turn{" "}
                </div>
              ) : (
                <div className="o1">
                  Player <span className="s2"> O </span>turn
                </div>
              )}
            </div> */}

            <div className="box">
              <div className="row">
                <div
                  className="boxes b-l b-t"
                  ref={box1}
                  onClick={(e) => {
                    settle(e, 0);
                  }}
                ></div>
                <div
                  className="boxes b-l "
                  ref={box2}
                  onClick={(e) => {
                    settle(e, 1);
                  }}
                ></div>
                <div
                  className="boxes b-l b-b"
                  ref={box3}
                  onClick={(e) => {
                    settle(e, 2);
                  }}
                ></div>
              </div>
              <div className="row">
                <div
                  className="boxes b-t"
                  ref={box4}
                  onClick={(e) => {
                    settle(e, 3);
                  }}
                ></div>
                <div
                  className="boxes"
                  ref={box5}
                  onClick={(e) => {
                    settle(e, 4);
                  }}
                ></div>
                <div
                  className="boxes b-b"
                  ref={box6}
                  onClick={(e) => {
                    settle(e, 5);
                  }}
                ></div>
              </div>
              <div className="row">
                <div
                  className="boxes b-t b-r"
                  ref={box7}
                  onClick={(e) => {
                    settle(e, 6);
                  }}
                ></div>
                <div
                  className="boxes b-r"
                  ref={box8}
                  onClick={(e) => {
                    settle(e, 7);
                  }}
                ></div>
                <div
                  className="boxes b-b b-r"
                  ref={box9}
                  onClick={(e) => {
                    settle(e, 8);
                  }}
                ></div>
              </div>
            </div>
            <button className="btn" onClick={reset}>
              reset
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Tic;
