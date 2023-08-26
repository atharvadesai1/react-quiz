// import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'
import Quiz from './components/Quiz'

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
