// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import React from 'react'

function Greeting({ initialName = "" }) {
  const [name, setName] = React.useState(initialName);

  function handleChange(event) {
    const {value} = event.target;
    setName(value.trim());
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" value={name} />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="Rafa" />
}

export default App
