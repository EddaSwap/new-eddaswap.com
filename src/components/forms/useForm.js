import { useState } from "react";
// import * as Sentry from "@sentry/react";

// eslint-disable-next-line
const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegexp = /^([+])?\d+$/;
const validateEmail = (text) => emailRegexp.test(String(text).toLowerCase());
const validatePhone = (text) => phoneRegexp.test(String(text).toLowerCase());
const validatePhoneOrEmail = (text) =>
    emailRegexp.test(String(text).toLowerCase()) ||
    phoneRegexp.test(String(text).toLowerCase());

const logFieldError = (form, field, value, error) => {
    // const scope = new Sentry.Scope();
    // scope.setTag("form", form);
    // scope.setLevel(Sentry.Severity.Info);
    // Sentry.captureMessage(`Form ${form}[${field}]='${value}': ${error}`, () => scope);
};

export const useForm = (form, fields) => {
    let initialState = {};
    fields.forEach((field) => {
        initialState[field.name] = field.value ? field.value : "";
        if (field.checkbox) {
            initialState[field.name] = false;
        }
    });

    const [inputValues, changeInputs] = useState(initialState);
    const [errors, setErrors] = useState(null);

    const resetState = () => changeInputs(initialState);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        changeInputs({ ...inputValues, [name]: value });
        if (type === "checkbox") {
            changeInputs({ ...inputValues, [name]: checked });
        }
    };

    const validateForm = () => {
        let fieldErrors = {};
        fields.map((field) => {
            let fieldValue = inputValues[field.name]? ("" + inputValues[field.name]).trim() : "";
            let error = {};
            if (field.isEmail) {
                if (!validateEmail(fieldValue)) {
                    error.message = "Incorrect email address";
                    logFieldError(form, field.name, fieldValue, "!email")
                }
            }
            if (field.isPhone) {
                if (!validatePhone(fieldValue)) {
                    error.message = "Incorrect phone number";
                    logFieldError(form, field.name, fieldValue, "!phone")
                }
            }
            if (field.isPhoneOrEmail) {
                if (!validatePhoneOrEmail(fieldValue)) {
                    error.message = "Incorrect phone or email number";
                    logFieldError(form, field.name, fieldValue, "!email")
                }
            }
            if (field.required) {
                if (!fieldValue || fieldValue.length === 0) {
                    error.message = "The field above is required";
                    logFieldError(form, field.name, inputValues[field.name], "required")
                }
            }

            if (Object.keys(error).length) {
                fieldErrors[field.name] = error;
            }
            return null;
        });
        setErrors(fieldErrors);
        return !Object.keys(fieldErrors).length;
    };

    const validateField = (e) => {
        const { name } = e.target;
        let error = {};
        const currentField = fields.filter((field) => field.name === name)[0];
        let fieldValue = inputValues[name]? ("" + inputValues[name]).trim() : "";

        if (
            currentField &&
            currentField.isEmail &&
            fieldValue.length > 0 &&
            !validateEmail(fieldValue)
        ) {
            error = { message: "Incorrect email address" };
            logFieldError(form, name, inputValues[name], "!email")
        }

        if (currentField && currentField.required && fieldValue.length === 0) {
            error = { message: "This field is required" };
            logFieldError(form, name, fieldValue, "required")
        }

        setErrors({ ...errors, [name]: error });
    };

    return {
        inputValues,
        handleChange,
        validateForm,
        errors,
        validateField,
        resetState,
    };
};
