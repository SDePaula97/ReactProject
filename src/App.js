import './App.css';
import Question from './Components/Question';
import {useState} from 'react';

function App() {
  const [question, setQuestion] = useState(null)
  const getQuestion = async() => {
    try{
      const res = await fetch(`http://jservice.io/api/random`);
      const data = await res.json()  
      console.log(data);
    }catch(error) {
      console.log(error);
    }
  }
  return (
    <div className="App">

     <button onClick={getQuestion}>Get Question</button> 
     <Question question={question}/>
    </div>
  );
}






export default App;
