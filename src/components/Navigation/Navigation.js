import React from 'react';
import {Logo} from "../Logo/Logo";
import {Link} from "../Link/Link";

export const Navigation = () => (
    <nav className="nav container">
        <Link href="/" type="">
            <Logo/>
        </Link>
        <ul className="nav__links">
            <li>
                <Link href="/" type="secondary">
                    STRONA GŁÓWNA
                </Link>
            </li>
            <li>
                <Link href="/powtorzenie/matematyka" type="secondary">
                    MATURA MATEMATYKA
                </Link>
            </li>
            <li>
                <Link href="/pytanie" type="secondary">
                    DODAJ PYTANIE
                </Link>
            </li>
        </ul>
    </nav>
);
