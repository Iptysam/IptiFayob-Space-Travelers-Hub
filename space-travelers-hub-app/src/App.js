import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';


class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
           <Route></Route>
        </Routes>
      </Router>
    );
  }
}
export default App;

