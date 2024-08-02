import Navbar from "./Navbar"
import ExplorePage from "./ExplorePage"
import ImagePage from "./ImagePage"
import AddImagePage from "./AddImagePage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
 
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<ExplorePage />}/>
        <Route path="/imagem/5" element={ <ImagePage />}/>
        <Route path="/adicionar-imagens" element={<AddImagePage />}/>
      </Routes>

    </BrowserRouter>
  )
}