import logo from './logo.svg';
import './App.css';
import Question from './components/Question';
import Topic from './components/Topic';
import VoteBar from './components/VoteBar';
import QuestionTimer from './components/QuestionTimer';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      <Topic>
          <Question />
        </Topic>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <QuestionTimer />
       
        <VoteBar />
      </header>
    </div>
  );
}

export default App;