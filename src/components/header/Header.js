import React, { useState } from "react";
import { HeaderNavigationMenu } from "./HeaderNavigationMenu";
import { HeaderMainContent } from "./HeaderMainContent";
import { HeaderTopLine } from "./HeaderTopLine";

export const Header = () => {
    const [activeMenu, setActiveMenu] = useState(false);
    const toggleMenu = () => {
        setActiveMenu(!activeMenu);
    };

    return (
        <header className="header">
            <HeaderTopLine
                pixel={activeMenu ? "0%" : "100%"}
                openMenu={toggleMenu}
            />
            <HeaderMainContent />
            <HeaderNavigationMenu
                pixel={activeMenu ? "0%" : "100%"}
                closedMenu={toggleMenu}
            />
        </header>
    );
};
