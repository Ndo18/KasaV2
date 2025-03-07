import { useState } from "react"
import '../style/Collapse.css'

type CollapseProps = {
    id?: string,
    titre: string,
    description: React.ReactNode
}

function Collapse ({id, titre, description}: CollapseProps) {
    
const [isOpen, setisOpen] = useState(false)

const iconOpen = isOpen ? 'opened' : 'closed'
    
    return (
        <div className="monBlock monBlockapropos">
            <div onClick={() => setisOpen(!isOpen)} className={`listedescription listapropos ${iconOpen}`} key={id}>
                <h3>
                {titre}
                </h3>
                <div>
                <i className="fa-solid fa-chevron-up"></i>
                </div>
            </div>
        { isOpen && <div className="descriptiontext"><span>{description}</span></div> }
        </div>
    )
}
export default Collapse 