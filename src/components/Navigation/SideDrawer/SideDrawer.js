import React from 'react';
import Wrapper from '../../../hoc/Wrapper/Wrapper';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const SideDrawer = ( props ) => {
    let attachedClasses = ["sidedrawer", "sidedrawer__close"];
    if ( props.open ) {
        attachedClasses = ["sidedrawer", "sidedrawer__open"];
    }
    return (
        <Wrapper>
            <Backdrop show={props.open} clicked={props.close} />
            <div className={attachedClasses.join(' ')} onClick={props.close}>
                <div className="sidedrawer__logo">
                    <Logo />
                </div>
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth} />
                </nav>
            </div>
        </Wrapper>
    );
}

export default SideDrawer;