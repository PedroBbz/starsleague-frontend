import './navbarUser.css'
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { User, Settings, Globe, LogOut } from 'lucide-react'
import logo from '../../assets/SL.png'

function NavbarUsuario() {



    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    // Fecha o menu se clicar fora
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    const navigate = useNavigate();

    return (



        <nav className='navbarUser'>

            <div className="logoUser">

                {/*USE LINK TO APENAS EM IMAGEM  */}
                <Link to='/usuario'>
                    <img src={logo} alt="logo" />
                </Link>
            </div>


            {/* Botões do meio da NAVBAR */}
            <div className='botoesUser'>
                <div>
                    <button className='btn-icone' onClick={() => navigate("/torneio-user")}></button>
                    <p>Torneios</p>
                </div>

                <div>
                    <button className='btn-icone' onClick={() => navigate("/historico-user")}></button>
                    <p>Historico</p>
                </div>



            </div>


            {/* Pequeno usuário no canto da navbar, recomendo não mexer (risco de quebrar) */}
            <div className="perfilUser">

                <button onClick={() => setIsOpen(!isOpen)} className="profile-button">
                </button>

                {/* Dropdown de opções */}
                {isOpen && (
                    <div className="dropdown-menu">

                        <a href="#">

                            <Globe className="icon" /> Idioma
                        </a>
                        <a href="#">
                            <Link to='/perfil-user'>
                            <User className="icon" /> Meu Perfil
                            </Link>
                        </a>
                        <a href="#">
                            <Link to='/'>
                            <Settings className="icon" /> Configurações
                            </Link>
                        </a>
                        <a href="#">
                            <LogOut className="icon" /> Sair
                        </a>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default NavbarUsuario