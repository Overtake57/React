import React, { Fragment } from "react";
const Membre=({nom, children})=>{
    return(
        <Fragment>
        <h2>{nom.toUpperCase()} :</h2>
        {children? <p>{children}</p>:<Fragment/>}
        </Fragment>
    )
}
export default Membre;