import React from "react";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div className="about-section">
        <p className="about-section__item block">
          In finance, an exchange rate is the rate at which one national
          currency will be exchanged for another. It is also regarded as the
          value of one country's currency in relation to another currency. For
          example, an interbank exchange rate of 114 Japanese yen to the United
          States dollar means that ¥114 will be exchanged for US$1 or that US$1
          will be exchanged for ¥114. In this case it is said that the price of
          a dollar in relation to yen is ¥114, or equivalently that the price of
          a yen in relation to dollars is $1/114.
        </p>
        <p className="about-section__item block">
          Each country determines the exchange rate regime that will apply to its currency. For example, a currency may be floating, pegged (fixed), or a hybrid. Governments can impose certain limits and controls on exchange rates. In floating exchange rate regimes, exchange rates are determined in the foreign exchange market, which is open to a wide range of different types of buyers and sellers, and where currency
          trading is continuous: 24 hours a day except weekends (i.e. trading from 20:15 GMT on Sunday until 22:00 GMT Friday). </p>
          
          <img className="about-section__item about-section__item_img" src="https://image.flaticon.com/icons/png/512/71/71123.png"/>
        
      </div>
    );
  }
}

export default About;
