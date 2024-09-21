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
        <Route path="/imagem/:idImagem" element={ <ImagePage />}/> {/*os :idImagem  serve para opontar o que vai ser passado pela url*/}
        <Route path="/adicionar-imagens" element={<AddImagePage />}/>
      </Routes>

    </BrowserRouter>
  )
}
