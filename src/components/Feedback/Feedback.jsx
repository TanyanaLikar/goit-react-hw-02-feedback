import React, { Component } from 'react';
import Section from '../Section/Section'
import {Container} from './Feedback .styled'
import Notification from '../Notification/Notification';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';



class Feedback  extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
    handleClick=(key)=>{
       this.setState(prevState => ({
        [key]: prevState[key] +1 ,        
       }));
    }
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
      };
      countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        return Math.round((good * 100) / this.countTotalFeedback()) || 0;
      };

    render(){
        const { good, neutral, bad } = this.state;
        const totalValue = this.countTotalFeedback();
        return(
                <Container>
                <Section title="Please leave feedback">
                <FeedbackOptions
                    options={Object.keys(this.state)}
                    onLeaveFeedback={this.handleClick}/>
                </Section>
                <Section title ="Statistics" >
                    {totalValue ? (
                        <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={totalValue}
                        positivePercentage={this.countPositiveFeedbackPercentage()}
                        />
                    ): ( <Notification message="There is no feedback" />)}
                
                </Section>
            </Container>
        );
    }
}
export default Feedback ;