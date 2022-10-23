import Validator from 'validatorjs'
import i18n from 'i18next'

export const Validate = Validator

/**
 * Overwrite default validation messages
 */
let customMessages = i18n.t('validation') ?? {}

if (typeof customMessages === 'string') {
  customMessages = {}
}

let defaultMessages = Validate.getMessages(i18n.language)

if (!defaultMessages) {
  defaultMessages = Validate.getMessages(i18n.language.split('_')[0]) ?? {}
}

customMessages.attributes = {
  ...defaultMessages.attributes,
  ...customMessages.attributes
}

const messages = {
  ...defaultMessages,
  ...customMessages
}

Validate.useLang(i18n.language)
Validate.setMessages(i18n.language, messages)

/**
 * Custom validation rules (example)
 */
// validator.register('strong_password', function(value, requirement, attribute) { // requirement parameter defaults to null
//     return value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
// },'The :attribute should contain at least one uppercase, lowercase and special (!@#$%*?1234567890) character.');
