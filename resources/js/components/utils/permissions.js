import { usePage } from "@inertiajs/inertia-react";

function hasPermission(value, permissions = null){

    if (permissions == null || permissions ===false){
        permissions = usePage().props.auth.user.permissions;
    }

    return permissions.find(permission => permission.name === value) !== undefined;
}

/** 
 * Returns true/false
 * Data can be:
 *  - null | function will check global permissions from Inertia page
 *  - array | function will check in given array
 *  - object | function will check list of permissions in 'can' property
*/
export const can = function(permission, data = null){
    if (data == null  || typeof data == "array"){
        return hasPermission(permission, data)
    }

    if (data.can === undefined){
        console.error("Object provided to 'can' function has no 'can' property.")
        return false;
    }

    return data.can[permission]
}