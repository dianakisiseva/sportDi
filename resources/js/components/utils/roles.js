import { usePage } from "@inertiajs/inertia-react"

export const isRole = (roleId) => {
    const { auth } = usePage().props;
    if (!auth || !auth.user) {
        return false
    }

    return auth.user.role_id == roleId;
}

