import React, { useEffect, useState } from 'react';
import List from "./List";
export default function Admin(){
    const [LeadBoardState,setLeadBoardState]=useState(false);
    const [pointsState,setPointsState]=useState(true);
    const [onlineClassPoints,setOnlineClassPoints]=useState(0);
    const [crashCoursePoints,setCrashCousePoints]=useState(0);
    const [quizPoints,setQuizPoints]=useState(0);
    const [topPlayers,setTopPlayers]=useState([]);
    const update1=()=>{
      
        getPointsData();
    }
    const getPointsData=()=>{
      
    }
    useEffect(()=>{
        fetch("http://localhost:9999/sendPointsdata/", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
             credentials: "include"  
          })
            .then((r) => r.json())
            .then((resp) => {
              console.log("Got successfully response from PUT", resp);
              setOnlineClassPoints(resp.onlineClass);
              setCrashCousePoints(resp.crashCourse);
              setQuizPoints(resp.quiz);


            });
        
          
        fetch("http://localhost:9999/topUsers/", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
                 credentials: "include"  
              })
                .then((r) => r.json())
                .then((resp) => {
                    setTopPlayers(resp);
                    console.log(resp);    
                });
        
    },[])
    return (
      <>
        <h1>Hey! you are on Admin page</h1>
        <div onLoad={update1}>
        <button onClick={ ()=>{ setPointsState(true);
        setLeadBoardState(false);}}>PointsDetails</button>
      <button onClick={()=>{
            setPointsState(false);
            setLeadBoardState(true);
        }}>LeadBoard</button>
        </div>
        {
              pointsState ? (
                  <>
                <h1>Reward points details are below</h1>
                <div className="App-header">
                <ol>
                    <li>
                       <span>CrashCourse:<b> {crashCoursePoints} points</b></span> 
                    </li>
                    <li>
                        Quiz:<b> {quizPoints} points</b>
                    </li>
                    <li>
                        OnlineClass:<b> {onlineClassPoints} points</b>
                    </li>
                </ol>
                </div>
                </>
            )
            :
            (
                <>
                <div className="leadboard">
                <h1 style={{color: "red"}}>Leadboard for users is Bellow</h1>
                <table>
                    <tr>
                        <th>S.No</th>
                        <th>UserName</th>
                        <th>Points</th>
                    </tr>
                  {
                      topPlayers.map((key,indx)=>(
                          <>
                          <List key={indx} name={key.userName} points={key.points} indx={indx} />
                          </>
                      ))
                  }

                </table>
                </div>
                </>
            )
        }
     
      </>
    )
}
