import React from 'react';
import {Link} from "../components/Link/Link";
import {Content} from "./Content";

export const NotFound = () => (
    <Content>
        <div className="section section--secondary center">
            <h2 className="header header--primary header--big">
                Oops!
            </h2>
            <h3 className="header header--primary">
                404 - STRONY NIE ZNALEZIONO
            </h3>
            <p className="section__text section__text--secondary">
                Wygląda na to, że strona, którą szukasz zmieniła swoją nazwę lub jest tymczasowo niedostępna!
            </p>
            <Link href="/" type="primary">IDŹ DO STRONY GŁÓWNEJ</Link>
        </div>
    </Content>
);