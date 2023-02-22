import React from "react";
import HeaderNavigationMenu from "./HeaderNavigationMenu";
import HeaderMainContent from "./HeaderMainContent";
import HeaderTopLine from "./HeaderTopLine";

class Header extends React.Component {
    state = {
        activeMenu: false,
        pixel: "100%",
    };
    toggleMenu = () => {
        this.setState(({activeMenu}) => ({
            activeMenu: !activeMenu,
            pixel: activeMenu ? "100%" : "0%"
        }));
    };
    render() {
        return (
            <header className="header">
                <HeaderTopLine
                    pixel={this.state.pixel}
                    openMenu={this.toggleMenu}
                />
                <HeaderMainContent/>
                <HeaderNavigationMenu
                    pixel={this.state.pixel}
                    closedMenu={this.toggleMenu}
                />
            </header>
        );
    }
}

export default Header;
