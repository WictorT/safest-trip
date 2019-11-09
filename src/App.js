import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      distance: 0,
      lastSubmittedDistance: 0,
      showResults: false,
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
    this.handleSubmitDistance = this.handleSubmitDistance.bind(this);
    this.updateResults = this.updateResults.bind(this);
  }

  handleUpdateDistance(event) {
    this.setState({distance: event.target.value});
  }

  handleSubmitDistance() {
    if (this.state.distance < 1) {
      return
    }
    this.updateResults(this.state.distance);
    this.setState({
      showResults: true,
      lastSubmittedDistance: this.state.distance
    });
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
        <header> Choose the safest transportation method for your dream trip </header>
        <br/>
        <form action={'#'}>
          <label><strong> What is the distance you want to travel? </strong></label><br/>
          <input type={"number"} min={1} value={this.state.distance} onChange={this.handleUpdateDistance}/> km<br/> <br/>
          <button type={"submit"} onClick={this.handleSubmitDistance}> Calculate </button> <br/> <br/>
        </form>

        {this.state.showResults &&
        <div>
          <p>
            The safest transportation method for your <strong>{this.state.lastSubmittedDistance}km</strong> trip would be the <strong className={"green"}>{this.state.results[0].type}</strong>. <br/>
            It is {(this.state.results[1].risk / this.state.results[0].risk).toFixed(2)} times safer than the <strong className={"yellow"}>{this.state.results[1].type}</strong>, <br/>
            and {(this.state.results[2].risk / this.state.results[0].risk).toFixed(2)} times safer than the <strong className={"yellow"}>{this.state.results[2].type}</strong>. <br/>
          While the <strong className={"red"}>{this.state.results[3].type}</strong> is the most dangerous transportation for this trip, making it {(this.state.results[3].risk / this.state.results[0].risk).toFixed(2)} times more dangerous than the <strong className={"green"}>{this.state.results[0].type}</strong>.
          </p>

          <table align={"center"} border={'1px'}>
              <tr>
                <th>Type</th>
                <th> Probability of a fatal crash </th>
                {
                  this.state.results.map((result) => {
                    return (
                      <th> Safer than {result.type} by  </th>
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
        </div>
        }


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
