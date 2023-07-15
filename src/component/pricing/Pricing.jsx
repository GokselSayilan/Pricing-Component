import React, { useEffect, useState } from "react";
import "./pricing.css";

function Pricing() {

  const [isMonthly,setIsMonthly] = useState(true)
  const [price1,setPrice1] = useState('')
  const [price2,setPrice2] = useState('')
  const [price3,setPrice3] = useState('')
  const [toggleStyle,setToggleStyle] = useState('membershipCircleRight')

  useEffect(() => {
    if(toggleStyle==='membershipCircleRight') {
      setPrice1('19.99')
      setPrice2('24.99')
      setPrice3('39.99')
    } else {
      setPrice1('199.99')
      setPrice2('249.99')
      setPrice3('399.99')
    }
  },[toggleStyle])

  return (
    <div className="pricing">
      <img src="assets/images/bg-bottom.svg" className="bottomBg" />
      <img src="assets/images/bg-top.svg" className="topBg" />
      <div className="pricingWrapper">
        <h1 className="pricingWrapperTitle">Our Pricing</h1>
        <div className="membershipPeriod">
          <p className="membershipTitle">Annually</p>
          <div className="membershipToggle" onClick={() => setToggleStyle(toggleStyle==='membershipCircleRight' ?'membershipCircleLeft':'membershipCircleRight')
            
          }>
            <div className={toggleStyle}></div>
          </div>
          <p className="membershipTitle">Monthly</p>
        </div>
        <div className="pricingCards">
          <div className="pricingCard">
            <p className="pricingCardText">Basic</p>
            <p className="pricingCardText pricingCardPrice"><span className="usd">$</span> {price1}</p>
            <hr className="pricingCardsSep" />
            <p className="pricingCardText">500 GB Storage</p>
            <hr className="pricingCardsSep" />
            <p className="pricingCardText">2 Users Allowed</p>
            <hr className="pricingCardsSep" />
            <p className="pricingCardText">Send up to 3 GB</p>
            <hr className="pricingCardsSep" />
            <button className="pricingCardButton">LEARN MORE</button>
          </div>
          <div className="pricingCard pricingCardMain">
            <p className="pricingCardText">Professional</p>
            <p className="pricingCardText pricingCardPrice pricingMainCardPrice"><span className="usd">$</span> {price2}</p>
            <hr className="pricingCardsSep" />
            <p className="pricingCardText">1 TB Storage</p>
            <hr className="pricingCardsSep" />
            <p className="pricingCardText">5 Users Allowed</p>
            <hr className="pricingCardsSep" />
            <p className="pricingCardText">Send up to 10 GB</p>
            <hr className="pricingCardsSep" />
            <button className="pricingCardButton pricingMainCardButton">LEARN MORE</button>
          </div>
          <div className="pricingCard">
            <p className="pricingCardText">Master</p>
            <p className="pricingCardText pricingCardPrice"><span className="usd">$</span> {price3}</p>
            <hr className="pricingCardsSep" />
            <p className="pricingCardText">2 TB Storage</p>
            <hr className="pricingCardsSep" />
            <p className="pricingCardText">10 Users Allowed</p>
            <hr className="pricingCardsSep" />
            <p className="pricingCardText">Send up to 20 GB</p>
            <hr className="pricingCardsSep" />
            <button className="pricingCardButton">LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
