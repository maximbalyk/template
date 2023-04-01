import React, { useState } from "react";
import { HeaderNavigationMenu } from "./HeaderNavigationMenu";
import { HeaderMainContent } from "./HeaderMainContent";
import { HeaderTopLine } from "./HeaderTopLine";

export const Header = () => {
    const [activeMenu, setActiveMenu] = useState(false);
    const [pixel, setPixel] = useState("100%");
    const toggleMenu = () => {
        setActiveMenu(!activeMenu);
        setPixel(activeMenu ? "100%" : "0%");
    };

    return (
        <header className="header">
            <HeaderTopLine pixel={pixel} openMenu={toggleMenu} />
            <HeaderMainContent />
            <HeaderNavigationMenu pixel={pixel} closedMenu={toggleMenu} />
        </header>
    );
};