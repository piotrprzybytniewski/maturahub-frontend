import React from 'react';
import PropTypes from 'prop-types';

export const FormFieldLabel = ({name}) => (
    <label htmlFor={name} className="form__label">
        {name}
    </label>
);

FormFieldLabel.propTypes = {
    name: PropTypes.string.isRequired,
};