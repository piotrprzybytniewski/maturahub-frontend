import React from 'react';
import {SectionHeader} from "../components/Section/SectionHeader";
import {Section} from "../components/Section/Section";
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import {Button} from "../components/Button/Button";
import {SectionText} from "../components/Section/SectionText";
import {FormField} from "../components/Form/FormField";
import API from "../utils/API";
import {Content} from "./Content";

export const AddQuestion = () => (
    <Content>
        <Section type="secondary">
            <Formik
                initialValues={{
                    subject: '',
                    level: '',
                    section: '',
                    source: '',
                    year: 2019,
                    question: '',
                    answer: {
                        a: '',
                        b: '',
                        c: '',
                        d: '',
                        correct: '',
                    },
                }}
                onSubmit={questionValues => {
                    let questionData = {data: [questionValues]};

                    API.post('/questions', questionData).then(response => {
                        console.log(response.data);
                    }).catch(error => {
                        console.log(error)
                    });
                }}
                validationSchema={AddQuestionValidation}
            >
                <Form className="form form--medium">
                    <SectionHeader type="important">DODAJ NOWE PYTANIE</SectionHeader>
                    <SectionText type="secondary">
                        Przyczyniasz się tym samym do zwiększania bazy pytań w naszym serwisie dla innych maturzystów!
                    </SectionText>
                    <FormField type="text" name="subject"
                               placeholder="Przedmiot" displayName="Przedmiot"/>
                    <FormField type="text" name="level"
                               placeholder="podstawowy / rozszerzony " displayName="Poziom"/>
                    <FormField type="text" name="section"
                               placeholder="Dział z którego jest pytanie" displayName="Temat"/>
                    <FormField type="text" name="source"
                               placeholder="CKE" displayName="Źródło"/>
                    <FormField type="select" name="year"
                               placeholder="2019" displayName="Rok" component="select">
                        {
                            range(2004, 2019).reverse().map((value, index) => {
                                return <option value={value} key={index}>{value}</option>
                            })
                        }
                    </FormField>
                    <FormField type="text" name="question"
                               placeholder="Treść pytania" displayName="Treść pytania"/>
                    <FormField type="text" name="answer.a"
                               placeholder="Treść odpowiedzi" displayName="Odpowiedź A"/>
                    <FormField type="text" name="answer.b"
                               placeholder="Treść odpowiedzi" displayName="Odpowiedź B"/>
                    <FormField type="text" name="answer.c"
                               placeholder="Treść odpowiedzi" displayName="Odpowiedź C"/>
                    <FormField type="text" name="answer.d"
                               placeholder="Treść odpowiedzi" displayName="Odpowiedź D"/>
                    <FormField type="text" name="answer.correct"
                               placeholder="Litera prawidłowej odpowiedzi" displayName="Prawidłowa odpowiedź"/>
                    <Button type="submit" btnClass="primary link--long">SUBMIT</Button>
                </Form>
            </Formik>
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


const range = (start, end) => {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
};
