import Home from './pages/Home'
import backgroundImage from './assets/background.jpg'
import './App.css'

function App() {
  return (
    <>
      <div 
        className="fixed-background" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <Home />
    </>
  )
}

export default App
