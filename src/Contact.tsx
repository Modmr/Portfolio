import * as React from 'react';
import './App.css';



class Contact extends React.Component{

    

    public render(){
        return (
            
        <div>
        
        <hr className="Splitter"/>

        <div className="Card">
        <img src="http://www.nieuws.social/strategie_nieuws/wp-content/uploadsnieuwssocial/2018/06/eult-42.jpg" className="Card-img-small" />        
          <div className="Card-Textcontainer">
          <h4><b>Github</b></h4>
            <li>ss</li>
            
          </div>
        </div>

        <div className="Card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1024px-LinkedIn_Logo.svg.png" className="Card-img-small" />        
          <div className="Card-Textcontainer">
          <h4><b>LinkedIn</b></h4>
            <li>s</li>
            
          </div>
        </div>

        <div className="Card">
        <img src="https://techcrunch.com/wp-content/uploads/2017/10/gmail-grid.png?w=730&crop=1" className="Card-img-small" />        
          <div className="Card-Textcontainer">
          <h4><b>E-mail</b></h4>
            <li>s</li>
          </div>
        </div>
        

        </div>
        

      
        );
    }
}

export default Contact;