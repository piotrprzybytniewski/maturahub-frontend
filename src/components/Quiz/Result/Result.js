import React, {useState, useEffect} from 'react';
import {SectionText} from "../../Section/SectionText";
import {Section} from "../../Section/Section";
import {SectionHeader} from "../../Section/SectionHeader";

export const Result = ({result}) => {
    const [testResult, setResult] = useState({percentage: 0, points: 0 });
    const setQuizResult = (incorrectAmount, totalAmount) => {
        setResult({
            percentage: (((totalAmount - incorrectAmount) / totalAmount) * 100).toFixed(0),
            points: `${totalAmount - incorrectAmount}/${totalAmount}`
        });
    };

    useEffect(() => {
        setQuizResult(result.incorrect, result.total);
    }, [result]);

    return (
        <div>
        {result.total > 0 &&
                <Section type="primary section--rounded">
                    <SectionHeader type="primary">
                        WYNIK
                    </SectionHeader>
                    <SectionText type="white">
                        {testResult.percentage} %
                        <br/>
                        {testResult.points} pkt
                    </SectionText>
                </Section>
        }
        </div>
    )
};