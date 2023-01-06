import React from "react";

import "./portfolio.styles.scss";
class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage:false,
      description:''
    };
  }
  setProject = (ele) =>{
    this.setState({selectedImage:ele.img.substring(0, ele.img.length-6)})
    this.setState({description:ele.description})
    window.scrollTo(0, 0)

  }
  
  render() {
    const category = window.location.pathname.substring(11, window.location.pathname.length)
   
    const images = {
      'graphic-design':[
      {img:'sincerelysalena2.png '},
      {img:'njbouncers4.png '},
      {img:'cblandscaping3.png '},
      {img:'cblandscaping2.png '},
      {img:'sincerelysalena1.png ',
    title:'Sincerely Salena',
  description:`My client Salena is a freelance creative writer and journalist who needed to spice
  up her website where she posts her work and various newsletters. This included
  a logo and header for her page.
  The vibe was to keep these designs as effortless and doodle-esque as possible,
  while still portraying all the little things that make Salena herself.`},
      {img:'cblandscaping1.png ',
    title:'CB Landscaping',
  description:`I present to you, the new and improved company logo for Craig Babilot
  Landscaping, LLC!
  It's an honor to be able to help create the new face of my father's landscaping
  business just in time for the spring season. We decided we wanted this logo to
  be simple, original, and organic. The colors in this logo are neutral, yet vibrant
  enough to catch anyone's eye.
  My take on this logo is that I wanted to show how excellence in outdoor
  maintenance is "rooted" within CB Landscaping (literally). My father takes
  tremendous pride in his company and I could not be happier to work alongside
  him for this project and help bring his vision to life!`},
      {img:'kushcake4.png '},
      {img:'njbouncers2.png '},
      {img:'tntfit1.png ',
    title:'TNT Fitness',
  description:`I had the honor of revamping T.N.T. Fitness’ new logo. T.N.T. Fitness is a newly
  founded fitness/clothing company that plans on creating work out apparel to fit
  your needs.
  I have a knack for paying close attention to the small details when it comes to
  creating logos. Therefore, I had such a blast sprucing up the original sketch for
  this design and cannot wait to do more work for the company!`},
      {img:'kushcake1.png ',
      title:'Kush Cake',
    description:`Kush Cake is a company launching in April 2022 that will be selling smoking
    products, accessories, and apparel.
    My clients knew they wanted a cupcake with bright, trippy, lackadaisical
    characteristics done in my personal drawing style. Being able to create a design
    from scratch in my style was such a treat (literally)!
    When I think of a cupcake, I think of vibrant, tasteful colors coming to life.
    Although there is a wide variety of colors in this palette, I feel that the colors
    blend together and counteract beautifully.
    The use of the cupcake's bloodshot eyes, mushroom tainted body, and relaxed
    look implies the overall feeling and mood that Kush Cake promotes and stands
    for.`},
      {img:'njbouncers3.png '},
      {img:'njbouncers1.png ',
    title:'The NJ Bouncers',
    description: `Very proud that I’ve had the honor of creating The NJ Bouncers new logo for their
    bouncy house and party business!
    My clients wanted a brilliant, bubbly design with a plethora of colors that shows
    every ounce of fun that they can bring to your backyard celebration. I had so
    much fun creating multiple variations for such a bright and festive concept and
    cannot wait to see my work on their business cards, social media, apparel, etc.`
  },
      {img:'kushcake3.png '},
      {img:'allstarpowerwashing1.png ',
    title:'All Star Power Washing',
  description:`I've recently had the opportunity to create a brand new logo for the new company
  All Star Pressure Washing!
  My clients wanted to stick with a cool and blue tone water theme, animated
  portraits of themselves, and to incorporate a bold star within the design as well.
  There are so many components to this design that make it the masterpiece that it
  is, and I couldn’t be happier to help.`},
      {img:'tntfit2.png '},
      {img:'kushcake2.png '},
      {img:'dulcecreations4.png '},
      {img:'dulcecreations3.png '},
      {img:'joellestar2.png '},
      {img:'joellestar3.png '},
      {img:'dulcecreations2.png '},
      {img:'joellestar1.png ',
    title:'Joelle Star',
    description:`Joelle Star Media reached out in hopes of creating a bold and astrological
    inspired set of business cards for her new company.
    My client wanted vertical business cards inspired by the embodiment of a
    mystical tarot card. She wished to incorporate feminine figures, Sagittarius
    symbols, and lots and lots of stars (of course).
    The design remains simple, sleek and sharp due to the monochromatic color
    scheme and overall cutting edge design.`},
      {img:'dulcecreations1.jpg ',
    title:'Dulce Creations',
  description:`Dulce Creations is a mother/daughter duo baking company where they can make
  beautiful and tasty sweet treats for virtually any occasion.
  My clients wanted a huge emphasis of warm colors and a double tier cake,
  showing off what they can do best. However, my clients are not limited to just
  cakes. Therefore, we chose to incorporate an adorable little cupcake in the front
  of the logo as well.`},
      {img:'albumcover2.JPG '},
      {img:'humanfitnetics3.png '},
      {img:'humanfitnetics2.png '},
      {img:'albumcover3.png '},
      {img:'albumcover1.png ',
    title:'Album Cover Designs',
  description:`There is truly nothing more thrilling than being asked to create an album cover for
  a band with the potential of thousands and thousands of people seeing your
  work.
  For every album cover design I’ve ever done, I tend to study the lyrics of their
  songs, develop an overall feel for what the cover should convey, and work my
  way up from there with several talented artists.`},
      {img:'humanfitnetics1.png ',
      title:'Human Finetics',
      description:`My client Becca is an exercise physiologist who promotes human movement,
      health and exercise through her company. She wanted a vibrant, playful yet
      meaningful design that portrays the act of working out as well as her place in the
      medical field.
      The incorporation of snakes in this logo represent The Staff of Hermes whilst
      draped across a kettlebell. In Becca’s own words, she wanted a design to show
      "where healthcare meets exercise".
      My client also wanted a larger and smaller logo for different functions (apparel,
      business cards, etc.) so that is exactly what she got!`},
      {img:'danielle4.png '},
      {img:'humanfitnetics4.png '},
      {img:'danielle1.jpg ',
    title:'Danielle Contolonio',
  description:`I had the opportunity to design a merchandise/apparel logo for influencer, Dani
  Colontino. Dani's fame picked up rapidly on TikTok, as she is known for her loud
  voice, hilarious rants and booming personality.
  She has so much character, so I wanted to portray that in the best way I can while
  still making the logo simple. I presented the idea of having a lady's mouth wide
  open with glossy lipstick, yelling some of Dani's infamous quotes from her rants.
  She loved it!
  What I like most about this design is the simplicity as well as the connection to
  her brand. The design is easy to swap colors in and out of, making it a versatile
  piece to put on apparel, business cards, etc.`},
      {img:'danielle3.png '},
      {img:'danielle2.jpg '},
      {img:'magicallymaid3.png '},
      {img:'brightside1.png ',
    title:'The Brightside',
    description:`The Bright Side Hypnotherapy and Meditation Center came to me to design their
    very first logo for their company.
    My clients wanted something simple, light, yet vibrant and positive-feeling.
    People go to therapy for a plethora of different reasons, of course. Yet, this logo
    was made to represent that there are sunnier moments ahead for everyone, as
    well as how this company will help you "bloom" into the person you wish to
    become.
    This new logo will be the face of Kelly's company, as well as apparel, business
    cards, website, etc.`},
      {img:'magicallymaid2.png '},
      {img:'craftsman1.jpg ',
    title:'Cratsman Posters',
  description:`Over the course of Fall 2021, I had the honor of creating multiple holiday events
  and special posters for The Craftsman located in Fairlawn, NJ.
  This American gastro-pub has a very warm, cozy and raw feel when you’re
  wrapped up in its delicious food and surroundings. My goal was to create flyers,
  menus, and even informational pamphlets with this type of warmth and genuine
  feeling.`},
      {img:'craftsman3.jpg '},
      {img:'brightside2.png '},
      {img:'brightside3.png '},
      {img:'magicallymaid1.png ',
    title:'Magically Maid',
  description:`This art nouveau inspired nautical design for Magically Maid was quite a
  challenge, but such a rewarding experience. Out of the many reasons why I
  enjoyed creating this piece, I thought the best thing about it was the tattoo
  inspired look this logo holds.
  My client needed a cohesive design as well as a matching smaller logo to put on
  the pocket front of her apparel. After several revisions, we finally created exactly
  what she saw in her vision.
  After several drafts and revamping their logo to what it is now, this design is
  ready to be printed on apparel, business cards, etc.`},
      {img:'craftsman2.png '},
      {img:'bakedonthebeach2.png '},
      {img:'craftsman6.png '},
      {img:'bakedonthebeach3.png '},
      {img:'bakedonthebeach1.png ',
    title:'Baked on the Beach',
  description:`Very excited to share that I had the opportunity to design a new store front sign
  for Baked on the Beach, a family owned business based in Long Beach Island,
  NJ.
  Baked on the Beach makes all of their delicious goodies from scratch, and with
  lots of love of course. My client wanted something fresh, vibrant, and tropical to
  show off in front of their new and second location in Beach Haven, NJ. So that is
  exactly what I accomplished for them!`},
      {img:'craftsman5.png '},
      {img:'brightside4.png '},
      {img:'craftsman4.png '},
    ]}
    console.log(category)
    console.log(this.state.selectedImage)
    return (
      <div className="portfolio">
      
      <div  style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>
        {
          category in images ?
          !this.state.selectedImage ? images[category].filter(elem=>elem.img.includes('1')).map(ele=>(
          
         <div style={{ display:'flex', flexDirection:'column'}}> 
         <span>{ele.title}</span>
         <img style={{cursor:'pointer', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset', padding:'12px'}} src={"/images/"+ele.img} width='320px' onClick={()=>this.setProject(ele )}/></div>
        )):
        <div>
        <button
        onClick={()=> this.setState({selectedImage:false})}
        className='go-back'
      >
       Go Back
      </button>
      <br/>
      <br/>

      <div style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', padding:'12px'}}>{this.state.description}</div> <br/>

      <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>

        {images[category].filter(elem=>elem.img.includes(this.state.selectedImage)).map(ele=>(
          <div >
          <img style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset', padding:'12px'}} src={"/images/"+ele.img}  width='320px' />
          </div>
        ))}


        </div>

        </div> :'Designs coming soon!'}
        </div>
      </div>
    );
  }
}

export default Portfolio;
