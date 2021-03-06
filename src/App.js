import logo from './logo.svg';
import './App.css';
import React from 'react';
import Datepicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class App extends React.Component {

constructor(){
  super()
  this.state={
    distance:0 ,
    endDate: new Date() 
  }
}

componentDidMount(){
  this.startInterval()
}

startInterval = () =>{
  console.log(new Date())
  let that = this
const second = 1000, minute = second*60 ,hour = 60*minute , day = hour*24 

let x = setInterval(function(){

that.setState({
  distance:that.state.endDate.getTime() - new Date().getTime()
})
if(that.state.distance >= 0 )
{
document.getElementById('d').innerText= that.format(Math.floor(that.state.distance/day))
document.getElementById('h').innerText= that.format(Math.floor((that.state.distance%day)/hour))
document.getElementById('m').innerText= that.format(Math.floor((that.state.distance%hour)/minute))
document.getElementById('s').innerText= that.format(Math.floor((that.state.distance%minute)/second))
}

}
,second)

}


handleChange = e  => {
this.setState({endDate:e})
}

format = (value) =>{
// to avoid single digit repr
return value<10?"0"+value:value
}

 render(){
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1 id = "head">React Countdown</h1>
      </header>
      <div className='margin'></div>

      <Datepicker
      className='form-control'
      selected= {this.state.endDate}
        dateFormat="EEEE,MMM,d,yyyy"
        onChange={(e)=>this.handleChange(e)}
      />

      <div id ='countdown'>
      <ul>
      <li><span id = 'd'>00</span>Days</li>
      <li><span id = 'h'>00</span>Hours</li>
      <li><span id = 'm'>00</span>Minutes</li>
      <li><span id = 's'>00</span>Seconds</li>
      </ul>
      </div>
    </div>
  );
 }
}
// install date picker react too
// date format
// bootstrap add in index in public fold.

export default App;
