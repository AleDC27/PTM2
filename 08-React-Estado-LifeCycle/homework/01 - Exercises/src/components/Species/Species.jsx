import React from 'react'

export default function Species (props) {
  const specie=props.species 
  return (

    <div>
      <h2>Species</h2>
      {
        specie.map(cur=>
          <button key={cur} onClick={props. handleSpecies}
          value={cur} >
            {cur}
          </button> 
          )}
          <button onClick={props.handleAllSpecies}>All Animals</button>
    </div>
  )
}
