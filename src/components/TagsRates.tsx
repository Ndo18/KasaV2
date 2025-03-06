// import './stylesComponents/TagsRates.css'

function TagsRates(props) {
    return(
    <div className='tagsrates'>
        <div className='tags'>
            {props.tags}
        </div>
        <div className="starsnhost">
        <div className="ratestars">
            {props.rating}
        <div className='onlymobileprofil'>
            <div>{props.hostname}</div>
            <img src={props.hostpicture} alt="" />
        </div>
        </div>
        </div>
    </div>
    )
}
export default TagsRates