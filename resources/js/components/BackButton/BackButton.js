import React from 'react';
import {useTranslation} from "react-i18next";
import {Inertia} from "@inertiajs/inertia";
import {IconArrowPager} from "../Icons/Icons";

export default function BackButton({ label, link}) {
    const {t} = useTranslation();

    return (
        <button
            className="btn-back"
            onClick={() => link ? Inertia.visit(link) : history.back()}>
            <IconArrowPager className="btn-back-arrow"/>{label ?? t('common.label.back')}
        </button>
    );
}
