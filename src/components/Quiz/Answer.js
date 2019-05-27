import React from 'react';
import {Field} from "formik";
import PropTypes from 'prop-types';

export const Answer = ({type = 'radio', name, value, children}) => (
    <label>
        <Field type={type} name={name} value={value} />
        {children}
    </label>
);

Answer.propTypes= {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};