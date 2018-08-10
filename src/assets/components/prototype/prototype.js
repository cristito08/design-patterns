import React, { Component } from 'react';



class PrototypeSample extends Component {
  render() {

    const user = {
        firstName: 'Diana',
        lastName: 'Valdez'
    };

    function welcome(user) {
        return 'Welcome ' + user.firstName + ' ' + user.lastName;
    }

    function goodbye(user) {
        return 'See you ' + user.firstName + ' ' + user.lastName;
    }

    return (
      <div>
          <h1>{welcome(user)}</h1>
          <h2>{goodbye(user)}</h2>
      </div>
    );
  }
}

export default PrototypeSample;