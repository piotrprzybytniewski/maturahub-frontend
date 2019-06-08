import React, {useState, useEffect} from 'react';
import {Content} from "../Content";
import {Section} from "../../components/Section/Section";
import {SectionHeader} from "../../components/Section/SectionHeader";
import {SectionText} from "../../components/Section/SectionText";
import {Formik, Form, Field} from "formik";
import API from "../../utils/API";
import {FormField} from "../../components/Form/FormField";
import {Button} from "../../components/Button/Button";
import * as Yup from 'yup';
import {Question} from "../../components/Quiz/Question";
import {QuestionsList} from "../../components/Quiz/QuestionsList";


export const StandardQuiz = () => {
    const [questions, setQuestions] = useState([]);
    const [correctAnswers, setCorrectAnswers] = useState([]);


    useEffect(() => {
        API.get('/questions/3')
            .then(function (response) {
                const responseQuestions = response.data['data'];
                setQuestions(responseQuestions);
                setCorrectAnswers({correct: getCorrectValues(responseQuestions)});
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);


    const initializeValues = () => {
        const initialValues = {};
        questions.forEach((question, index) => {
            initialValues[index] = "";
        });
        return initialValues;
    };

    const getCorrectValues = (questions) => {
        const initialValues = [];
        questions.forEach((question, index) => {
            initialValues[index] = question.answer.correct;
        });
        return initialValues;
    };


    const getIncorrectAnswers = (questions) => {
        let differentIndexes = [];
        questions.forEach((element, index) => {
            if (element !== correctAnswers.correct[index]) {
                differentIndexes.push(index);
            }
        });
        return differentIndexes;
    };

    const handleSubmit = (values) => {
        console.log('correct answ', correctAnswers.correct);
        console.log('submitted', values.question);
        console.log('incorrect', getIncorrectAnswers(values.question));
    };

    const questionsValidation = Yup.object().shape({
            question: Yup.array().required('Must have friends')
    });

    return (
        <Content>
            <Section type="secondary">
                <Formik
                    initialValues={initializeValues}
                    validationSchema={questionsValidation}
                    onSubmit={values => {
                        handleSubmit(values)
                    }}
                >

                    <Form className="form form--medium">
                        <SectionHeader type="important">POWTÓRZENIE DO MATURY Z MATEMATYKI</SectionHeader>
                        <SectionText type="secondary">
                            Test 20 losowych pytań z arkuszy maturalnych z poprzednich lat!
                        </SectionText>
                        <QuestionsList questions={questions}/>

                        <input type="submit" className="link link--primary link--long"
                               value="SPRAWDŹ WYNIK"/>
                    </Form>
                </Formik>


            </Section>
        </Content>
    )
};
