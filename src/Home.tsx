import * as React from 'react';
import './App.css';


class Home extends React.Component{

    public ShowAlert(){
        alert("eindelijddk")
      }

    public render(){
        return (
            
        <div>

        
        <hr className="Splitter"/>
        {/* Wie ben ik */}
          
        
        
        <div className="Card">
          <img className="Card-img-small" src="https://images.arcadis.com/media/4/E/6/%7B4E6825E6-C728-47C8-A4F0-0F27E391A8D1%7DEngineering-2000x995.jpg?width=1583&height=611&mode=crop&anchor=top"/>
            <div className="Card-Textcontainer">
            <h4><b>Wat heb ik hiervoor gedaan?</b></h4> 
            <p>Engineering (AD) was de opleiding die ik in het jaar van 2015 tot 2016 heb gevolgd. Daarvoor heb ik op de HAVO gezeten.
            De opleiding Engineering (AD) sprak me niet genoeg aan. Daarna heb ik besloten om informatica te studeren. </p>
            </div>
        </div>
        
        <div className="Card">
          <img className="Card-img-small" src="http://www.creativeclash.eu/wp-content/uploads/2016/06/personal-skills.png"/>
          <div className="Card-Textcontainer">
          <h4><b>Kwaliteiten/Persoonlijke kenmerken</b></h4>
            <li>Technisch bekwaam</li>
            <li>Creatief</li>
            <li>Leerzaam</li>
            <li>Avond persoon</li>
          </div>
        </div>

        <div className="Card">
          <img className="Card-img-small" src="http://images.ctfassets.net/7ca9kifzimh6/4E4BoAIvHq2KIIuMQakEq2/089f44baebb3e06399894bcbc458efcd/technology.jpg?q=50&fl=progressive"/>
          <div className="Card-Textcontainer">
          <h4><b>Intressegebieden</b></h4>
            <li>Auto's</li>
            <li>Elektronica</li>
            <li>ICT</li>
            <li>Android applicaties</li>
            <li>Techniek</li>
            <li>Programmeertalen</li>
          </div>
        </div>

        <div className="Card">
          <img className="Card-img-small" src="data:image/jpeg;base64,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"/>
          <div className="Card-Textcontainer">
          <h4><b>Toekomstplannen</b></h4>
            <li>Werken in het buitenland</li>
            <li>Een 4e taal leren (geen programmeertaal)</li>
            <li>Eigen applicatie ontwikkelen voor commercieel verkoop/gebruik</li>
          </div>
        </div>
        
        
        <div className="Card">
          <img className="Card-img-small" src="https://www.incimages.com/uploaded_files/image/1940x900/software-computer-code-1940x900_35196.jpg"/>
          <div className="Card-Textcontainer">
          <h4><b>Projecten</b></h4>
            <li>Game voor desktop/android</li>
            <li>Webshop applicatie</li>
            <li>Agenda app voor Android</li>
            <li>Zie voor code en meer informatie CV</li>
          </div>
        </div>

        <div className="Card">
          <img className="Card-img-small" src="https://d1o50x50snmhul.cloudfront.net/wp-content/uploads/2017/02/22180000/ff3ywn-1-800x533.jpg"/>
          <div className="Card-Textcontainer">
          <h4><b>Programmeertalen</b></h4>
            <li>C#</li>
            <li>Python</li>
            <li>HTML</li>
            <li>Javascript</li>
          </div>
        </div>

         <hr className="Splitter"/>
        {/* Werkervaring */}

        </div>

      
        );
    }
}

export default Home;