import React, {Component} from 'react'
import './App.css';

// Import components
import Grid from '@material-ui/core/Grid'
import Header from './components/layout/Header'
import SidePane from './components/layout/SidePane';
import Home from './components/screen/Home'

class App extends Component {
    state = {
        selectedTab: 'Dashboard'
    }
    render() {
        const style = {
            Grid: {
                height: '100%'
            }
        }
        return (
            <div className="App">
                <Grid container style={style.Grid}>
                    <Grid item sm={2} style={style.Grid}>
                        <SidePane selectedTab={this.state.selectedTab}/>
                    </Grid>
                    <Grid item sm={10} style={style.Grid}>
                        <Header/>
                        <Home/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default App;
