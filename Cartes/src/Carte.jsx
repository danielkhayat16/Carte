import "./Carte.css"
function Carte() {
    
    let clientName = "Motahiba"
    let adresse = "Pantin"
    let deliveryOption = ["Choisir un Livreur", "Victor", "Moustapha", "Bouba", "Quentin", "ChronoGreen"]
    let etage = 0;

    return (

        <div className="Carte">

            <h1>Client: {clientName}</h1>
            <h2>Adresse: {adresse}</h2>
            <h2>Etage: {etage || "RDC"}</h2>
            <h2>
            <label htmlFor="Livreur">Choisir livreur: </label>

            <select name="Livreur" id="Livreur">
                    
                <option value={deliveryOption[0]}>{deliveryOption[0]}</option>
                <option value={deliveryOption[1]}>{deliveryOption[1]}</option>
                <option value={deliveryOption[2]}>{deliveryOption[2]}</option>
                <option value={deliveryOption[3]}>{deliveryOption[3]}</option>
                <option value={deliveryOption[4]}>{deliveryOption[4]}</option>
                <option value={deliveryOption[5]}>{deliveryOption[5]}</option>



            </select>
            </h2>
        </div>
    
    )
    

}

export default Carte