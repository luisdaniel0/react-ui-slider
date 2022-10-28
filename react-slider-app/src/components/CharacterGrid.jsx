import React from 'react'
import CharacterItem from './CharacterItem'


function CharacterGrid({ characters, isLoading }) {
  //console.log(characters, "here")
  let newCharacters = []
  characters.map((character) => {
    if (character.isPlayableCharacter === true) {
      newCharacters.push(character)
    }
  }

  )
  console.log(newCharacters)
  return isLoading ? (<h1>Loading..</h1>
  ) : (
    <div className="gridContainer">
      {newCharacters.map(character => (
        //if (character.isPlayableCharacter === true) {
        <CharacterItem key={character.uuid} character={character}></CharacterItem>
        //  }
      )

      )}


    </div>
  )
}

export default CharacterGrid

