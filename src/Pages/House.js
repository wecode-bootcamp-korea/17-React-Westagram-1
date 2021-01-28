import React from 'react';
import { Link } from 'react-router-dom';
// import Routes from '../Routes';

class House extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <Link to="/login-minjoo"><li>김민주</li></Link>
                    <Link to="/login-jongjin"><li>김종진</li></Link>
                    <Link to="/login-minji"><li>강민지</li></Link>
                    <Link to="/login-yeonju"><li>김연주</li></Link>
                    <Link to="/login-jiyeon"><li>박지연</li></Link>
                </ul>
            </div>
        );
    }
}

export default House;