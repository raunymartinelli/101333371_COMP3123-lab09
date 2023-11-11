import React, {Component} from 'react';

export default class Student extends Component {

    constructor() {
        super();
        this.state = {
            fist_name: 'Rauny'
        };
    }
        render()
        {
            return (

                <h5 style={{color: 'black', margin: 0, lineHeight: 3}}>{this.props.college}, Toronto</h5>
            );
        }
    }

