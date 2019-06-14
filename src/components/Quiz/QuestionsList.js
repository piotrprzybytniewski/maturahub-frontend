import React from 'react';
import {Question} from "../../components/Quiz/Question";
import {FieldArray} from "formik";

export const QuestionsList = ({questions}) => {
    return (
        <div className="questions">
            <FieldArray
                name="question"
                render={() => (
                    <div>
                        {questions.map((question, index) => (
                                <div key={index}>
                                    <Question question={question} key={index} id={index} />
                                </div>
                            ))
                        }
                    </div>
                )}
            />
        </div>
    );
};


