import React from "react";
import "./Calc.css";

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0
    };
  }
  static getDerivedStateFromProps(props, state){
    return {rate: props.rate};
  }

  calcRate = (e) => {
    e.preventDefault();
    let elements = e.target.elements;
    let countCurrency = elements['count-currency'].value;
    let typeCurrency = elements['type-currency'].value;
    this.setState({
      result: (countCurrency / this.state.rate[typeCurrency]).toFixed(2)
    })

  }

  render() {
    return (
      <div className="calculator">
        <h3> Exchange rate calculator</h3>
        <div className="calc__block block">
          <div>I want to purchase:</div>
          <div>
            <form onSubmit={this.calcRate}>
              <input type="number" defaultValue="150" name="count-currency" className="calc__input-count" />
              <select name="type-currency" id="" className="calc__select">
                {Object.keys(this.props.rate).map((keyName, i) => (
                  <option value={keyName} key={keyName}>
                    {keyName}
                  </option>
                ))}
              </select>
              <input type="submit" defaultValue="calc" className="calc__submit-btn" />
            </form>
          </div>
          <div className="calc-result">
            <h4>Result</h4>
            <ul className="calc-res">
              <li>EUR {this.state.result}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Calc;
