
import { useEffect, useState } from 'react';
import './App.css';
import { GetGameAPI, Search } from './api';

function App() {

  const [getGame, setGame] = useState([])

  useEffect(() => {
    GetGameAPI().then((result) => {
      setGame(result)
    })
  }, [])

  const GameList = () => {
    return getGame.map((game, i) => {
      return(
        <div key={i}>
          <div key={game.name}></div>
          <div key={game.released}></div>
          <div key={game.background_image}></div>
          <div key={game.rating}></div>
          <div className='Game-wrapper bg-gray-600 rounded-lg'>
            <div className='Game-title text-orange-400 font-bold text-2xl'>{game.name}</div>
            <div className='Game-released'>{game.released}</div>
            <img src={game.background_image} className='Game-image' width='500' height='600'></img>
            <div className='Game-rating'>{game.rating}</div>
          </div>
        </div>
      )
    })
  }

  const searchGame = async(q) => {
    if (q.length > 3) {
      const query = await Search(q)
      setGame(query.results)
      console.log(query)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='py-6 text-[3rem]'>Game Finder</h1>
        <input onChange={({target}) => {
          searchGame(target.value)
        }}></input>
        <div className='Game-container text-xl flex justify-center items-center gap-7 flex-wrap'>
          <GameList/>
        </div>
      </header>
    </div>
  );
}

export default App;
