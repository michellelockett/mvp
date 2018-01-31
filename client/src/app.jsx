import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Family from './components/family.jsx';
import FamilyMemberList from './components/familyMemberList.jsx';
import data from '../../database/testData.js';
import NavbarCustom from './components/navbar.jsx';
import Search from './components/search.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      families: data.families,    
      selectedFamily: data.families[0],
      currentFamilies: data.families
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleClick (familyId) {
    let currentFamilies = this.state.families;
    let selected = currentFamilies.filter(family => family.id === familyId);
    this.setState({selectedFamily: selected[0]});
  }

  handleSearch(e) {
    let value = e.target.value;
    let currentFamilies = this.state.families;
    let matchingFamilies = currentFamilies.filter(family => family.lastName === value);
    if (matchingFamilies.length > 0) {
      this.setState({currentFamilies: matchingFamilies}, () => console.log(this.state.families));
    } else {
      this.setState({currentFamilies: currentFamilies});
    }
  }

  render() {
    return (
        <div className="">
          <NavbarCustom />
      
          <div className="container">
            <div className="row" id="families">
              <div className="col-md-4">
                <h1>Welcome, Admin</h1>
                <Search search={this.handleSearch} />
                <ul className="list-group list-group-flush" id="families">
                {this.state.currentFamilies.map (family => {
                  return <Family click={this.handleClick} family={family} />
                })}
                </ul>
              </div>

              <div className="col-md-2"></div>

              <div className="col-md-6">
                 <FamilyMemberList family={this.state.selectedFamily}/>
              </div>

            </div>
          </div>
        </div>
      
    );
  }

}

ReactDOM.render(<App />, document.getElementById('app'));
