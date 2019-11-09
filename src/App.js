import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      distance: 1000,
      results: [
        {
          type: 'Car',
          distanceQuotient: 3.1,
          timeQuotient: 130,
          averageSpeed: 90,
          journeyRisk: 4.3 / 1e+9,
          risk: 0
        },
        {
          type: 'Airplane',
          distanceQuotient: 0.05,
          timeQuotient: 30.8,
          averageSpeed: 500,
          journeyRisk: 117 / 1e+9,
          risk: 0
        },
        {
          type: 'Bus',
          distanceQuotient: 0.4,
          timeQuotient: 11.1,
          averageSpeed: 70,
          journeyRisk: 4.3 / 1e+9,
          risk: 0
        },
        {
          type: 'Train',
          distanceQuotient: 0.6,
          timeQuotient: 30,
          averageSpeed: 60,
          journeyRisk: 20 / 1e+9,
          risk: 0
        }
      ]
    };

    this.handleUpdateDistance = this.handleUpdateDistance.bind(this);
    this.updateResults = this.updateResults.bind(this);

    this.updateResults(this.state.distance);
  }

  handleUpdateDistance(event) {
    this.setState({distance: event.target.value});
    this.updateResults(event.target.value);
  }

  updateResults(distance) {
    let results = this.state.results;

    results.forEach((result) => {
      result.risk =
        ((result.distanceQuotient * distance / 1e+9)
        + (result.timeQuotient * (distance / result.averageSpeed) / 1e+9)
        + result.journeyRisk).toFixed(9);
    });

    results = results.sort((a, b) => {
      return a.risk - b.risk
    });

    this.setState({results: results});
  }

  render() {
    return (
      <div className="App">
        <header> Chance of dying in an accident ordered from safest to most dangerous</header>
        <br/>
        <label> Distance: </label>
        <input type={"number"} value={this.state.distance} onChange={this.handleUpdateDistance}/> km<br/>

        <table border={'1px'}>
          <tr>
            <th>Type</th>
            <th>Probability</th>
            {
              this.state.results.map((result) => {
                return (
                  <th> Safer than {result.type}</th>
                )
              })
            }
          </tr>

          {
            this.state.results.map((result) => {
              return (
                <tr>
                  <td>{result.type}</td>
                  <td>{result.risk}%</td>

                  {
                    this.state.results.map((comparedResult) => {
                      if (comparedResult === result) {
                        return (<td>X</td>)
                      } else {
                        return (
                          <td> {(comparedResult.risk / result.risk).toFixed(2)} times </td>
                        )
                      }
                    })
                  }
                </tr>
              )
            })
          }
        </table>


        {/*<div className={'container'}>*/}
        {/*  {*/}
        {/*    this.state.results.map((result) => {*/}
        {/*      return (*/}
        {/*        <div className={'row'}>*/}
        {/*          <div className={'col'}>{result.type}</div>*/}
        {/*          <div className={'col'}>{result.risk}%</div>*/}
        {/*        </div>*/}
        {/*      )*/}
        {/*    })*/}
        {/*  }*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default App;
