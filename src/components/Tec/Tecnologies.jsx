import { useContext } from "react";
import TecCard from "./TecCard";
import './Tecnologies.css'
import { ImageContext } from "../../contexts/ImageContext";

function Tecnologies() {
    const imagens = useContext(ImageContext)
    return (
        
        <>
        <div id="container-tec" >
        <div className="tec-content">
            <p className="tecnologies-text">
                Tecnologias
            </p>
            <div className="tec-card-content">
                <TecCard tecImages={imagens[8]} TecNome={'HTML'}/>
                <TecCard tecImages={imagens[11]} TecNome={'CSS'}/>
                <TecCard tecImages={imagens[9]} TecNome={'JavaScript'}/>
                <TecCard tecImages={imagens[10]} TecNome={'React'}/>
                <TecCard tecImages={imagens[12]} TecNome={'Bootstrap'}/>  
                <TecCard tecImages={imagens[13]} TecNome={'Sass'}/>  
                <TecCard tecImages={imagens[14]} TecNome={'Firebase'}/>  
                



            </div>

            </div>
        </div>
            </>
    );
}

export default Tecnologies;