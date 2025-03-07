import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'

import Organizador from '../pages/Organizador'
import Usuario from '../pages/Usuario'

import TorneioOrg from '../pages/Organizador/TorneioOrganizador'
import HistoricoOrg from '../pages/Organizador/HistoricoOrganizador'
import HistoricoUser from '../pages/Organizador/HistoricoOrganizador'
import TorneioUser from '../pages/Organizador/TorneioOrganizador'
import PerfilOrg from '../pages/PerfilOrg'
import PerfilConfig from '../pages/PerfilConfig'
import CriarTorneio from '../pages/CriarTorneio'
import CriarEquipe from '../pages/CriarEquipes'
import ChaveOrg from '../pages/Chaveamento'
import SelecionarParticipantes from '../pages/ColocarParticipantesEmEquipe/SelecionarParticipantes'
import SelecionarEquipes from '../pages/ColocarEquipesEmTorneio/SelecionarEquipes'
import MostrarEquipes from '../pages/Equipes'
import MostrarParticipantes from '../pages/Participantes'




function AppRoutes(){
    return(
        
        <BrowserRouter>
            <Routes>


                {/* Rotas de Usuário e Organizador */}
                <Route path='/' element={<Home />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/cadastro' element={<Cadastro />}/>
                
                <Route path='/organizador' element={<Organizador />}/>
                <Route path='/usuario' element={<Usuario />}/>
                
                <Route path='/torneio-org'element={<TorneioOrg/>}/> 
                <Route path='/chave-org' element={<ChaveOrg />}/>
                <Route path='/historico-org' element={<HistoricoOrg/>}/>

                <Route path='/historico-user' element={<HistoricoUser />}/>
                <Route path='/torneio-user' element={<TorneioUser />}/>
                <Route path='/perfil-user'element={<PerfilOrg/>}/>
                <Route path='/perfil-config' element={<PerfilConfig />}/>

                <Route path='/criar-torneio' element={<CriarTorneio />}/>
                <Route path='/criar-equipe' element={<CriarEquipe />}/>


                <Route path="/equipes" element={<MostrarEquipes/>} />
                <Route path="/participantes" element={<MostrarParticipantes/>} />
                
                <Route path="/selecionar-participantes" element={<SelecionarParticipantes />} />
                <Route path="/selecionar-equipes" element={<SelecionarEquipes />} />



                
                
                <Route path='/*' element= "Página Não Encontrada"/> 
            </Routes>
        </BrowserRouter>
            
        )
}

export default AppRoutes

