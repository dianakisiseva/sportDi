export const has = (auth, ...roles) => {
  if (!auth || !auth.user) {
    return false
  }

  for (let i = 0; i < roles.length; i++) {
    if (auth.user.roles.includes(roles[i])) {
      return true
    }
  }

  return false
}

export const can = (auth, ...permissions) => {
  if (!auth || !auth.user) {
    return false
  }

  for (let i = 0; i < permissions.length; i++) {
    if (auth.user.permissions.includes(permissions[i])) {
      return true
    }
  }

  return false
}
