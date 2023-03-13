import logo from './logo.svg';
import './App.css';
import Question from './components/question/Question';
import Topic from './components/topic/Topic';
import VoteBar from './components/voteBar/VoteBar';
import QuestionTimer from './components/questionTimer/QuestionTimer';

function App() {

  const tomorrowsDate = new Date().toLocaleString()


  
    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDate()+1}/${current.getFullYear()}`;
  
   
  return (
    
    <div className="App">
      <header className="App-header">
      <QuestionTimer countdownTo={date} />
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
          Learn React {date}
        </a>
        <VoteBar />
      </header>
    </div>
  );
}

export default App;