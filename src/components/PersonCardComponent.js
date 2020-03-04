import React, { Component } from 'react';
class PersonCard extends React.Component {
    render() {
        const {firstName, lastName, age, HairColor} = this.props;
        return (
            <div>
                <h2>{lastName}, {firstName} </h2>
                <p>age: {age}</p>
                <p>HairColor: {HairColor}</p>
            </div>
        );
    }
}
export default PersonCard;