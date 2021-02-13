import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const Button = ({ handler, text }) => <button onClick = { handler }>{text}</button>


const App = (props) => {
  const anecdotes = props.anecdotes
  const get_random = (min,max) => Math.floor(Math.random() * (max - min) + min)
  const [selected, setSelected] = useState(0)
  const handler = () => setSelected(get_random(0, anecdotes.length - 1))
  
  const [votes, setVotes] = useState(Array.apply(null, new Array(10)).map(Number.prototype.valueOf,0));

  const increaseCurrentVote = (index) => {
    const handler = () => {
      const copy = [...votes ]
      copy[index] += 1
      return setVotes(copy)
    }

    return handler }

  return (
    <>
    <div>
      <h1>Anecdotes of the day</h1>
    {anecdotes[selected]}
  <p>has {votes[selected]} votes</p>
    </div>
    <Button text = {"vote"} handler = {increaseCurrentVote(selected)} />
    <Button text = {"next anecdote"} handler = {handler} />
    <h1>Anecdotes with most votes</h1>
    <p>{anecdotes[votes.indexOf(votes.reduce((a, b) => Math.max(a, b)))]}</p>
  <p>has {Math.max(...votes)} votes</p>


    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes = {anecdotes} />, document.getElementById('root'));

