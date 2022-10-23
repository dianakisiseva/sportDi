import React from 'react';
import ReactSelect from 'react-select';
import {useTranslation} from "react-i18next";
import { Permissions } from "@/constants";

export default function ActionsInDropdown ({ actionDropdownOptions }) {
    const {t} = useTranslation();
    const options = actionDropdownOptions.filter(item => item.permission === Permissions.OBSOLETE || item.permission === Permissions.GRANTED);

    if (options.length > 0) {
        return (
            <ReactSelect
                onChange={e => e.action(e)}
                options={options}
                placeholder={t("common.component.react-select.select-action")}
                noOptionsMessage={() => t("common.component.react-select.no-options-message")}
                name="file-options"
                className="select-custom-input"
                classNamePrefix="select"
                isSearchable={false}
            />
        );
    }

    return null;
}
