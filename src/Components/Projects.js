import React, { Component } from "react";
import { Tab } from "react-mdl";
import { Tabs } from "react-mdl";
import { Grid, Cell } from "react-mdl";
import Header from "./Header";
import Media from "./Projects/ProjectProp";
class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div  className="row" >
          {/* React Calcu;lator */}
          <Media
            background="ReactCalculator"
            Description="Basic React Calculator."
            Live="https://m-cal-rhema.herokuapp.com/"
            Github="https://github.com/Iamrhema/React-Calculator"
          />
          {/* React Snake Game */}
          <Media
            background="Game"
            Description="Snake Game with no other Libraries."
            Live="https://rhema-snakegame.herokuapp.com/"
            Github=" https://github.com/Iamrhema/React-Snake-Game"
          />
          {/* weather app */}
          <Media
            background="WeatherApp"
            Description="Weather app that gives live data."
            Live="https://client.rhemaexel7.now.sh/"
            Github="https://github.com/Iamrhema/Weather-app"
          />
          {/* First website */}
          <Media
            background="FirstProject"
            Description="First simple website."
            Live="https://iamrhema.github.io/First-Webpage/"
            Github="https://github.com/Iamrhema/First-Webpage"
          />
          {/* online static store */}
          <Media
            background="StaticWeb"
            Description="Static E-commerece Site"
            Live="https://iamrhema.github.io/Static-Ecommerce-/"
            Github="https://github.com/Iamrhema/Static-Ecommerce"
          />
          {/* E-commerece store */}
          <Media
            background="Store"
            Description="Semi Interactive Online store, with pop-up when add item to cart."
            Live="https://iamrhema.github.io/sneaker-X-change/"
            Github="https://github.com/Iamrhema/sneaker-X-change"
          />
          {/* Calaculator */}
          <Media
            background="Calculator"
            Description="Javascript Calculator and Converter built in Javascript with Jquery and Javascript. "
            Live="https://iamrhema.github.io/JavaScript-App/"
            Github="https://github.com/Iamrhema/JavaScript-App"
          />
          {/* holiday calculator*/}
          <Media
            Name="Holiday calculator"
            background="backend"
            Description="Simple Project that calculates the cost of going for holiday in Port Elizabeth or Johannesburg"
            Live="https://repl.it/@RhemaExel/Holiday-calculator"
            Github="https://github.com/Iamrhema/Projects/blob/master/Python/holiday.py"
          />
          {/* Shipment Calculator */}
          <Media
            Name="Shipment Calculator"
            background="backend"
            Description="This is a simple shipment calculator that calculates  how much shipping cost for a user buying or sending a parcel abroad."
            Live="https://repl.it/@RhemaExel/Shipment-Calculator"
            Github="https://github.com/Iamrhema/Projects/blob/master/Python/Shipment%20Calculator.py"
          />
          {/* Salary Calculator */}
          <Media
            Name="Salary Calculator"
            background="backend"
            Description="This a Salary Checker which calculates your Salary and compares it for you."
            Live="https://repl.it/@RhemaExel/Salary-Checker"
            Github="https://github.com/Iamrhema/Projects/blob/master/Python/Salary%20checker.py"
          />
          {/* Password Validator */}
          <Media
            Name="Password Validator"
            background="backend"
            Description="This code checks for the password if it's reliable to use e.g  if it contains uppercase letters and numbers."
            Live="https://repl.it/@RhemaExel/Password-checker"
            Github="https://github.com/Iamrhema/Projects/blob/master/Python/Password.py"
          />
          {/* Binary Converter */}
          <Media
            Name="Binary Converter"
            background="backend"
            Description="This program converts binary to integers"
            Live="https://repl.it/@RhemaExel/Binary"
            Github="https://github.com/Iamrhema/Projects/blob/master/Python/Binary.py"
          />
        </div>
      );
    }
    // React Tab content
    else if (this.state.activeTab === 1) {
      return (
        <div className="row">
          <Media
            background="ReactCalculator"
            Description="Basic React Calculator."
            Live="https://m-cal-rhema.herokuapp.com/"
            Github="https://github.com/Iamrhema/React-Calculator"
          />
          <Media
            background="Game"
            Description="Snake Game with no other Libraries."
            Live="https://rhema-snakegame.herokuapp.com/"
            Github=" https://github.com/Iamrhema/React-Snake-Game"
          />
          <Media
            background="WeatherApp"
            Description="Weather app that gives live data."
            Live="https://client.rhemaexel7.now.sh/"
            Github="https://github.com/Iamrhema/Weather-app"
          />
        </div>
      );
    }
    // Html Tab content
    else if (this.state.activeTab === 2) {
      return (
        <div  className="row">
          {/* First website */}
          <Media
            background="FirstProject"
            Description="First simple website."
            Live="https://iamrhema.github.io/First-Webpage/"
            Github="https://github.com/Iamrhema/First-Webpage"
          />
          {/* online static store */}
          <Media
            background="StaticWeb"
            Description="Static E-commerece Site"
            Live="https://iamrhema.github.io/Static-Ecommerce-/"
            Github="https://github.com/Iamrhema/Static-Ecommerce"
          />
        </div>
      );
    }
    // Javascript tab content
    else if (this.state.activeTab === 3) {
      return (
        <div  className="row">
          {/* E-commerece store */}
          <Media
            background="Store"
            Description="Semi Interactive Online store, with pop-up when add item to cart."
            Live="https://iamrhema.github.io/sneaker-X-change/"
            Github="https://github.com/Iamrhema/sneaker-X-change"
          />
          {/* Calaculator */}
          <Media
            background="Calculator"
            Description="Javascript Calculator and Converter built in Javascript with Jquery and Javascript. "
            Live="https://iamrhema.github.io/JavaScript-App/"
            Github="https://github.com/Iamrhema/JavaScript-App"
          />
        </div>
      );
    }
    // Python tab content
    else if (this.state.activeTab === 4) {
      return (
        <div  className="row">
          {/* holiday calculator*/}
          <Media
            Name="Holiday calculator"
            background="backend"
            Description="Simple Project that calculates the cost of going for holiday in Port Elizabeth or Johannesburg"
            Live="https://repl.it/@RhemaExel/Holiday-calculator"
            Github="https://github.com/Iamrhema/Projects/blob/master/Python/holiday.py"
          />
          {/* Shipment Calculator */}
          <Media
            Name="Shipment Calculator"
            background="backend"
            Description="This is a simple shipment calculator that calculates  how much shipping cost for a user buying or sending a parcel abroad."
            Live="https://repl.it/@RhemaExel/Shipment-Calculator"
            Github="https://github.com/Iamrhema/Projects/blob/master/Python/Shipment%20Calculator.py"
          />
          {/* Salary Calculator */}
          <Media
            Name="Salary Calculator"
            background="backend"
            Description="This a Salary Checker which calculates your Salary and compares it for you."
            Live="https://repl.it/@RhemaExel/Salary-Checker"
            Github="https://github.com/Iamrhema/Projects/blob/master/Python/Salary%20checker.py"
          />
          {/* Password Validator */}
          <Media
            Name="Password Validator"
            background="backend"
            Description="This code checks for the password if it's reliable to use e.g  if it contains uppercase letters and numbers."
            Live="https://repl.it/@RhemaExel/Password-checker"
            Github="https://github.com/Iamrhema/Projects/blob/master/Python/Password.py"
          />
          {/* Binary Converter */}
          <Media
            Name="Binary Converter"
            background="backend"
            Description="This program converts binary to integers"
            Live="https://repl.it/@RhemaExel/Binary"
            Github="https://github.com/Iamrhema/Projects/blob/master/Python/Binary.py"
          />
        </div>
      );
    }
  }
  render() {
    return (
      <div className="Category-Tab">
        <div  id = "projects" className="text-center" style={{ marginBottom: "100px" }}>
          <Header name="Projects" />
        </div>
        <div className="container">
          <Tabs
            activeTab={this.state.activeTab}
            onChange={tabId => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab>All</Tab>
            <Tab>React</Tab>
            <Tab>HTML</Tab>
            <Tab>Javascript</Tab>
            <Tab>Python</Tab>
          </Tabs>
          <section className="project-grid">
            <Grid>
              <Cell col={12}>
                <div className="content">{this.toggleCategories()}</div>
              </Cell>
            </Grid>
          </section>
        </div>
      </div>
    );
  }
}

export default Project;

