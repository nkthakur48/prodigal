import React from 'react'
import './App.css';

// Import components
import Grid from '@material-ui/core/Grid'
import Header from './components/layout/Header'
import SidePane from './components/layout/SidePane';
import Home from './components/screen/Home'

function App() {

  const style = {
    Grid: {
      height: '100%'
    }
  }
  return (
    <div className="App">
      <Grid container style={style.Grid}>
        <Grid item sm={2} style={style.Grid}>
          <SidePane />
        </Grid>
        <Grid item sm={10} style={style.Grid}>
          <Header />
          <Home />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
