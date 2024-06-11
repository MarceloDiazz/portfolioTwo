import React from "react";
import fotoPerfil from "../img/foto-perfil.jpg";
import iconLinkedin from "../img/IconLinkedin.png";
import iconGmail from "../img/IconGmail.png";
import iconGitHub from "../img/iconGitHub.png";
import "../css/header.css";
const Header = () => {
  return (
    <section className="contenedor header">
      <svg version="1.1" id="home-anim" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1820 1080" style="enable-background:new 0 0 1820 1080;" xml:space="preserve">

<g id="home">
	<defs>
		<rect id="masque" y="0.4" width="1820" height="1080"/>
	</defs>
		<clipPath id="cache">
		<use xlink:href="#masque"  style="overflow:visible;"/>
	</clipPath>
<g id="blue">
		<line x1="225.8" y1="1151" x2="534.9" y2="841.9"/>
		<line x1="827.1" y1="1003.3" x2="518" y2="1312.3"/>
		<line x1="661.9" y1="714.9" x2="971" y2="405.9"/>
		<line x1="1263.1" y1="567.2" x2="954.1" y2="876.3"/>
		<line x1="1098" y1="278.8" x2="1407.1" y2="-30.2"/>
		<line x1="1699.2" y1="131.1" x2="1390.2" y2="440.2"/>
		<line x1="699.3" y1="1057.6" x2="1008.4" y2="748.5"/>
		<line x1="1300.6" y1="909.9" x2="991.5" y2="1218.9"/>
		<line x1="1135.4" y1="621.5" x2="1444.5" y2="312.4"/>
		<line x1="1736.6" y1="473.8" x2="1427.6" y2="782.8"/>
		<line x1="1571.5" y1="185.4" x2="1880.6" y2="-123.6"/>
		<line x1="1172.8" y1="964.2" x2="1481.9" y2="655.1"/>
		<line x1="1774.1" y1="816.5" x2="1465" y2="1125.5"/>
		<line x1="1608.9" y1="528.1" x2="1918" y2="219"/>
		<line x1="1219" y1="1298.1" x2="1528" y2="989.1"/>
		<line x1="1655.1" y1="862" x2="1964.1" y2="553"/>
		<line x1="232.8" y1="75.5" x2="-76.2" y2="384.6"/>
		<line x1="270.2" y1="418.2" x2="-38.8" y2="727.3"/>
		<line x1="105.1" y1="129.8" x2="414.2" y2="-179.2"/>
		<line x1="706.3" y1="-17.9" x2="397.3" y2="291.2"/>
		<line x1="-284.8" y1="899.9" x2="24.2" y2="590.8"/>
		<line x1="316.4" y1="752.2" x2="7.3" y2="1061.2"/>
		<line x1="151.3" y1="463.8" x2="460.3" y2="154.7"/>
		<line x1="752.5" y1="316.1" x2="443.4" y2="625.1"/>
		<line x1="587.3" y1="27.7" x2="896.4" y2="-281.4"/>
		<line x1="1188.6" y1="-120" x2="879.5" y2="189"/>
		<line x1="-247.4" y1="1242.5" x2="61.6" y2="933.5"/>
		<line x1="188.7" y1="806.4" x2="497.7" y2="497.4"/>
		<line x1="789.9" y1="658.8" x2="480.8" y2="967.8"/>
		<line x1="624.8" y1="370.4" x2="933.8" y2="61.3"/>
		<line x1="1226" y1="222.7" x2="916.9" y2="531.7"/>
		<line x1="1662.1" y1="-213.4" x2="1353" y2="95.6"/>
	</g>
	</g>
	</svg>
      <div className="arrow"></div>
      <div className="card">
        <div className="card-content">
          <div className="card-text">
            <h1>Marcelo Diaz</h1>
            <h1>
              <span>
                Desarrollador <br /> Front End
              </span>
            </h1>
            <p>
              <span className="arrowIcon"></span> <span></span>
              Me sumergí en el mundo de la creación
              digital enfocado en la construccion de experiencias interactivas y
              funcionales cumpliendo las necesidades del usuario.
            </p>
          </div>
          <img src={fotoPerfil} className="img-perfil"/>
          <div className="follow">
           <a> <img src={iconGitHub}/></a>
         <a> <img src={iconLinkedin} /></a>
           <a> <img src={iconGmail}/></a>
          </div>
        </div>
      </div>
      <div className="arrowBottom"></div>
    </section>
  );
};

export default Header;
