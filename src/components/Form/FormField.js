import React from 'react';
import {Field} from 'formik';
import PropTypes from 'prop-types';
import {FormFieldError} from "./FormFieldError";
import {FormFieldLabel} from "./FormFieldLabel";

export const FormField = ({type, name, displayName, placeholder, fieldClass = "", component, children}) => (
    <div className="form__field">
        <FormFieldLabel name={displayName} />
        <Field
            type={type}
            name={name}
            placeholder={placeholder}
            className={`input ${fieldClass}`}
            component={component}
        >
            {children}
        </Field>
        <FormFieldError name={name} />
    </div>
);

FormField.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};