import React, {Component, useState} from "react";
import '../styles/App.css';

const relatives=['relativeListItem1', 'relativeListItem2', 'relativeListItem3', 'relativeListItem4', 'relativeListItem5', 'relativeListItem6']

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
              <ol>
                {
                  relatives.map(x => (
                    <li key={x}>{x}</li>
                  ))
                }
              </ol>
                
            </div>
        )
    }
}


export default App;
