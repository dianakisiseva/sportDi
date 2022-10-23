import { can } from '@/utils/permissions';
import {useTranslation} from "react-i18next";

export function formatProjectStatuses(statuses) {
    const {t} = useTranslation();
    let toReturn = []

    // statuses are still hardcoded in some areas, need to be refactored to use permissions
    // at that point, this logic should also be transferred to the backend
    if (can("view project status pending")){
        toReturn.push( {
            label: t("common.status.pending"),
            value: statuses.pending
        })
    }

    if (can("view project status ongoing")){
        toReturn.push( {
            label: t("common.status.ongoing"),
            value: statuses.ongoing
        })
    }

    if (can("view project status closed")){
        toReturn.push( {
            label: t("common.status.closed"),
            value: statuses.closed
        })
    }

    if (can("view project status archived")){
        toReturn.push( {
            label: t("common.status.archived"),
            value: statuses.archived
        })
    }

    return toReturn;
}
