import React, { useEffect, useState } from "react"




const TicTacToe=()=>{

  let data = ["", "", "", "", "", "", "", "", ""];
  
  
  const [input, setInput] = useState("X");
  const [lock, setLock] = useState(false);
  let count = 0;

const won=(value)=>{
  setLock(true);
  console.log("You are the winner");
  window.document.body.querySelector(".container_heading").innerText = `The winner is ${value}`
}


const checkWinner=()=>{
  
    const WinnerPossibleData = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    for(let elem of WinnerPossibleData){
        const [a,b,c] = elem;
        if(data[a] === data[b] && data[b]===data[c] && data[c] != ""){
            console.log(data[a], data[b], data[c]);
            won( data[a]);
            break;

        }
    }
    
}

    

const handleClick=(event, id)=>{
  

    if(data[id] === "" && lock === false){

        if(count%2 ==0){
            event.target.innerHTML = "X";
            data[id] = "X";
            count = count+1;
        }
        else{
            event.target.innerHTML = "O";
            data[id] = "O";
            count = count+1;
        }

    }
    checkWinner();
}


const reset=()=>{
  window.location.reload(false);
}


  

  return (
    <>


      <div className="container bg-gradient-to-r from-sky-500 to-indigo-500 w-full h-[100vh]">
        <h1 className="container_heading text-white text-center text-3xl font-bold py-12">Tic Tac Toe Game using <span className="text-green-00"> React JS </span></h1>
        <div className="tic_tac_toe_box w-full h-full flex flex-col justify-start items-center">
          <div className="tic_tac_toe_btn grid grid-cols-3 gap-1">

          {
            data.map((elem, id)=>{
              return(
                <div onClick={()=>{handleClick(event, id)}} key={id} className="box1 w-[4.3rem] h-[4.5rem] flex justify-center items-center text-5xl font-semibold bg-green-500 rounded-lg">{elem}</div>
              )
            })
          }
           
           
          </div>
        <div onClick={reset} className="tic_tac_toe_btn w-full flex justify-center items-center py-12"> <button className="py-1.5 px-6 bg-blue-600 text-white rounded-2xl border-2 border-black">Reset</button> </div>
        </div>
            
      </div>


    </>
  )
        }

export default TicTacToe;