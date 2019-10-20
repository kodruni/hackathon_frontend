import React from 'react';
import ApiComponent from '../ApiComponent.js';
import Content from './Theater.jsx';

export default class Theater extends ApiComponent {

    constructor(props) {
        super(props);

        this.url = '/api/theater' + props.location.pathname;

        this.container_className = 'theater';
    }

    buildQS() {
        // let { slug } = this.props.match.params;

        // return {
        //     theater: slug
        // };
        return {}
    }

    getLoadedContent() {
        return <Content data={ this.state.data } />
    }
}
