// import Form from "./form.js";

// function Nutrition(){
//     return(
//         <>
//            <Form/>
//         </>
//     )
// }
// export default Nutrition

import React from 'react';
import Form from "./form.js";
// import background from '.; // Adjust the path based on your folder structure

function Nutrition() {
  const backgroundStyle = {
    backgroundImage: `url(${'/images/image.png'})`, // Use the imported image variable
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "30vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0",
    padding: "0",
  };

  return (
    <>
    <Form/>
    <div style={backgroundStyle}>
    </div>
    </>
    
  );
}

export default Nutrition;

