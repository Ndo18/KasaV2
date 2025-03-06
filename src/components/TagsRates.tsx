// import './stylesComponents/TagsRates.css'

import { ReactNode } from "react"

type TagsRatesProps = {
    tags: ReactNode,
    rating: ReactNode,
    hostname: string,
    hostpicture: string
}

function TagsRates({tags, rating, hostname, hostpicture}: TagsRatesProps) {
    return(
    <div className='tagsrates'>
        <div className='tags'>
            {tags}
        </div>
        <div className="starsnhost">
        <div className="ratestars">
            {rating}
        <div className='onlymobileprofil'>
            <div>{hostname}</div>
            <img src={hostpicture} alt="" />
        </div>
        </div>
        </div>
    </div>
    )
}
export default TagsRates