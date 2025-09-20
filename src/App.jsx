import { useEffect, useState } from 'react'
import './App.css'
import AvailablePlayer from './components/AvaliablePlayers/AvailablePlayer'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { setStoredData } from './components/utility'

function App() {
  const [coin, setCoins] = useState(100000)
  const [isActive, setIsActive] = useState({
    cart: true,
    status: 'cart',
  })
  const toggleHandler = (status) => {
    if (status === 'cart') {
      setIsActive({
        cart: true,
        status: 'cart',
      })
    } else {
      setIsActive({
        cart: false,
        status: 'about',
      })
    }
  }
  const coinHandler = (amountOfCoin) => {
    setCoins(coin + 60000);
    toast.success(`$60000 added to your account!`);
    console.log(amountOfCoin);
  }

  const [players, setPlayers] = useState([])
  const [selectedPlayers, setSelectedPlayers] = useState([])

  useEffect(() => {
    fetch('player.json')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, [])

  const handleChoosePlayer = (player) => {
    const isPlayerExist = selectedPlayers.find(
      (selectedPlayer) => selectedPlayer.playerId === player.playerId
    );
    if (isPlayerExist) {
      toast.info(`${player.name} is already in your team.`);
      return;
    }

    if (coin < player.biddingPrice) {
      toast.error("Insufficient funds to buy this player!");
      return;
    }

    setSelectedPlayers([...selectedPlayers, player]);
    setCoins(coin - player.biddingPrice);
    toast.success(`${player.name} added to your team!`);
  };

  const handleRemovePlayer = (player) => {
    const remainingPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.playerId !== player.playerId
    );
    setSelectedPlayers(remainingPlayers);
    setCoins(coin + player.biddingPrice);
    toast.warn(`${player.name} removed from your team.`);
  };

  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner coinHandler={coinHandler}></Banner>
      <AvailablePlayer
        isActive={isActive}
        toggleHandler={toggleHandler}
        players={players}
        selectedPlayers={selectedPlayers}
        handleChoosePlayer={handleChoosePlayer}
        handleRemovePlayer={handleRemovePlayer}
      ></AvailablePlayer>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
