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

    sidePaneTabClickHandler = (clickedTabValue) => {
        this.setState( {selectedTab: clickedTabValue})
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
                        <SidePane
                            selectedTab={this.state.selectedTab}
                            sidePaneTabClickHandler={this.sidePaneTabClickHandler}/>
                    </Grid>
                    <Grid item sm={10} style={style.Grid}>
                        <Header/>
                        {this.state.selectedTab === 'Dashboard' ? <Home/> : <h1>Tab Content Not Found</h1>}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default App;
