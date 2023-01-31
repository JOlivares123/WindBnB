import { StayTile } from './components/StayTile/StayTile';
import {StayResultsContainer} from './components/StayResultsContainer/StayResultsContainer'
import './App.css';
import data from './challenge_assets/stays.json'
import { Footer } from './components/Footer/Footer';

const App = () => {

  return (
    <div className="App">
      <StayResultsContainer
        data={data}
      />
      <Footer/>
    </div>
  );
}

export default App;
