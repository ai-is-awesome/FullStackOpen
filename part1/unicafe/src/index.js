import React, {useState} from 'react';
import ReactDOM from 'react-dom';




const Statistic = ({text, value,}) => {
  
    return (
      
      
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    
      

    )
  }


const Button = ({text, handler}) => {
  return (
  <>
  <button onClick = {handler}>{text}</button>
  </>)
}


const App = () => {


  const [goodFeedback, setGoodFeedback ] = useState(0);
  const [neutralFeedback, setNeutralFeedback ] = useState(0);
  const [badFeedback, setBadFeedback ] = useState(0);
  const totalFeedback = goodFeedback + neutralFeedback + badFeedback;
  const averageFeedback = (goodFeedback - badFeedback) / totalFeedback;
  const goodFeedbackPropotion = goodFeedback / totalFeedback * 100;

  const handleGoodFeedback = () => (setGoodFeedback(goodFeedback + 1));
  const handleNeutralFeedback = () => (setNeutralFeedback(neutralFeedback + 1));
  const handleBadFeedback = () => (setBadFeedback(badFeedback + 1));


  
  return (
    <>
    <h1>give feedback</h1>
    <Button handler = {handleGoodFeedback} text = "Good" />
    <Button handler = {handleNeutralFeedback} text = "Neutral" />
    <Button handler = {handleBadFeedback} text = "Bad" />
    <h1>statistics</h1>

  
  
  {totalFeedback === 0 
  ? <p>No feedback given</p> :  
  <table>
    <tbody>
  <Statistic text = {'good'} value = {goodFeedback} total = {totalFeedback} />
  <Statistic text = {'neutral'} value = {neutralFeedback} total = {totalFeedback} />
  <Statistic text = {'bad'} value = {badFeedback} total = {totalFeedback} />
  <Statistic text = {'all'} value = {totalFeedback} total = {totalFeedback} />
  <Statistic text = {'average'} value = {averageFeedback} />
  <Statistic text = {'positive'} value = {goodFeedbackPropotion} />
  </tbody>
  </table>
  }

    </>
  )
}



ReactDOM.render(<App />, document.getElementById('root'));
