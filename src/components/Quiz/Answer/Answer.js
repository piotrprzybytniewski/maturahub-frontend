import React from 'react';
import PropTypes from 'prop-types';
import {Field} from "formik";

export const Answer = ({type = 'radio', name, value, content}) => (
    <div className="q__answer input-group">
        <Field type={type} name={name} value={value} id={name + value} />
        <label htmlFor={name + value}>
            {`${value.toUpperCase()} . ${content}`}
        </label>
    </div>
);

Answer.propTypes= {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};