const userIsAdmin = ({authentication: { item: user }}) => Boolean(user && user.isAdmin)

exports.userIsAdmin = userIsAdmin
