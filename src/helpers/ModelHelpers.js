
import _ from 'lodash';

var modelFunctions = {
    number: (val) => Number(val),
    string: (val) => val,
    boolean: (val) => (val.toLowerCase() === "true"),
    date: (val) => val
};

export function validateFieldValue(field, value, model) {
    var error = "";
    
    if (model[field].regex && (!model[field].regex.test(value))) {
        error = model[field].error;
    }

    return error;
}

export function validateRequiredFields(data, model) {
    
    var dataKeys = Object.keys(data);
    var requiredKeys = Object.keys(model).filter(val => model[val].required);
    var intersection = _.intersectionBy(dataKeys, requiredKeys, (v) => v);

    return (requiredKeys.length === intersection.length);
}

export function getCorrectlyTypedValues(data, model) {
    var result = {};
    Object.keys(data).forEach((val) => {
        if (model[val])
            result[val] = modelFunctions[model[val].type](data[val]);
    });

    return result;
}