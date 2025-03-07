import Banner from "../components/Banner"
import Textapropos from "../components/Textapropos"
import '../style/Apropos.css'

function Apropos() {
    return (
        <div>
        <Banner>
        <div className="banner-commun banner2"></div>
        </Banner>
        <Textapropos />
        </div>
    )
}
export default Apropos