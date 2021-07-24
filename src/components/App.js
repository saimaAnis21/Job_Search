import { BrowserRouter, Route } from 'react-router-dom';
import Job from '../containers/Job';
import Home from './Home';

const App = () => (
  <div>
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/Job" component={Job} />
    </BrowserRouter>
  </div>
);

export default App;
