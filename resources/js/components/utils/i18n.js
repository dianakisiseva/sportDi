// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import moment from 'moment';
// import 'moment/min/locales';
// import {validator} from '@/utils/validator'
// export default function setLocalization(localization){
//
// 	if (i18n.language == localization.locale){
// 		return;
// 	}
// 	i18n.use(initReactI18next) // passes i18n down to react-i18next
// 		.init({
// 			resources: {
// 				[localization.locale]: {
// 					translation: localization.translations
// 				}
// 			},
// 			lng: localization.locale,
// 			returnObjects: true,
// 			interpolation: {
// 				escapeValue: false, // react already safes from xss
// 			}
// 		});
//
// 	try {
// 		moment.locale(localization.locale);
// 	} catch (e){
// 		console.error(e);
// 	}
//
//
// 	let customMessages =  i18n.t("validation") ?? {};
// 	if (typeof customMessages == "string"){
// 		customMessages = {};
// 	}
// 	let defaultMessages = validator.getMessages(i18n.language);
// 	if (defaultMessages == undefined){
// 		defaultMessages = validator.getMessages(i18n.language.split("_")[0]) ?? {}
// 	}
//
// 	customMessages.attributes = {
// 		...defaultMessages.attributes,
// 		...customMessages.attributes
// 	};
//
// 	let messages = {
// 		...defaultMessages,
// 		...customMessages,
// 	};
//
// 	validator.register('custom_url', function(value, requirement, attribute) { // requirement parameter defaults to null
// 		return value.match(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm);
// 	},'The :attribute format is invalid.');
//
// 	validator.register('strong_password', function(value, requirement, attribute) { // requirement parameter defaults to null
// 		return value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/);
// 	});
//
// 	validator.registerImplicit('not_empty', function(value, requirement, attribute) {
// 		return value.length >  0;
// 	}, 'The :attribute should contain at least one item');
//
//
//
// 	validator.useLang(i18n.language)
// 	validator.setMessages(i18n.language, messages);
//
// };
