// import React from 'react';
// import './gallery.css';
// import logo from '../../assets/img/gallery/1.jpg';

// import GalleryImage from './GalleryImage';


// function Gallery() {
//   return (
//     <div className="Gallery">

    
//       <div class="container">
//         <h2 style={{textAlign:"center",color:"gray"}}>GALLERY</h2>
//         <div id="myCarousel" class="carousel " data-ride="carousel">
          
//           <ol class="carousel-indicators">
//             <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
//             <li data-target="#myCarousel" data-slide-to="1"></li>
//             {/* <li data-target="#myCarousel" data-slide-to="2"></li>
//             <li data-target="#myCarousel" data-slide-to="3"></li> */}
//           </ol>

          
//           <div class="carousel-inner"  role="listbox"  style={{alignContent:"center"}}>
            
//             <div class="item active">
//               <GalleryImage/>
//             </div>

//             <div class="item">
//                 <GalleryImage/>

//             </div>
          
//             {/* <div class="item">
//               <img src={logo} alt="logo" width="460" height="100"/>
//             </div>

//             <div class="item">
//               <img src={logo} alt="logo" width="460" height="100"/>
//             </div> */}
//           </div> 

        
//           <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
//             <span class="icon-prev" aria-hidden="true"></span>
//             <span class="sr-only">Previous</span>
        
//           </a>
//           <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
//             <span class="icon-next" aria-hidden="true"></span>
//             <span class="sr-only">Next</span>
//           </a>

//         </div>
//       </div>
// </div>

    

//   );
// }

// export default Gallery;

import React from 'react'
import GalleryImg from "react-photo-gallery";
import { photos } from "./photos";
import './gallery.css'

function Gallery() {

  return(
    <section id='gallery'>
      <p className='header'>Gallery</p>
      <GalleryImg photos={photos}/>

    </section>
    
  )

  // return (
  //   <section id='gallery'>
  //     <div className='images-in-row'>
  //       <div className='img1'>
  //         <img src={i1} alt='pic' /> 
  //       </div>
  //       <div className='img2'>
  //         <img src={i2} alt='pic' /> 
  //       </div>
  //       <div className='img2'>
  //         <img src={i3} alt='pic' /> 
  //       </div>
  //       <div className='img2'>
  //         <img src={i4} alt='pic' /> 
  //       </div>
  //       <div className='img2'>
  //         <img src={i5} alt='pic' /> 
  //       </div>
  //       <div className='img3'>
  //         <img src={i6} alt='pic' /> 
  //       </div>
  //       <div className='img3'>
  //         <img src={i7} alt='pic' /> 
  //       </div>
  //       <div className='img4'>
  //         <img src={i8} alt='pic' /> 
  //       </div>
        
        
  //     </div>
  //   </section>
    
  // )
}

export default Gallery

//TUTORIAL
// import React, { useState, useCallback } from "react";
// import { render } from "react-dom";
// import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";
// import { photos } from "./photos";

// function App() {
//   const [currentImage, setCurrentImage] = useState(0);
//   const [viewerIsOpen, setViewerIsOpen] = useState(false);

//   const openLightbox = useCallback((event, { photo, index }) => {
//     setCurrentImage(index);
//     setViewerIsOpen(true);
//   }, []);

//   const closeLightbox = () => {
//     setCurrentImage(0);
//     setViewerIsOpen(false);
//   };

//   return (
//     <div>
//       <Gallery photos={photos} onClick={openLightbox} />
//       {/* <ModalGateway>
//         {viewerIsOpen ? (
//           <Modal onClose={closeLightbox}>
//             <Carousel
//               currentIndex={currentImage}
//               views={photos.map(x => ({
//                 ...x,
//                 srcset: x.srcSet,
//                 caption: x.title
//               }))}
//             />
//           </Modal>
//         ) : null}
//       </ModalGateway> */}
//     </div>
//   );
// }
// render(<App />, document.getElementById("app"));
