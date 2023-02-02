import {StayResultsContainer} from './components/StayResultsContainer/StayResultsContainer'
import './App.css';
import data from './challenge_assets/stays.json'
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

const App = () => {
  return (
    <div className="App">
      <Header data={data} />
      <StayResultsContainer
        data={data}
      />
      <Footer/>
    </div>
  );
}

export default App;
