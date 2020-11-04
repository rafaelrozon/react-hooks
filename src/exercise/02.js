// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import React from 'react'

const useLocalStorageState = (key, defaultValue = "") => {
  
  const [state, setState] = React.useState(() => {
    const valueFromStorage = window.localStorage.getItem(key);
    const cleanValue = valueFromStorage ? JSON.parse(valueFromStorage) : "";
    return cleanValue || defaultValue;
  })
  
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

function Greeting({initialName = ''}) {
  const [name, setName] = useLocalStorageState("name", initialName);

  function handleChange(event) {
    setName(event.target.value)
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
  return <Greeting />
}

export default App
