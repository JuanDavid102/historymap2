import React, { useEffect, useState } from 'react';
import { useLocation } from 'wouter';

function Menu(props) {

    const [location, setLocation] = useLocation();
    /*const [selected, setSelected] = useState(["", "", "", ""])

    function cambiarSelect (){
        switch (location){
            case "/":
                setSelected(["select", "", "", "", ""])
                break;
            case "/libres":
                setSelected(["", "select", "", "", ""])
                break;
            case "/misMapas":
                setSelected(["", "", "select", "", ""])
                break;
            case "/perfil":
                setSelected(["", "", "", "select", ""])
                break;
            case "/session":
                setSelected(["", "", "", "select", ""])
                break;
            case "/crear":
                setSelected(["", "", "", "", "select"])
                break;
            default:
                setSelected(["", "", "", "", ""])
                break;
        }
    }
    useEffect(cambiarSelect, [location])
    
    return (<>
        
        <div className={"vertical-nav "+props.isActive} id="sidebar">
            <div className="py-4 px-3 mb-1">
                <div className="media d-flex align-items-center">
                    <div className="media-body">
                        <h1 className="m-0 float-right">Menú</h1>
                    </div>
                </div>
            </div>

            <ul className="nav flex-column mb-0">
                <li className="nav-item border-top" onClick={() => {setLocation("/")}}>
                <span className={"nav-link text-white cursor-link hover-select "+selected[0]}>
                            <i className="fa mr-3 fa-fw"></i>
                            <strong className="h3">Inicio</strong>
                        </span>
                </li>
                <li className="nav-item border-top" onClick={() => {setLocation("/libres")}}>
                <span className={"nav-link text-white cursor-link hover-select "+selected[1]}>
                            <i className="fa mr-3 fa-fw"></i>
                            <strong className="h3">Mapas Libres</strong>
                        </span>
                </li>
                <li className="nav-item border-top" onClick={() => {setLocation("/misMapas")}}>
                <span className={"nav-link text-white cursor-link hover-select "+selected[2]}>
                            <i className="fa mr-3 fa-fw"></i>
                            <strong className="h3">Mis Mapas</strong>
                        </span>
                </li>
                <li className="nav-item border-top"  onClick={() => {setLocation("/perfil")}}>
                <span className={"nav-link text-white cursor-link hover-select "+selected[3]}>
                            <i className="fa mr-3 fa-fw"></i>
                            <strong className="h3">Perfil</strong>
                        </span>
                </li>
                <li className="nav-item border-top border-bottom" onClick={() => {setLocation("/crear")}}>
                <span className={"nav-link text-white cursor-link hover-select "+selected[4]}>
                            <i className="fa mr-3 fa-fw"></i>
                            <strong className="h3">Crear mapa</strong>
                        </span>
                </li>
            </ul>
        </div>
        </>
    );*/
        
        return (<ul>
            <li><a href="#" onClick={() => {setLocation("/")}}>Inicio</a></li>
            <li><a href="#" onClick={() => {setLocation("/libres")}}>Mapas Libres</a></li>
            <li><a href="#" onClick={() => {setLocation("/misMapas")}}>Mis Mapas</a></li>
            <li><a href="#" onClick={() => {setLocation("/perfil")}}>Perfil</a></li>
            <li><a href="#" onClick={() => {setLocation("/crear")}}>Crear mapa</a></li>
            </ul>
        )
}

export default Menu;