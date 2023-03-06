import React from "react";
function FooterLinkItem({ link, className }) {
    return (
        <li className="footer__item">
            <a
                href={link}
                className={`footer__link ${className}`}
                target="_blank"
                rel="noopener noreferrer"
            >

            </a>
        </li>
    );
}

export default FooterLinkItem;