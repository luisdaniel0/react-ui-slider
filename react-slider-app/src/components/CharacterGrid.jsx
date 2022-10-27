import React from 'react'
import CharacterItem from './CharacterItem'


function CharacterGrid({ characters, isLoading }) {
  //console.log(characters, "here")
  return isLoading ? ( <h1>Loading..</h1>
  ) : (
    <div>
      {characters.map(character => (
        <CharacterItem key={character.uuid} character={character}></CharacterItem>
      ))}

    </div>
  )
}

export default CharacterGrid

