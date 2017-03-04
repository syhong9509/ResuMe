/**
 * Created by Marlin on 3/3/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';

class MenuResumes extends React.Component {
    render() {
        return(
            <div className = "menu-box">
                <h2 id = "resume">ResuME</h2>
                <icon><img src = {this.props.icon} height = {90}/></icon>
                <li><a href="index.html">About</a></li>
                <li><a href="#certifications">Contact</a></li>
                <li><a href="#applications">Help</a></li>
            </div>
        );
    }
}

class ResumeList extends React.Component {
    render() {
        return (
            <div id="Shadow-Box">

            </div>
        );
    }

}

ReactDOM.render(<MenuResumes icon = "http://images.clipartpanda.com/stack-of-paper-vector-29343.png"/>, document.getElementById('menu-MyResumes'));
ReactDOM.render(<ResumeList/>, document.getElementById('list'));