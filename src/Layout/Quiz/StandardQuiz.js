import React, {useEffect, useState} from 'react';
import {Content} from "../Content";
import {Section} from "../../components/Section/Section";
import {SectionHeader} from "../../components/Section/SectionHeader";
import {SectionText} from "../../components/Section/SectionText";
import {Form, Formik} from "formik";
import API from "../../utils/API";
import {QuestionsList} from "../../components/Quiz/QuestionsList";
import {Timer} from "../../components/Timer/Timer";
import {Result} from "../../components/Quiz/Result/Result";

export const StandardQuiz = () => {
    const [questions, setQuestions] = useState([]);
    const [correctAnswers, setCorrectAnswers] = useState([]);
    const [timerStatus, setTimerStatus] = useState(true);
    const [result, setResult] = useState({incorrect: 0, total: 0});

    const initialFormValues = {};
    const correctFormAnswers = [];

    useEffect(() => {
        API.get('/questions/3')
            .then(function (response) {
                const responseQuestions = response.data['data'];
                setQuestions(responseQuestions);
                responseQuestions.forEach((question, index) => initializeQuestions(question, index));
                setCorrectAnswers({correct: correctFormAnswers});
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const initializeQuestions = (question, index) => {
        initialFormValues[index] = "";
        correctFormAnswers[index] = question.answer.correct;
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

    const getLabel = (selector) => (
        document.querySelector(`label[for="question[${selector}"]`)
    );

    const setLabelClass = (label, isCorrect) => {
        label = label.classList;
        label.add("q__answer--answered");
        if (isCorrect) {
            label.add("q__answer--correct");
        } else {
            label.add("q__answer--wrong");
        }

    };

    const handleSubmit = (values) => {
        setTimerStatus(false);
        document.querySelector('.form input[type="submit"]').classList.add("link--disabled");
        let correctFormAnswers = correctAnswers.correct;
        let submittedFormAnswers = values.question;
        let incorrectFormAnswers = getIncorrectAnswers(submittedFormAnswers);
        incorrectFormAnswers.forEach((questionIndex) => {
            let wrongLabel = getLabel(`${questionIndex}]${submittedFormAnswers[questionIndex]}`);
            setLabelClass(wrongLabel, 0);
            let correctLabel = getLabel(`${questionIndex}]${correctFormAnswers[questionIndex]}`);
            setLabelClass(correctLabel, 1);
        });

        let radios = document.querySelectorAll(".form input[type=radio]");
        radios.forEach((radio) => {
            radio.disabled = true;
        });

        let labels = document.querySelectorAll(".questions label");
        labels.forEach((label) => {
            label.classList.add("q__answer--answered")
        });

        setResult({incorrect: incorrectFormAnswers.length, total: correctFormAnswers.length});
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    const FriendArrayErrors = errors =>
        <div>{errors.question}</div>;

    return (
        <Content>
            <Result result={result}/>
            <Section type="secondary">
                <Formik
                    initialValues={initialFormValues}
                    onSubmit={values => {
                        handleSubmit(values)
                    }}
                >
                    <Form className="form form--medium">
                        <SectionHeader type="important">POWTÓRZENIE DO MATURY Z MATEMATYKI</SectionHeader>
                        <SectionText type="secondary">
                            Test 20 losowych pytań z arkuszy maturalnych z poprzednich lat!
                        </SectionText>
                        <SectionText type="secondary">Czas rozwiązywania testu: {Timer(timerStatus)}</SectionText>
                        <QuestionsList questions={questions} />
                        <FriendArrayErrors/>
                        <input type="submit" className="link link--primary link--long"
                               value="SPRAWDŹ WYNIK"/>
                    </Form>
                </Formik>
            </Section>
        </Content>
    )
};
