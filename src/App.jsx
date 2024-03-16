import './App.css'

import { Stars } from './components/stars/Stars'

function App() {

  return (
    <>
    <ul>
      <Stars count={3}/>
      <Stars count={1}/>
      <Stars count={4}/>
      <Stars count={5}/>
      <Stars count={0}/>
      <Stars count={7}/>
    </ul>
    </>
  )
}

export default App
