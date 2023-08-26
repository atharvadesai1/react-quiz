import './App.css';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import Quiz from './components/Quiz';
// import Result from './components/Result';


function App() {
  return (
    <>
      <Quiz heading='Programming Quiz'></Quiz>
    </>  
  );
}

Quiz.propTypes = {
  heading: PropTypes.string
}

export default App;
