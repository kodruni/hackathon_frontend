import React from 'react';
import ApiComponent from '../ApiComponent.js';
import Content from './PlayingToday.jsx';

export default class PlayingToday extends ApiComponent {

    constructor(props) {
        super(props);

        this.url = 'api/theater/cinema-city-letnany';

        this.container_className = 'playing-today';
    }

    buildQS() {
        return {
        };
    }

    getLoadedContent() {
        return <Content data={ this.state.data } />
    }
}
