import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <a id="toggleButtonMenu" className="mobileMenu" href="#" title="Menu">
          <svg
            width="80px"
            height="80px"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M41,14H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,14Z"
              fill="#ECEFF3"
            />
            <path
              d="M41,26H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,26Z"
              fill="#ECEFF3"
            />
            <path
              d="M41,38H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,38Z"
              fill="#ECEFF3"
            />
          </svg>
        </a>
        <div id="headInfos">
          <div id="mainTitle">
            <Link to="/home">
              <h1>CLUB AUTO</h1>
            </Link>
          </div>
          <div id="adress" className="iconTextGrid">
            <img src="images/icone-adresse.png" alt="Icone adresse" />
            <p>
              <span className="brownTouch isBold">Adresse : </span>
              <br />
              AVENUE CHARLES DE GAULLE
              <br />
              75000 PARIS
            </p>
          </div>
          <div id="tel" className="iconTextGrid">
            <img src="images/icon-telephone.png" alt="Icone Téléphone" />
            <p>
              <span className="brownTouch isBold">Téléphone :</span>
              <br />
              <span className="whiteTouch isBold  isBigger">
                01 23 45 67 89
              </span>
            </p>
          </div>
          <div id="horaires">
            <p>
              <span className="brownTouch isBold">OUVERTURE :</span>{" "}
              <span className="whiteTouch isBold">Du lundi au Samedi</span>
              <br />
              <span className="brownTouch isBold">HORAIRES :</span>{" "}
              <span className="whiteTouch isBold">De 9h à 17h</span>
            </p>
          </div>
          <div id="headerSocials">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              title="Lien vers notre page facebook"
            >
              <svg
                fill="#ECEFF3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              title="Lien vers notre compte X (ex Twitter)"
            >
              <svg
                fill="#ECEFF3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="navImgGrid">
          <nav>
            <ul id="wrapMenu" className="hidden">
              <li>
                <Link className="isBold" to="/home">
                  ACCUEIL
                </Link>
              </li>
              <li title="Page non incluse dans le cahier des charges du projet">
                <Link className="isBold" to="/vehicules">
                  NOS VEHICULES
                </Link>
              </li>
              <li>
                <Link className="isBold" to="/contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
          <img
            id="mainImg"
            src="images/vehicule1.jpg"
            sizes="40vw"
            srcSet="images/vehicule1-400.webp 400w, images/vehicule1-600.webp 600w, images/vehicule1-800.webp 800w, images/vehicule1-1000.webp 1000w, images/vehicule1-1500.webp 1500w"
            alt="Des véhicules soigneusement alignés sur un parking"
            title="Des véhicules soigneusement alignés sur un parking"
          />
        </div>
        <a href="#" id="shrinkTitle">
          <h1>
            CLUB AUTO{" "}
            <span className="brownTouch">LE MEILLEUR DE L'AUTOMOBILE</span>
          </h1>
        </a>
      </header>
    </>
  );
};

export default Header;
