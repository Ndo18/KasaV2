import { ReactNode } from 'react'
// import './stylesComponents/Banner.css'

//Type props Children

type childrenType = {
    children: ReactNode,
}

function Banner ({children}: childrenType){
    return(
        <div>
            {children}  
        </div> 
    )
}
export default Banner