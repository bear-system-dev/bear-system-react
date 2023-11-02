import { Route, Routes } from 'react-router-dom'
import { Carreiras } from '../Pages/Carreiras'
import { Comunidade } from '../Pages/Comunidade'
import { Contrate } from '../Pages/Contrate'
import { Home } from '../Pages/Home'
import { QuemSomos } from '../Pages/QuemSomos'
import { Solucoes } from '../Pages/Solucoes'
import { DefaultLayout } from '../layout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Quem Somos" element={<QuemSomos />} />
        <Route path="/Soluções" element={<Solucoes />} />
        <Route path="/Comunidade" element={<Comunidade />} />
        <Route path="/Carreiras" element={<Carreiras />} />
        <Route path="/Contrate" element={<Contrate />} />
      </Route>
    </Routes>
  )
}
