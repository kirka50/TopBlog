const loginUser = (state, payload) => {
    state.data.user = payload
}
const deLoginUser = (state) => {
    state.data.user = {name:''}
}
const updateUserToken = (state, payload) => {
    state.data.user.token = payload
}

export default {
    loginUser,
    updateUserToken,
    deLoginUser
}