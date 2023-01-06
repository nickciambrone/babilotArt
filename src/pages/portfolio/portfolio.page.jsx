import React from "react";

import "./portfolio.styles.scss";
class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage:false
    };
  }
  render() {
    const category = window.location.pathname.substring(11, window.location.pathname.length)
    const images = {
      'graphic-design':[
      'sincerelysalena2.png ',
      'njbouncers4.png ',
      'cblandscaping3.png ',
      'cblandscaping2.png ',
      'sincerelysalena1.png ',
      'cblandscaping1.png ',
      'kushcake4.png ',
      'njbouncers2.png ',
      'tntfit1.png ',
      'kushcake1.png ',
      'njbouncers3.png ',
      'njbouncers1.png ',
      'kushcake3.png ',
      'allstarpowerwashing1.png ',
      'tntfit2.png ',
      'kushcake2.png ',
      'dulcecreations4.png ',
      'dulcecreations3.png ',
      'joellestar2.png ',
      'joellestar3.png ',
      'dulcecreations2.png ',
      'joellestar1.png ',
      'dulcecreations1.jpg ',
      'albumcover2.JPG ',
      'humanfitnetics3.png ',
      'humanfitnetics2.png ',
      'albumcover3.png ',
      'albumcover1.png ',
      'humanfitnetics1.png ',
      'danielle4.png ',
      'humanfitnetics4.png ',
      'danielle1.jpg ',
      'danielle3.png ',
      'danielle2.jpg ',
      'magicallymaid3.png ',
      'brightside1.png ',
      'magicallymaid2.png ',
      'craftsman1.jpg ',
      'craftsman3.jpg ',
      'brightside2.png ',
      'brightside3.png ',
      'magicallymaid1.png ',
      'craftsman2.png ',
      'bakedonthebeach2.png ',
      'craftsman6.png ',
      'bakedonthebeach3.png ',
      'bakedonthebeach1.png ',
      'craftsman5.png ',
      'brightside4.png ',
      'craftsman4.png ',
    ]}
    console.log(category)
    console.log(this.state.selectedImage)
    return (
      <div className="portfolio">
      
      <div  style={{display:'flex', flexWrap:'wrap'}}>
        {
          category in images ?
          !this.state.selectedImage ? images[category].filter(elem=>elem.includes('1')).map(ele=>(
          
         <div style={{padding:'3px'}}> <img src={"/images/"+ele} width='320px' style={{cursor:'pointer', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset', padding:'12px'}} onClick={()=>this.setState({selectedImage:ele.substring(0, ele.length-6)})}/></div>
        )):
        <div>
        <button
        onClick={()=> this.setState({selectedImage:false})}
        className='go-back'
      >
       Go Back
      </button>
        {images[category].filter(elem=>elem.includes(this.state.selectedImage)).map(ele=>(
          <img src={"/images/"+ele}  width='320px' style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset', padding:'12px'}}></img>

        ))}</div> :'Designs coming soon!'}
        </div>
      </div>
    );
  }
}

export default Portfolio;
