import React from 'react';
import { appTitleStyles } from './AppTitle.styles';
export const AppTitle = () => {
    const homeImageStyle = appTitleStyles().homeImage;
    const mainArtTitleStyle = appTitleStyles().appTitle;
    const mashArtTitle = appTitleStyles().mashArtTitle;
    return (
        <div style={mainArtTitleStyle}>
            <img src='/monalisa.jpeg' alt='Monalisa' style={homeImageStyle}></img>
            <h1 style={mashArtTitle}>MASHART</h1>
        </div>
    );
}