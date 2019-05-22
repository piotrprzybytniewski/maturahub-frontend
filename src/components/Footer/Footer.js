import React from 'react';
import {Navigation} from "../Navigation/Navigation";

export const Footer = () => (
    <footer className="footer">
        <div className="container center">
            <Navigation/>
            <p className="section__text--secondary">Copyright © matura.pl 2019. All right reserved</p>
        </div>
    </footer>
);