const generateState = () => ({
    data: {
        usersList:['Кирилл Резников','KaiKane'],
        user: {name:'KaiKane'},
        userData: {
            email: '',
            name: '',
            phone:'',
            token:'',
        }
    }
})

export default {...generateState()}