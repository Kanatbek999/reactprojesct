import React, { Component } from 'react';
import './item-list.css';

export default class ItemList extends Component {

  render() {
    return (
      <ul className="item-list list-group">
        <li className="list-group-item">
          Luke Skywalker
        </li>
        <li className="list-group-item">
          Darth Vader
        </li>
        <li className="list-group-item">
        C-3PO
        </li>
        <li className="list-group-item">
        Leia Organa
        </li>
        <li className="list-group-item">
        Owen Lars
        </li>
        <li className="list-group-item">
        Beru Whitesun Lars
        </li>
        <li className="list-group-item">
        Biggs Darklighter
        </li>
        <li className="list-group-item">
        Obi-Wan Kenobi
        </li>
        <li className="list-group-item">
        R5-D4
        </li>
        
        <li className="list-group-item">
        C-3PO
        </li>
        
      </ul>
    );
  }
}
