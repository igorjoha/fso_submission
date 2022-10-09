import React from 'react';

const Header = (props) => {return(<>{props.course}</>)}
const Total = (props) => {return(<>{props.total_exrszs}</>)} 
const Part = (props) => {return (<><p> {props.parts}</p></>)}
const Content=(props)=>{console.log(props);return(
    <>
       <Part parts={props.parts[0]}/>
       <Part parts={props.parts[1]}/>
       <Part parts={props.parts[2]}/>
    </>
  )
}
  

const App = (props) => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  
  return (
    <div>
      <Header course={course}/>
      <Content parts={[
        [part1.name,part1.exercises],[part2.name,part2.exercises],[part3.name,part3.exercises]
      ]}/>
      <Total total_exrszs={part1.exercises+part2.exercises+part3.exercises}/>
    </div>
  )
}

export default App