import DescriptionsApropos from "../data/textapropos.json"
import Collapse from "./Collapse"
// import '../styles/Apropos.css'

function Textapropos (){
    
    return (
        <div className="boxdescription">
            {
                DescriptionsApropos.map(description => 
                    <Collapse key = {description.id}
                       id = {description.id}
                       titre = {description.titre}
                       description = {description.description}
                    />
                )
            }
        </div>
    )
}
export default Textapropos