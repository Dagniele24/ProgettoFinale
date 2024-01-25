import 'bootstrap/dist/css/bootstrap.min.css'
import MainSearch from './components/MainSearch'
import WorkSearch from './components/SearchWork'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:companyName" element={<WorkSearch />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
