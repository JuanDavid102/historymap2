import React, {  } from 'react';
import { useLocation } from "wouter";

function MapaClick(props) {

    const [location, setLocation] = useLocation();

    return (
        <div className="col-4 mb-3 text-center">
            <div className="card">
                <img className="card-img-top" src={props.mapImage} alt="Card image" />
                <div className="card-body">
                    <h4 className="card-title">{props.mapName}</h4>
                    <button onClick={()=>{setLocation("/ver/"+props.mapID)}}>Ver</button>
                    <button onClick={()=>{setLocation("/editar/"+props.mapID)}}>Editar</button>
                </div>
            </div>
        </div>
    );
}

export default MapaClick;
