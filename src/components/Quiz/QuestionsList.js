import React from 'react';
import {Question} from "../../components/Quiz/Question";
import {ErrorMessage, FieldArray} from "formik";
import * as Yup from 'yup';

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


