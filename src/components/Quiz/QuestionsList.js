import React from 'react';
import {Question} from "../../components/Quiz/Question";


export const QuestionsList = ({questions}) => {

    return (
        <div className="questions">
            {questions.map((question, id) =>
                <Question question={question} key={id} id={id} />
            )
            }
        </div>
    );
};


