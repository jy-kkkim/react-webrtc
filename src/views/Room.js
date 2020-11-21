import React, { Component } from "react";
import { Link } from 'react-router-dom';
import io from 'socket.io-client'

const socket = io.connect()

class Room extends Component {
    constructor() {
        super();

        console.log("constructor");

    }

    componentDidMount() {
        socket.on('welcome', msg => {
            console.log(msg);
        })
    }



    render() {
        return (
            <div className="home">
              화상 회의 페이지
                
            </div>
        )
    }
}

export default Room;