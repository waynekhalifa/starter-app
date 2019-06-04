import React, { Component } from 'react';
import Wrapper from './hoc/Wrapper/Wrapper';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import SideDrawer from './components/Navigation/SideDrawer/SideDrawer';

class App extends Component {
    render() {
        return (
            <Wrapper>
                <Toolbar />
                <SideDrawer />
                <main className="main-content">
                    This is starter app
                </main>
            </Wrapper>
        );
    }
}

export default App;