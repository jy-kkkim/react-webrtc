import React, { Component } from 'react';

class Video extends Component {
    constructor() {
        super();
        this.state = {
            bridge: '',
            user: ''
        }
    }

    componentWillMount() {
        window.RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection;
    }
    componentDidMount() {
        
    }

}

export default Video;