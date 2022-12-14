import React from "react";
import { useSelector } from "react-redux";

function TesPage(){
    const token = useSelector(state => state.auth.token)
    return(
        <>
        {!token ? <div>Silahkan login terlebih dahulu</div> : <div>Login success</div>}
        </>
    )
}

export default TesPage