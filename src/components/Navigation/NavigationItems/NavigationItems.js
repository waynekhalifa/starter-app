import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = ( props ) => (
    <ul className="navigation">
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        {props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
        {!props.isAuthenticated
            ? <NavigationItem link="/my-account">Account</NavigationItem>
            : <NavigationItem link="/logout">Logout</NavigationItem>}
    </ul>
);

export default NavigationItems;