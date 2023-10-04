const generateState = () => ({
    data: {
        usersList:['Кирилл Резников','KaiKane'],
        user: {name:''},
        userData: {
            email: '',
            name: '',
            phone:'',
            token:'',
        }
    }
})

export default {...generateState()}