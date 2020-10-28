import React, { Component } from "react";
import axios from "axios";

export default class Country extends Component {
  constructor() {
    super();
    this.state = {
      arr: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((posRes) => {
        this.setState({
          arr: posRes.data,
        });
      })
      .catch((errRes) => {
        console.log(errRes);
      });
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>SNO</th>
              <th>Name</th>
              <th>Capital</th>
              <th>Native Name</th>
              <th>Population</th>
              <th>Flag</th>
            </tr>
          </thead>
        </table>
        <tbody>
          {this.state.arr.map((element, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{element.name}</td>
              <td>{element.capital}</td>
              <td>{element.nativeName}</td>
              <td> {element.population}</td>
              <td>
                <img src={element.flag} alt="" width="100px" height="50px" />
              </td>
            </tr>
          ))}
        </tbody>
      </div>
    );
  }
}
