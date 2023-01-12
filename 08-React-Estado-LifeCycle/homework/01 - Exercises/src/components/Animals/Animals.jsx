import React from "react";

export default class Animals extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return <div>{
      this.props.animals.map(cur=>
        <div key={cur.name}>
      <h5>{cur.name}</h5>  
      <img src={cur.image} alt={cur.name} width="300px" />
      <span style={{display:"block"}} >{cur.specie}</span>
        </div>
      )}
    </div>
  }
}
