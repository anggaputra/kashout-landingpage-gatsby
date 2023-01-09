import React, { Component } from "react";
import Slider from "react-slick";

import brand from "../../assets/image/home-4/company-logo/dark-logo-1.png";
import brandLight from "../../assets/image/home-4/company-logo/dark-logo-1.png";
import brand2 from "../../assets/image/home-4/company-logo/dark-logo-2.png";
import brandLight2 from "../../assets/image/home-4/company-logo/dark-logo-2.png";
import brand3 from "../../assets/image/home-4/company-logo/dark-logo-3.png";
import brandLight3 from "../../assets/image/home-4/company-logo/dark-logo-3.png";
import brand4 from "../../assets/image/home-4/company-logo/dark-logo-4.png";
import brandLight4 from "../../assets/image/home-4/company-logo/dark-logo-4.png";
import brand5 from "../../assets/image/home-4/company-logo/dark-logo-5.png";
import brandLight5 from "../../assets/image/home-4/company-logo/dark-logo-5.png";


import userImage1 from "../../assets/image/home-4/png/review-meta-img.png";
import userImage2 from "../../assets/image/home-4/png/review-meta-img-2.png";
import userImage3 from "../../assets/image/home-4/png/review-meta-img-3.png";
const sliderNavigationData = [
  {
    darkLogo: brand,
    lightLogo: brandLight,
  },
  {
    darkLogo: brand2,
    lightLogo: brandLight2,
  },
  {
    darkLogo: brand3,
    lightLogo: brandLight3,
  },
  {
    darkLogo: brand4,
    lightLogo: brandLight4,
  },
  {
    darkLogo: brand5,
    lightLogo: brandLight5,
  },
];

const mainSliderData = [
  {
    text:
      "“Lebih sustainable dan win-win solution untuk customer dan merchant.”",
    image: userImage1,
    name: "Anggi",
    position: "Merchant",
  },
  {
    text:
      "“Kami bisa meraih lebih banyak ragam pangsa pasar”",
    image: userImage2,
    name: "Tanjim Brew",
    position: "Merchant",
  }
];


 class Testimonial extends Component {
   constructor(props) {
       super()
     this.state = {
       nav1: null,
       nav2: null,
     };
   }

   componentDidMount() {
     this.setState({
       nav1: this.slider1,
       nav2: this.slider2,
     });
   }

   render() {
     return (
       <div className="bg-default-4 pt-10 pt-lg-22 pb-11 pb-lg-23 border-top border-default-color" >
         <div className="container">
           <div className="row justify-content-center">
             <div className="col-xl-7 col-lg-9 col-md-11">
               <Slider
                 asNavFor={this.state.nav2}
                 ref={(slider) => (this.slider1 = slider)}
                 arrows={false}
                 className="l4-review-slider mt-13 mt-lg-21 mx-xl-0 mx-lg-10 mx-md-8"
                 fade={true}
               >
                 {mainSliderData.map(({text,image,name,position},index) => {
                     return (
                       <React.Fragment key={`${index.toString()}-m`}>
                         {/* Single Review */}
                         <div className="single-review text-center focus-reset">
                           <p className="font-size-9 font-weight-bold heading-default-color">
                             {text}
                           </p>
                           <div className="mt-13">
                             <div className="mb-8 circle-100 mx-auto overflow-hidden">
                               <img src={image} alt="" className="w-100"/>
                             </div>
                             <h5 className="font-size-6 mb-0">{name}</h5>
                             <p className="font-size-5">{position}</p>
                           </div>
                         </div>
                         {/* End Single Review */}
                       </React.Fragment>
                     );
                 })}
                 
               </Slider>
             </div>
           </div>
         </div>
       </div>
     );
   }
 }


export default Testimonial;