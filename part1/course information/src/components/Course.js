import React from 'react';



const Part = ( {partName, exercises, partId }) => <p key = {partId}>{partName} {exercises}</p>

const Content = ({content }) => {
  // console.log('content' , content)
  return (
    <>
    {
    content.map( (temp) =>  <Part partName = {temp.name} exercises = {temp.exercises} key = {temp.id} />)
    }

    </>
  )
}


const Header = ( {header}) => {
  return (
    <h1>
      {header}
    </h1>
  )
}




const Course = ({ course }) =>  {
  
  return (
    <>
      <Header header = {course.name } />
      <Content content = {course.parts } />
        
    </>
  )
}



export default Course

