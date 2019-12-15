import React from 'react';
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
    this.handleSubmitDistanceOnEnter = this.handleSubmitDistanceOnEnter.bind(this);
    this.handleSubmitDistance = this.handleSubmitDistance.bind(this);
    this.updateResults = this.updateResults.bind(this);
  }

  handleUpdateDistance(event) {
    this.setState({distance: event.target.value});
  }

  handleSubmitDistanceOnEnter(e) {
    if (e.key === 'Enter') {
      this.handleSubmitDistance();
    }
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

        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <a className="navbar-brand" href="#">SafestTrip</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                  aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blog</a>
              </li>
            </ul>
          </div>
        </nav>

        <main role="main" className="container content">
          <h1> The safest transportation method for your dream trip</h1>
          <p className="lead"> What is the distance you want to travel? </p>

          <div className="input-group p-2">
            <input type="number" className="form-control" min={1} onChange={this.handleUpdateDistance}
                   onKeyDown={this.handleSubmitDistanceOnEnter}/>
            <div className="input-group-append">
              <span className="input-group-text">km</span>
            </div>
          </div>
          <button type={"button"} className="btn btn-primary p-2" onClick={this.handleSubmitDistance}>Calculate</button>

          {
            // this.state.showResults &&
            <div className={this.state.showResults ? 'fadeIn' : 'fadeOut'}>
              <div className={"results"} ref="Results">
                <p>
                  The safest transportation method for your <strong>{this.state.lastSubmittedDistance}km</strong> trip
                  would be the <strong className={"green"}>{this.state.results[0].type}</strong>. <br/>
                  It is {(this.state.results[1].risk / this.state.results[0].risk).toFixed(2)} times safer than
                  the <strong className={"yellow"}>{this.state.results[1].type}</strong>, <br/>
                  and {(this.state.results[2].risk / this.state.results[0].risk).toFixed(2)} times safer than
                  the <strong
                  className={"yellow"}>{this.state.results[2].type}</strong>. <br/>
                  While the <strong className={"red"}>{this.state.results[3].type}</strong> is the most dangerous
                  transportation for this trip, making
                  it {(this.state.results[3].risk / this.state.results[0].risk).toFixed(2)} times more dangerous than
                  the <strong className={"green"}>{this.state.results[0].type}</strong>.
                </p>

                <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample"
                        aria-expanded="false" aria-controls="collapseExample">
                  Advanced
                </button>
                <div className="collapse" id="collapseExample">
                  <table className={"table"}>
                    <tr>
                      <th>Transport</th>
                      <th> Probability of a fatal crash</th>
                    </tr>

                    {
                      this.state.results.map((result, key, results) => {
                        return (
                          <tr>
                            <td>{result.type}</td>
                            <td>{result.risk}% {key ? <strong className={"red"}> {(result.risk / results[key - 1].risk).toFixed(2)} times worse</strong> : ""} </td>
                          </tr>
                        )
                      })
                    }
                  </table>
                </div>
              </div>
            </div>
          }
        </main>
      </div>
    );
  }
}

export default App;
