import { useState } from 'react';
import css from './App.module.css';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';

export default function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const onLeaveFeedback = name => {
    switch (name) {
      case 'good': setGood(prev => prev + 1); break;
      case 'neutral': setNeutral(prev => prev + 1); break;
      case 'bad': setBad(prev => prev + 1); break;
      default: return;
    }
  };

  const countTotalFeedback = (good, neutral, bad) => good + neutral + bad;

  const countPositiveFeedbackPercentage = (good, total) => {
    return total > 0 ? Math.round(good * 100 / total) : 0;
  }

  return (
    <main className={css.main}>
      <h1 hidden>React HW-04-feedback</h1>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={['good','neutral','bad']} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title='Statistics'>
        {
          countTotalFeedback(good, neutral, bad) === 0 ?
            <Notification message='There is no feedback'></Notification> :
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback(good, neutral, bad)}
              positivePercentage={countPositiveFeedbackPercentage(good, countTotalFeedback(good, neutral, bad))}
            />
        }
      </Section>
    </main>
  )
}