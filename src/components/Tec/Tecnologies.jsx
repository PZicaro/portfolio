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
                <TecCard tecImages={tecImages} TecNome={'HTML'}/>
                <TecCard tecImages={tecImages} TecNome={'CSS'}/>
                <TecCard tecImages={tecImages} TecNome={'JavaScript'}/>
                <TecCard tecImages={tecImages} TecNome={'React'}/>
                <TecCard tecImages={tecImages} TecNome={'Bootstrap'}/>  
                <TecCard tecImages={tecImages} TecNome={'Sass'}/>  
                <TecCard tecImages={tecImages} TecNome={'Firebase'}/>  
                



            </div>

            </div>
        </div>
            </>
    );
}

export default Tecnologies;