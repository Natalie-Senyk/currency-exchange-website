import React from "react";
import Calc from "../Calc/Calc";
import "./Rate.css";

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      currencyRate: {},
    };
    this.currency = ["USD", "RUB", "UAH", "PLN", "CAD", "PHP"];
    this.getRate();
  }

  getRate = () => {
    fetch(
      "http://api.exchangeratesapi.io/v1/latest?access_key=703324134eeb8b5c352b6344cf5b6d28"
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.setState({ date: data.date });
        let result = {};
        for (let i = 0; i < this.currency.length; i++) {
          result[this.currency[i]] = data.rates[this.currency[i]];
        }

        this.setState({ currencyRate: result });
      });
  };

  render() {
    return (
      <div className="rate">
        <h3> Currency exchange rate for {this.state.date}</h3>
        <div className="flex-container">
          {Object.keys(this.state.currencyRate).map((keyName, i) => (
            <div className="block flex-item" key={keyName}>
              <div className="currency-name">{keyName}</div>
              <div className="currency-in">
                {this.state.currencyRate[keyName].toFixed(2)}*
              </div>
              <p>* You can purchase for 1 EUR </p>
            </div>
          ))}
        </div>
        <Calc rate={this.state.currencyRate} />
      </div>
    );
  }
}

export default Rate;
