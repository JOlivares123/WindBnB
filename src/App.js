import { StayTile } from './components/StayTile/StayTile';
import './App.css';
import data from './challenge_assets/stays.json'

const App = () => {

  return (
    <div className="App">
      <div className='StayContainer'>


      {data.map((stay) => {
        return(
          <StayTile
            imgPath={stay.photo}
            imgDesc={stay.title}
            isSuperHost={stay.superHost}
            rating={stay.rating}
            stayType={stay.type}
            stayBds={stay.beds}
          />
        )
      })}
            </div>
    </div>
  );
}

export default App;
