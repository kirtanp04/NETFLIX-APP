
import './App.scss';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';





function App() {
  return (
    <>
      <Router>
      <Header/>
      <Home/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
