import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
<>


<section id="presentation">


<article>
    <img className="presentationImg" src="images/clients.jpg" sizes="40vw" srcSet="images/clients-400.webp 400w, images/clients-600.webp 600w, images/clients-800.webp 800w, images/clients-1000.webp 1000w, images/clients-1500.webp 1500w" alt="Des clients heureux devant un véhicule" title="Des clients heureux devant un véhicule"/>
    <div className="cardText">
<h2>BIENVENUE CHEZ <span className="brownTouch">CLUB AUTO</span></h2>
<p className="isBold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac orci scelerisque, ornare turpis at, sollicitudin odio. Mauris gravida purus massa, quis bibendum leo posuere at. Cras mattis sapien non molestie vulputate. Nunc et nunc pellentesque massa vestibulum sollicitudin sollicitudin eleifend nulla. Donec ullamcorper, odio at hendrerit rutrum, ipsum risus ultricies nisi, quis scelerisque massa sem ac magna.</p>   


</div>

</article>




<article>
    <div className="cardText">
        <h2>LE MEILLEUR DE L'AUTOMOBILE</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
       
        <ul>
<li><img className="check" src="images/check.svg" alt=""/>Lorem ipsum dolor sit amet</li>
<li><img className="check" src="images/check.svg" alt=""/>Lorem ipsum dolor sit amet</li>
<li><img className="check" src="images/check.svg" alt=""/>Lorem ipsum dolor sit amet</li>
<li><img className="check" src="images/check.svg" alt=""/>Lorem ipsum dolor sit amet</li>
<li><img className="check" src="images/check.svg" alt=""/>Lorem ipsum dolor sit amet</li>

        </ul>
        
        
        </div>

        <img className="presentationImg" src="images/entretien.jpg" sizes="40vw" srcSet="images/entretien-400.webp 400w, images/entretien-600.webp 600w, images/entretien-800.webp 800w, images/entretien-1000.webp 1000w, images/entretien-1500.webp 1500w" alt="Un employé effectuant l'entretien d'un véhicule" title="Un employé effectuant l'entretien d'un véhicule"/>
</article>


</section>


<section id="saleOrLoc">

    <article className="saleOrLocCard locCard">
<a href="contact.html"><h2>Vous souhaitez Louer ?</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et magna vitae risus sollicitudin efficitur non et dui. Mauris cursus velit luctus dictum tincidunt. Nullam a lectus vel felis varius lobortis in et ex. Sed finibus augue pretium consectetur auctor. In vel est non mi ultricies aliquam ut nec sem. Morbi ultrices elit justo, ac placerat est tempor at.</p></a>

    </article >
    
    <article className="saleOrLocCard saleCard">
        <a href="contact.html"><h2>Vous souhaitez acheter ?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et magna vitae risus sollicitudin efficitur non et dui. Mauris cursus velit luctus dictum tincidunt. Nullam a lectus vel felis varius lobortis in et ex. Sed finibus augue pretium consectetur auctor. In vel est non mi ultricies aliquam ut nec sem. Morbi ultrices elit justo, ac placerat est tempor at.</p></a>

    </article>

</section>



<section id="newCars">

<div className="decoTitle"><h2 className="whiteTouch">VEHICULES RECENTS</h2></div>

<div id="carsWrapper">
<article className="cardCars"><a href="singleCar.html"><img src="images/vehicule2.jpg" sizes="40vw" srcSet="images/vehicule2-400.webp 400w, images/vehicule2-600.webp 600w, images/vehicule2-800.webp 800w, images/vehicule2-1000.webp 1000w, images/vehicule2-1500.webp 1500w" alt="" loading="lazy"/><div className="cardCarsInfo"><p><span className="whiteTouch">BMW 535I, NAVI, LEATHER, ABS</span></p><div className="priceTag">5 500 €</div></div></a></article>
<article className="cardCars"><a href="singleCar.html"><img src="images/vehicule2.jpg" sizes="40vw" srcSet="images/vehicule2-400.webp 400w, images/vehicule2-600.webp 600w, images/vehicule2-800.webp 800w, images/vehicule2-1000.webp 1000w, images/vehicule2-1500.webp 1500w" alt="" loading="lazy"/><div className="cardCarsInfo"><p><span className="whiteTouch">BMW 328I, SPORT LINE BODY KIT</span></p><div className="priceTag">8 000 €</div></div></a></article>
<article className="cardCars"><a href="singleCar.html"><img src="images/vehicule2.jpg" sizes="40vw" srcSet="images/vehicule2-400.webp 400w, images/vehicule2-600.webp 600w, images/vehicule2-800.webp 800w, images/vehicule2-1000.webp 1000w, images/vehicule2-1500.webp 1500w" alt="" loading="lazy"/><div className="cardCarsInfo"><p><span className="whiteTouch">FORD EXPLORER 2015 4WD</span></p><div className="priceTag"><span className="isCrossed">9 000 €</span><br/> 8 200 €</div></div></a></article>
</div>
</section>



<section id="whyUs">
<h2>POURQUOI NOUS CHOISIR ?</h2>

<div id="whyUsWrapper">
<article className="cardWhy"><img src="images/icon1.png" alt="" loading="lazy"/><h3>Financement</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque deleniti tempora aliquid dolorum saepe quia eveniet nemo! Dolores, ad voluptatibus.</p></article>
<article className="cardWhy"><img src="images/icon2.png" alt="" loading="lazy"/><h3>Réactivité de l'équipe technique</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque deleniti tempora aliquid dolorum saepe quia eveniet nemo! Dolores, ad voluptatibus.</p></article>
<article className="cardWhy"><img src="images/icon3.png" alt="" loading="lazy"/><h3>A l'écoute de notre clientèle</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque deleniti tempora aliquid dolorum saepe quia eveniet nemo! Dolores, ad voluptatibus.</p></article>
<article className="cardWhy"><img src="images/icon4.png" alt="" loading="lazy"/><h3>Service et maintenance</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque deleniti tempora aliquid dolorum saepe quia eveniet nemo! Dolores, ad voluptatibus.</p></article> 
</div>
<a className="buttonWhy" href="contact.html">CONTACTEZ NOUS</a>
</section>


<section id="conclusion" >

<article className="saleOrLocCard locCard">
<h2><a href="index.html">CLUB AUTO</a><br/><span>VENTE ET LOCATION</span></h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et mi pharetra, condimentum ipsum ac, posuere tortor. Praesent interdum, dui sit amet egestas aliquet, orci ipsum cursus massa, sed eleifend orci leo vestibulum nisi. Donec finibus nibh sed augue porta blandit. Cras finibus mi eu augue dignissim dignissim.</p>

</article>    

</section>






</>
    );
};

export default Home;