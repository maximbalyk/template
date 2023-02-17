import React from "react";
import HeaderNavigationMenu from "./HeaderNavigationMenu";
import HeaderMainContent from "./HeaderMainContent";
import HeaderTopLine from "./HeaderTopLine";

class Header extends React.Component {
    state = {
        activeMenu: false,
        pixel: "100%",
    };
    openMenu = () => {
        this.setState({
            activeMenu: !this.state.activeMenu,
            pixel: "0",
        });
    };
    closeMenu = () => {
        this.setState({
            activeMenu: !this.state.activeMenu,
            pixel: "100%",
        });
    };
    render() {
        return (
            <header className="header">
                <HeaderTopLine/>
                <HeaderMainContent/>
                <HeaderNavigationMenu
                    pixel={this.state.pixel}
                    closedMenu={this.closeMenu}
                />
            </header>
        );
    }
}

export default Header;
