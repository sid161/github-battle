import React from 'react';
import {Route} from 'react-router-dom';
import Popular from './Popular';
import Battle from './Battle';
import Header from './Header';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    return(
      <>
      <Header/>
      <Route path = "/" exact>
        <Popular/>
      </Route>
      <Route path = "/battle" exact>
        <Battle/>
      </Route>
      </>
    )
  }
}

export default App;
