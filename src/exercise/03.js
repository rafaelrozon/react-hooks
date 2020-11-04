// Lifting state
// http://localhost:3000/isolated/exercise/03.js

import React from 'react'

function Name({name, onNameChange}) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
    </div>
  )
}

// 🐨 accept `animal` and `onAnimalChange` props to this component
function FavoriteAnimal() {
  const [animal, setAnimal] = React.useState("")
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={animal}
        onChange={event => setAnimal(event.target.value)}
      />
      <p>Animal chosen is: {animal}</p>
    </div>
  )
}

function Display({name, animal}) {
  return <div>{`Hey ${name}, you're great!`}</div>
}

function App() {
  const [name, setName] = React.useState('')
  return (
    <form>
      <Name name={name} onNameChange={event => setName(event.target.value)} />
      <FavoriteAnimal />
      <Display name={name} />
    </form>
  )
}

export default App
