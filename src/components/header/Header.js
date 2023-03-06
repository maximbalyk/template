import React from "react";
import HeaderNavigationMenu from "./HeaderNavigationMenu";
import HeaderMainContent from "./HeaderMainContent";
import HeaderTopLine from "./HeaderTopLine";

class Header extends React.Component {
    state = {
        activeMenu: false,
        pixel: "100%",
        header: "Futuristic Wireless Speaker",
        headerContent:
            "Luna’s performance is balanced and smooth in all\n" +
            "frequency ranges which makes the music both naturally\n" +
            "pleasant and distinctly more layered.",
    };
    toggleMenu = () => {
        this.setState(({ activeMenu }) => ({
            activeMenu: !activeMenu,
            pixel: activeMenu ? "100%" : "0%",
        }));
    };
    render() {
        const { header, headerContent, pixel } = this.state;
        return (
            <header className="header">
                <HeaderTopLine pixel={pixel} openMenu={this.toggleMenu} />
                <HeaderMainContent
                    header={header}
                    headerContent={headerContent}
                />
                <HeaderNavigationMenu
                    pixel={pixel}
                    closedMenu={this.toggleMenu}
                />
            </header>
        );
    }
}

export default Header;
