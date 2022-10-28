import './App.css';
import Header from "./components/Header"
import React, { useState, useEffect } from "react"
import axios from 'axios';
import CharacterGrid from "./components/CharacterGrid"

const App = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const result = await axios.get(`https://valorant-api.com/v1/agents`)
        setCharacters(result.data.data) //giving characters a value
        setIsLoading(false)
      } catch(error) {
          console.log(error)
      }


    }
    fetchCharacters();
  }, [])

  console.log(characters)

  return (
    <div className="container">
      <Header />
      <CharacterGrid isLoading={isLoading} characters={characters} />
    </div>
  );
}

export default App;


//rfce or rfc