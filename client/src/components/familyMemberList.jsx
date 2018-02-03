import React from 'react';
import FamilyMember from './familyMember.jsx';
import AddFamilyMember from './addFamilyMember.jsx';

class FamilyMemberList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    }
  }

  toggleShowDetail() {
    let current = this.state.hidden;
    this.setState({ hidden: !current });
  }

  render() {
    return (
      <div className="familyDetail">
        <AddFamilyMember family={this.props.family} />
        {this.props.family.members.map((person, index) => <FamilyMember key={index} person={person} />)}           
      </div>
    );
  }
}

export default FamilyMemberList

