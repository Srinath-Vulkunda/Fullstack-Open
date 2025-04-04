import { useState } from 'react';

const Button = ({ handleClick, feedback }) => {
  return <button onClick={handleClick}>{feedback}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;

  if (all === 0) {
    return <p>No feedback is given</p>;
  }

  const average = ((good - bad) / all).toFixed(1);
  const positive = ((good / all) * 100).toFixed(1) + ' %';

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} />
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0); // 🔧 Fixed typo
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>Give the feedback</h1>
      <Button handleClick={() => setGood(good + 1)} feedback="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} feedback="neutral" />
      <Button handleClick={() => setBad(bad + 1)} feedback="bad" />

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
