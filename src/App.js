import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { QuizPage } from './pages/QuizPage';
import PopQuiz from './component/QuizPage/PopQuiz';
import India from './component/QuizPage/India';
import GK from './component/QuizPage/GK';

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route exact path="/" element = {<Homepage />} />
        <Route exact path="/QuizPage" element = {<QuizPage/>} />
        <Route exact path="/PopQuiz" element = {<PopQuiz/>} />
        <Route exact path="/India" element = {<India/>} />
        <Route exact path="/GK" element = {<GK/>} />
        </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;