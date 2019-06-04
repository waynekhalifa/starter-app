import React from 'react';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = ( props ) => (
    <header className="toolbar">
        <DrawerToggle clicked={props.openDrawer}/>
        <div className="toolbar__logo">
            <Logo />
        </div>
        <nav className="toolbar__nav">
            <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
    </header>
);

export default Toolbar;