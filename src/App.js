
import { useState } from 'react';
import './App.css';
let datenow=new Date();
let hournow=datenow.getHours();
let greet='';
const greetStyle={};
if(hournow>=0 && hournow<12)
{
  greet='Good Morning';
  greetStyle.color='#B4E197';
}else if(hournow>=12 && hournow<17){
  greet='Good Afternoon';
  greetStyle.color='#FFD24C';
}
else if(hournow>=17 && hournow<19){
  greet='Good Evening';
  greetStyle.color='#293462';
}
else{
  greet='Good Night';
  greetStyle.color='black';
}



function App() {
  let time=new Date().toLocaleTimeString();
  const [currTime,setTime]=useState(time);

  const updateTime=()=>{
    time=new Date().toLocaleTimeString();
    setTime(time);
  }
  setInterval(updateTime,1000);
  return (
    <>
    <div>
     <section>
      <h2>
      <img src="https://media4.giphy.com/media/xT1XGLSb5E1VjIUw4E/giphy.webp?cid=ecf05e47qehz4wqoo2j1qr2vs067dz87x0mttgqcapbq230o&rid=giphy.webp&ct=g" alt="clock"/>
      {currTime}
      </h2>
     
      <h1>Hello, <span style={greetStyle}>{greet}</span></h1>
      </section>
    </div>
    </>
  )
}

export default App;
