import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainComponent from './components/MainComponent'

function App() {

  return (
    <div>
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </div>
  )
}

export default App
