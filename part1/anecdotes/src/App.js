import React from 'react';
import ReactDOM from 'react-dom';


const Part = () => {
  return (
    <p>
      
    </p>
  )
}


const App = () => {
  return (
    <>
    <div>
      <h1>Greetings</h1>
      <Hello name = "George" />
      <Hello name = "Daisy" />
    </div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))


