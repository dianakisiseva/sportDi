import Validator from 'validatorjs';
import i18n from 'i18next';

export const validator = Validator;

/**
 * Custom validation rules (example)
 */
// validator.register('strong_password', function(value, requirement, attribute) { // requirement parameter defaults to null
//     return value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
// },'The :attribute should contain at least one uppercase, lowercase and special (!@#$%*?1234567890) character.');

validator.register('custom_url', function(value, requirement, attribute) { // requirement parameter defaults to null
    return value.match(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm);
},'The :attribute format is invalid.');

validator.register('strong_password', function(value, requirement, attribute) { // requirement parameter defaults to null
    return value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/);
},'The :attribute should contain at least one lowercase letter, one uppercase letter and at least one number.');

validator.registerImplicit('not_empty', function(value, requirement, attribute) {
    return value.length >  0;
}, 'The :attribute should contain at least one item');
