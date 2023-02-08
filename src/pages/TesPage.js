import React, {useState} from "react";


const TesPage = () => {
    const [data, setData] = useState({
        name: "Boy",
        address: "Jakarta"
      })
      
      const check = setData({name: "Boy", address:"Bandung"})
      console.log(check)

    return(
        <>
        <div>Tes</div>
        </>
    )
}

export default TesPage