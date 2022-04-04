import React from 'react';
import { navItems } from './NavItems';
import { navigationItemStyles } from './NavItems.styles';
export const Navigation = () => {
    const navItemStyles = navigationItemStyles.navItemStyle;

    const handleNavItemClick = (e: any) => {
        e.preventDefault();
        console.log('NavItemClicked');
    }
    return (
        <div style={navItemStyles}>
            {navItems.map( (item: any) => {
                return (
                    <span key={item.navTitle} onClick={handleNavItemClick}>
                        {item.navTitle}
                    </span>
                )
            })}
        </div>
    )
}