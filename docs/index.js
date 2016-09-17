import React, { Component } from 'react';
import { render } from 'react-dom';

import { Hypers, GuruDigital, Google, Apple} from '../src';
import './style.less';

class Item extends Component {
    render() {
        const { title, children } = this.props;
        return (
            <li>
                {children}
                <span>{title}</span>
            </li>
        );
    }
}


render((
    <ul className="container">
        <Item title="Hypers">
            <Hypers  width={90} color="#00c3ee" backgroundColor="transparent"/>
        </Item>

        <Item title="Guru Digital">
            <GuruDigital  width={90} color="#fff" backgroundColor="#00b12b"  />
        </Item>

        <Item title="Google">
            <Google  width={180}  height={60}/>
        </Item>

        <Item title="Apple">
            <Apple  width={90}  height={90} color="#999" />
        </Item>


    </ul>
), document.getElementById('mount'));
