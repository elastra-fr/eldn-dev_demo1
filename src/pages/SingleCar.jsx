import React from 'react';

const SingleCar = () => {
    return (
<>
 <div className="singleCarWrapper">

    <h2>BMW 535i, Navi, Leather, ABS</h2>
<img id="singleCarImg" src="/images/vehicule2.jpg" sizes="40vw" srcSet="images/vehicule2-400.webp 400w, images/vehicule2-600.webp 600w, images/vehicule2-800.webp 800w, images/vehicule2-1000.webp 1000w, images/vehicule2-1500.webp 1500w" alt="Photo d'un véhicule BMW 535i, Navi, Leather, ABS"/>
<div>
<nav >
    <ul id="onglets">
        <li  id="singleDesc" className="itemOnglets"><a id="btDesc" href="#">DESCRIPTION</a></li>
        <li id="singleTech" className="itemOnglets"><a id="btTech" href="#">TECHNIQUE</a></li>
        <li  id="singleOptions" className="itemOnglets"><a id="btOpt" href="#">OPTIONS</a></li>
        <li  id="singleContact" className="itemOnglets"><a id="btCont" href="contact.html">CONTACT</a></li>
    </ul>

</nav>
<div id="carSubContent">


</div>



</div>


 </div>   




</>
    );
};

export default SingleCar;