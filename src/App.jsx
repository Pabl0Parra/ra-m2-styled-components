import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FrontPage, Data, Profile } from './pages/index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/data" element={<Data />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
