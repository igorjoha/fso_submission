import React from 'react';

const Header = (props) => {return(<><p>{props.course}</p></>)}
const Total = (props) => {return(<><p>Total of exersizes is {props.total}</p></>)}
const Content = (props) => {return(<><p>{props.content}</p></>)}

const App = (props) => {
  // const-definitions
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content content={part1+" has "+exercises1+" exersizes "+part2+" has "+exercises2+" exersizes "+part3+" has "+exercises3+" exersizes."}/>
      <Total total={exercises1+exercises2+exercises3}/>

    </div>
  )
}

export default App