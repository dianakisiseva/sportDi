import { usePage } from "@inertiajs/inertia-react";

export const has = (auth, ...roles) => {
    if (!auth || !auth.user) {
        return false;
    }

    for (let i = 0; i < roles.length; i++) {
        if (auth.user.roles.includes(roles[i])) {
            return true;
        }
    }

    return false;
};


export const isUser = (userId) => {
    const {auth} = usePage().props;
    if (!auth || !auth.user){
        return false
    }

    return auth.user.id == userId;
}