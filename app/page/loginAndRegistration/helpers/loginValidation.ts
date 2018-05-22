
export const validate = (values) => {
    const errors: any = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!validEmail(values.email)) {
        errors.email = 'Invalid Email';
    }
    if (!values.password) {
        errors.password = 'Required';
    }
    return errors;
}

const validEmail = (value) => {
    return (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) ? false : true;
}
