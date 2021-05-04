import { useEffect, useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';
import Players from './Components/Players/Players';
import playerData from './FakeData/player_data.json';

function App() {
  const [allPlayer, setAllPlayer] = useState([]);
  useEffect(() => {
    setAllPlayer(playerData)
  }, [])

  const [player, setPlayer] = useState([]);
  const handlePlayerBtn = (playerDetail) => {
    const newPlayer = [...player, playerDetail];
    setPlayer(newPlayer);
  }

  return (
    <div className="App">

      <div className="bg-light">
        <Header></Header>
      </div>

      <div className="team">
        <div className="players-profile">
          {
            allPlayer.map(player => <Players player={player} handlePlayerBtn={handlePlayerBtn} key={player.id}></Players>)
          }
        </div>
        <div className="player-cart">
          <Cart player={player}></Cart>
        </div>
      </div>

    </div>
  );
}

export default App;
