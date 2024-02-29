import './TecCard.css'
function TecCard({tecImages, TecNome}) {
    return (
        <>
        <div className="card">
                <img src={tecImages}  className='tecnologies-image'alt="" />
            <p className="text-card">
                {TecNome}
            </p>
        </div>
        </>
      );
}

export default TecCard;