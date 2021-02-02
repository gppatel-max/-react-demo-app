import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0
    }
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //display the results on the screen
  render() {
    if (this.state.data.id){
      return (
        <div>
loded
        </div>
      )
        
      
    }
    return (
      <div>
        {console.log(this.state.data)}
       
        return (
          <div>
          <h3>Losding</h3>
          <h3>Losding</h3>
          <h3>Losding</h3>
          <h3>Losding</h3>
          </div>
        )
      </div>
    );
  }
}
export default Jeopardy;