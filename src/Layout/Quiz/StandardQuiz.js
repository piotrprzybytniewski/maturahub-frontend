import React from 'react';
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

const questions = API.get('/questions/2')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        // always executed
    });
export const StandardQuiz = () => (
    <Content>
        <Section type="secondary">
            <div className="question">
                <Formik
                    initialValues={{
                        question: '',
                        level: '',
                    }}
                    onSubmit={values => {
                        // let questionData = {data: [values]};
                        console.log(values);

                        // API.post('/questions', questionData).then(response => {
                        //     console.log(response.data);
                        // }).catch(error => {
                        //     console.log(error)
                        // });

                    }}
                    // validationSchema={AddQuestionValidation}
                >
                    <Form className="form form--medium">
                        <SectionHeader type="important">POWTÓRZENIE DO MATURY Z MATEMATYKI</SectionHeader>
                        <SectionText type="secondary">
                            Test 20 losowych pytań z arkuszy maturalnych z poprzednich lat!
                        </SectionText>
                        <Question>
                            <label>
                                <Field type="radio" name="question[0]" placeholder="subj1" value="a"/>
                                A. TEST NUM A
                            </label>
                            <label>
                                <Field type="radio" name="question[0]" placeholder="subj2" value="b"/>
                                B. TEST NUM BBI
                            </label>
                        </Question>

                        <FormField type="text" name="level"
                                   placeholder="podstawowy / rozszerzony " displayName="Poziom"/>
                        <Button type="submit" btnClass="primary link--long">SUBMIT</Button>
                    </Form>
                </Formik>
            </div>
        </Section>
    </Content>
);


const AddQuestionValidation = Yup.object().shape({
    subject: Yup
        .string()
        .min(1, 'Wartość za krótka')
        .max(255, 'Wartość za długa')
        .required('To pole jest wymagane'),
    level: Yup
        .string()
        .min(1, 'Wartość za krótka')
        .max(100, 'Wartość za długa')
        .required('To pole jest wymagane'),
    section: Yup
        .string()
        .min(1, 'Wartość za krótka')
        .max(500, 'Wartość za długa')
        .required('To pole jest wymagane'),
    source: Yup
        .string()
        .min(1, 'Wartość za krótka')
        .max(255, 'Wartość za długa')
        .required('To pole jest wymagane'),
    question: Yup
        .string()
        .min(1, 'Wartość za krótka')
        .max(1000, 'Wartość za długa')
        .required('To pole jest wymagane'),
    year: Yup
        .number()
        .integer()
        .required('To pole jest wymagane'),
    answer: Yup.object().shape({
        a: Yup.string()
            .min(1, 'Wartość za krótka')
            .max(1000, 'Wartość za długa')
            .required('To pole jest wymagane'),
        b: Yup.string()
            .min(1, 'Wartość za krótka')
            .max(1000, 'Wartość za długa')
            .required('To pole jest wymagane'),
        c: Yup.string()
            .min(1, 'Wartość za krótka')
            .max(1000, 'Wartość za długa')
            .required('To pole jest wymagane'),
        d: Yup.string()
            .min(1, 'Wartość za krótka')
            .max(1000, 'Wartość za długa')
            .required('To pole jest wymagane'),
        correct: Yup.string()
            .min(1, 'Wartość za krótka')
            .max(1000, 'Wartość za długa')
            .required('To pole jest wymagane'),
    })

});


