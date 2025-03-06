import { useState } from "react";
// import './stylesComponents/Slideshow.css'

type PictureType = {
    pictures: string[]
}

function Slideshow({ pictures }: PictureType) {

    const [slides, setSlides] = useState(0)
    const totalSlides = pictures.length

    return (
      <div className="Diapo-container">
        <div  className="Diapo" key={slides}>
            <img src={pictures[slides]} alt="Présentation logement" className="imgDiapo"/>
        </div>
{
    totalSlides > 1 && (
        <div className="btn_diapo">
            {/* <img src={`${process.env.PUBLIC_URL}/Arrow_previews.png`} alt="" onClick={() => setSlides ((slides - 1 + totalSlides) % totalSlides)} className="arrow_prev"></img>
            <img src={`${process.env.PUBLIC_URL}/Arrow_next.png`} alt="" onClick={() => setSlides ((slides + 1) % totalSlides)} className="arrow_next"></img> */}
        </div>
    )
}
{
    totalSlides > 1 && (
        <div className="compteur">
            <p><strong>{slides+1}/{totalSlides}</strong></p>
        </div>
    )
}
      </div>
    );
  }
  export default Slideshow;