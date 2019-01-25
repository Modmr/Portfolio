import * as React from 'react';
import './App.css';

import agendalogo from './images/agenda.png';
import agenda from './images/agenda2.png';
import agenda2 from './images/agenda3.png';
import agenda3 from './images/agenda4.png';
import agenda4 from './images/agenda5.png';

import diana2 from './images/diana1.png';
import diana3 from './images/diana2.png';
import diana4 from './images/diana3.png';
import diana from './images/diana4.png';


import robo from './images/robo.png';
import robo2 from './images/robo2.png';
import robo3 from './images/robo3.png';
import robo4 from './images/robo4.png';
import robologo from './images/robomarkt-bezorg.jpg';

import ernie from './images/erniesoft.png';
import ernie2 from './images/erniesoft2.png';
import ernielogo from './images/erniesoftlogo.png';



class Projecten extends React.Component{

    

    public render(){
        return (
            
        <div>
        
        <hr className="Splitter"/>

        <div className="Card">
        <img src={robologo} className="Card-img-small" />        
          <div className="Card-Textcontainer">
          <h4><b>Webshop RoboMarkt</b></h4>
            <li>Webshop met login systeem</li>
            <li>E-mail verificatie en bevestigingen</li>
            <li>Dotnet framework</li>
            <li>Database met behulp van Model/View/Controller design pattern</li>
          </div>
        </div>

        <img src={robo} className="Card-img-big" />
        <img src={robo2} className="Card" />
        <img src={robo3} className="Card" />
        <img src={robo4} className="Card" />
        
        <hr className="Splitter"/>

        <div className="Card">
        <img src={agendalogo} className="Card-img-small" />        
          <div className="Card-Textcontainer">
          <h4><b>Agenda app</b></h4>
            <li>Agenda met één week indeling</li>
            <li>Xamarin framework</li>
            <li>Gemaakt voor eigen gebruik</li>
            <li>Simpel te gebruiken</li>
          </div>
        </div>
        
        <img src={agenda4} className="Card-img-big" />
        <img src={agenda2} className="Card" />
        <img src={agenda3} className="Card" />
        <img src={agenda} className="Card" />
        
        <hr className="Splitter"/>

        <div className="Card">
        <img src="https://www.livehelpindia.com/images/virtual-recruitment-mobile.png" className="Card-img-small" />        
          <div className="Card-Textcontainer">
          <h4><b>Smart Recruiter</b></h4>
            <li>Gemaakt voor het bedrijf CGI</li>
            <li>Google Dialogflow</li>
            <li>Python</li>
          </div>
        </div>

        
        <div className="Card-img-info">
        <img src={diana} className="Card-img-big" />
        <img src={diana2} className="Card" />
        <img src={diana3} className="Card" />
        <img src={diana4} className="Card" />
        </div>
        <hr className="Splitter"/>

        <div className="Card">
        <img src="https://www.fidflex.nl/wp-content/uploads/2018/08/container.jpg" className="Card-img-small" />        
          <div className="Card-Textcontainer">
          <h4><b>Stage / integratieonderzoek</b></h4>
            <li>Transport software</li>
            <li>VB.NET</li>
            <li>Smartlogistics</li>
            <li>Data Science</li>
          </div>
        </div>
        
        <div className="Card-img-info">
        <img src={ernielogo} className="Card-img-big" />
        <img src={ernie2} className="Card " />
        <img src={ernie} className="Card-img-big" />

        </div>
        <hr className="Splitter"/>

        </div>
        

      
        );
    }
}

export default Projecten;