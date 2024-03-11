import TecCard from "./TecCard";
import './Tecnologies.css'

function Tecnologies({tecImages}) {
    return (
        <>
        <div id="container-tec" >
        <div className="tec-content">
            <p className="tecnologies-text">
                Tecnologias
            </p>
            <div className="tec-card-content">
                <TecCard tecImages={tecImages[8]} TecNome={'HTML'}/>
                <TecCard tecImages={tecImages[11]} TecNome={'CSS'}/>
                <TecCard tecImages={tecImages[9]} TecNome={'JavaScript'}/>
                <TecCard tecImages={tecImages[10]} TecNome={'React'}/>
                <TecCard tecImages={tecImages[12]} TecNome={'Bootstrap'}/>  
                <TecCard tecImages={tecImages[13]} TecNome={'Sass'}/>  
                <TecCard tecImages={tecImages[14]} TecNome={'Firebase'}/>  
                



            </div>

            </div>
        </div>
            </>
    );
}

export default Tecnologies;