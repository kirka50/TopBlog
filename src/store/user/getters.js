

function getUser(state) {
    return state.data.user
}
function isLogged(state) {
    return !!state.data.user.name
}
function getUserList(state) {
    return state.data.usersList
}
export default {
    getUser,
    isLogged,
    getUserList
}