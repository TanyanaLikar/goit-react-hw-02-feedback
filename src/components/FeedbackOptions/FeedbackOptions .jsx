import React, { Component } from 'react';
import {Container,Button } from './FeedbackOptions .styled'




class FeedbackOptions  extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
    handleIncrement=()=>{
       this.setState(prevState => ({
        good: prevState.good +1 ,        
       }));
    }
    render(){
        const { good, neutral, bad } = this.state;
        return(
                <Container>
                <h1> Please leave feedback</h1>
                <div>
                    <Button type="button" onClick={this.handleIncrement}>Good</Button>
                    <Button type="button"onClick={this.handleIncrement}>Neutral</Button>
                    <Button type="button"onClick={this.handleIncrement}>Bad</Button>
                </div>
                <h2>Statistics </h2>
                <ul>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                    
                </ul>
            </Container>
        );
    }
}
export default FeedbackOptions ;