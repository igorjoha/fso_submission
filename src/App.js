import React from 'react';

const Header = (props) => {return(<>{props.course}</>)}
const Total = (props) => {return(<>{props.total_exrszs}</>)} 
const Part = (props) => { return (<>{props.soderzhanie}</>)}
const Content=(props)=>{ return(
    <>
      <Part  parts={props.soderzhanie[0]}/>  
      <Part  parts={props.soderzhanie[1]}/>  
      <Part  parts={props.soderzhanie[2]}/>     
    </>
  )
}
  

const App = (props) => {
  const course = 'Half Stack application development'
  const parts = [
    {
      id:0,
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      id:1,
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      id:2,
      name: 'State of a component',
      exercises: 14
    }
  ]
  
  return (
    <div>
      <Header course={course}/>
      <Content soderzhanie={[
      [parts[0].name +" has " + parts[0].exercises+" exersizes."],
      [parts[1].name +" has " + parts[1].exercises+" exersizes."],
      [parts[2].name +" has " + parts[2].exercises+" exersizes."]]}
      
      />
      <Total total_exrszs={parts[0].exercises+parts[1].exercises+parts[2].exercises}/>
    </div>
  )
}

export default App