import React from 'react'

const CharacterItem = ({ character }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={character.fullPortrait} alt="" />
          
        </div>
        <div className="card-back">
          <h1>{character.displayName}</h1>
          <ul>
            <li>
                <strong>Description:</strong> {character.description}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem