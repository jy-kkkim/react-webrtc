import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            roomId: ""
        }
        this.inputChange = this.inputChange.bind(this);
    }

    inputChange(e) {
        this.setState({ roomId: e.target.value });
    }

    render() {
        return (
            <div className="home">
              <div>
              <h1 itemProp="headline">화상 회의</h1>
              <p>방 이름을 입력하세요.</p>
              <input type="text" name="room" onChange={this.inputChange} />
              <Link className="primary-button" to={ this.state.roomId }>시작</Link>
            </div>
                
            </div>
        )
    }
}

export default Home;