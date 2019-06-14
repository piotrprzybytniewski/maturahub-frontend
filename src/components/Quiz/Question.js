import React from 'react';
import {Answer} from "./Answer/Answer";

export const Question = ({question, id}) => {

    return (
        <div className="q">
            <div className="q_question">
                <h4>{question.question}</h4>
            </div>
            <div className="q__content">
                <Answer name={`question[${id}]`} value="a" content={question.answer.a} />
                <Answer name={`question[${id}]`} value="b" content={question.answer.b} />
                <Answer name={`question[${id}]`} value="c" content={question.answer.c} />
                <Answer name={`question[${id}]`} value="d" content={question.answer.d} />
            </div>
            <div
                className="q__small">
                <p>
                    {`${question.year} ${question.source} ${question.subject} poziom ${question.level} | ${question.section}`}
                </p>
            </div>
        </div>
    )
};