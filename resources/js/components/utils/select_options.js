export function selectOptions(entries,  valueKey = 'value', labelKey = 'label', optional){
    return entries.map(entry => {
        return {
            value: entry[valueKey],
            label: optional ? entry[labelKey] + ` (${optional})` : entry[labelKey]
        }
    });

}

export function selectValue(entries, selectedKey, valueKey = 'value', labelKey = 'label', exact = false){
    let selectedEntry;
    if (exact){
        selectedEntry = entries.find(element => element[valueKey] === parseInt(selectedKey));
    } else {
        selectedEntry = entries.find(element => element[valueKey] == selectedKey);
    }


    if (typeof selectedEntry == "undefined"){
        return null;
    }

    return {
        value: selectedEntry[valueKey],
        label: selectedEntry[labelKey]
    }

}

export function selectValueExact(entries, selectedKey, valueKey = 'value', labelKey = 'label'){
    return selectValue(entries, selectedKey, valueKey, labelKey, true)

}

export function selectValueMultiple(entries, selectedKeys, valueKey = 'value', labelKey = 'label'){
    let selectedEntries;

    if (!selectedKeys) {
        return [];
    }

    selectedEntries = entries.filter(element => selectedKeys.indexOf(element[valueKey]) !== -1);

    if (typeof selectedEntries == "undefined"){
        return null;
    }

    return selectedEntries.map(selectedEntry => {
        return {
            value: selectedEntry[valueKey],
            label: selectedEntry[labelKey]
        }
    })
}
