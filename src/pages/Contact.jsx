import React from 'react';

const Contact = () => {
    return (
<>
<form id="contacthtmlForm" className="flexContCol">

<p className="isBold">CONTACTEZ-NOUS</p>

<div id="inputsWrapper" className="flexContCol">
<div className="flexContCol"><label htmlFor="prenom">Prénom*</label><input id="prenom" name="prenom" type="text" placeholder="Entrez votre nom" required autofocus/></div>
<div className="flexContCol"><label htmlFor="nom">Nom*</label><input id="nom" name="nom" type="text" placeholder="Entrez votre nom" required /></div>





<div className="flexContCol"><label htmlFor="email">Email*</label><input id= "email" name="email" type="email" placeholder="Entrez une adresse mail valide" required /></div>
<div className="flexContCol"><label htmlFor="telephone">Téléphone</label><input id="telephone" name="telephone" type="tel" placeholder="Numéro de téléphone" /></div>
</div>

<div id="messageBox" className="flexContCol"><label htmlFor="message">Message</label><textarea id="message" name="message" placeholder="Ecrivez votre message" required></textarea></div>

<div id="buttonBox">
<input type="submit"/>
</div>
</form>




</>
    );
};

export default Contact;