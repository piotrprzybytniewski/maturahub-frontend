import React from 'react';
import {ErrorMessage} from 'formik';
import PropTypes from 'prop-types';

export const FormFieldError = ({name}) => (
    <ErrorMessage name={name}>
        {
            (msg) =>
                <div className="form__error">
                    {msg}
                </div>
        }
    </ErrorMessage>
);

FormFieldError.propTypes = {
    name: PropTypes.string.isRequired,
};