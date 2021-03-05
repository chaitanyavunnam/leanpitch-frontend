import React, { useState } from 'react';
export default function User(){
    
    const [usertextState,setUserTextState]=useState(true);
    const [userDataStae,setUserDataState]=useState(false);
    const [userName,setUserName]=useState("");
    const [points,setPoints]=useState(0);

    const sendData = () =>{
            setUserDataState(true);
            setUserTextState(false);
            callApi();
    };

    const callApi=()=>{
        fetch("http://localhost:9999/addUpdateUser/", {
            method: "POST",
            body: JSON.stringify({ userName: userName }),
            headers: {
              "Content-Type": "application/json",
            },
             credentials: "include"  
          })
            .then((r) => r.json())
            .then((resp) => {
              setUserName(resp.userName)
              setPoints(resp.points)
            });
    }

    const updateClassPoints=()=>{
        fetch("http://localhost:9999/updatePoints/", {
            method: "POST",
            body: JSON.stringify({ userName: userName ,type: "onlineClass"}),
            headers: {
              "Content-Type": "application/json",
            },
             credentials: "include"  
          })
            .then((r) => r.json())
            .then((resp) => {
              setUserName(resp.userName)
              setPoints(resp.points)
            });

    }
    const updateQuizPoints=()=>{
        fetch("http://localhost:9999/updatePoints/", {
            method: "POST",
            body: JSON.stringify({ userName: userName ,type: "quiz"}),
            headers: {
              "Content-Type": "application/json",
            },
             credentials: "include"  
          })
            .then((r) => r.json())
            .then((resp) => {
              setUserName(resp.userName)
              setPoints(resp.points)
            });
        
    }
    const updateCoursePoints=()=>{
        fetch("http://localhost:9999/updatePoints/", {
            method: "POST",
            body: JSON.stringify({ userName: userName ,type: "crashCourse"}),
            headers: {
              "Content-Type": "application/json",
            },
             credentials: "include"  
          })
            .then((r) => r.json())
            .then((resp) => {
              setUserName(resp.userName)
              setPoints(resp.points)
            });
        
    }

    return (
        <div>
            <h1>Hey! you are on User page</h1>
            {
                usertextState ? (
                    <>
            <div className="user" >
            Enter userName:<input type="text" placeholder="username" onChange={(e)=>{setUserName(e.target.value)}} value={userName} className="user-input" />
            <div><button className="user-btn" onClick={sendData} >Go</button></div>
             </div>
             </>
                ) 
                :
                 (
                     <div className="user">
                     <div><h2>Hiii <span style={{color: "red"}} >{userName}</span> yout points are <span style={{color: "green"}}>{points}</span></h2></div>
                    <div> <span><b>Onlineclass</b><button onClick={updateClassPoints} >Watch</button></span></div> 
                    <div><span><b>Quiz</b><button onClick={updateQuizPoints} >Attempt</button></span></div> 
                     <div><span><b>CrashCourse</b><button onClick={updateCoursePoints} >Do</button></span></div>
                     </div>
                 )
            }
        </div>
    )
}
