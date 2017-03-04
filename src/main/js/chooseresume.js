/**
 * Created on 3/3/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';

class Templates extends React.Component {
    render() {
        return(
            <div id = "template-List">
                <img src = "http://www.super-resume.com/assets/img/templates/T8.png"  height = {300} width = {170}  border = "2"/>

                <img src = "http://www.super-resume.com/assets/img/templates/T3.png"  height = {300} width = {170}/>

                <img src = "http://www.thegridsystem.org/wp-content/uploads/2016/02/emphasis.png"  height = {300} width = {170}/>

                <img src = "http://www.thegridsystem.org/wp-content/uploads/2016/02/entrylevel.png"  height = {300} width = {170}/>
            </div>
        );
    }
}


ReactDOM.render(<Templates/>, document.getElementById('templateList'));