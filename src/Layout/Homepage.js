import React from 'react';
import {SectionHeader} from "../components/Section/SectionHeader";
import {SectionText} from "../components/Section/SectionText";
import {Section} from "../components/Section/Section";
import {CardsRow} from "../components/Card/CardsRow";
import {Card} from "../components/Card/Card";
import {CardText} from "../components/Card/CardText";
import {CardBtn} from "../components/Card/CardBtn";

export const Homepage = () => (
    <div className="content">
        {/*<div className="main section center">*/}
        <Section type="secondary">
            <img src="/images/orzel.svg" alt="orzeł" className="main__img"/>
            <SectionHeader type="important">ZDAJ MATURĘ BEZ STRESU</SectionHeader>
            <SectionText type="secondary">
                Wiedza niezbędna do zdania matury w jednym miejscu.
                <br/>
                Z nami przygotujesz się na 100% i stwierdzisz, że #maturatobzdura
            </SectionText>
        </Section>
        <Section type="primary">
            <SectionHeader type="primary center">
                POWTÓRKA DO MATURY W JEDNYM MIEJSCU
            </SectionHeader>
            <SectionText type="primary center">
                W naszych testach znajdziecie wszystkie pytania z arkuszy maturalnych CKE.
                <br/>
                Rozwiązując je, przygotujecie się na potencjalne zagadnienia, która mogą pojawić się na Waszej
                maturze.
            </SectionText>
            <CardsRow>
                <Card>

                    <CardText>
                        Wszystkie zadania zamknięte z arkuszy maturalnych CKE (2005 - 2019)
                        <br/>
                        Łącznie 250 zadań przygotowujących do matury prosto z arkuszy maturalnych!
                    </CardText>
                    <CardBtn href="matura/matematyka" type="primary"/>
                </Card>
            </CardsRow>

        </Section>
    </div>
);