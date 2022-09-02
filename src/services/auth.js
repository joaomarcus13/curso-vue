export default httpClient => ({
    login: async({email, password}) =>{
        console.log({email, password})
        const {data} = await httpClient.post('/auth/login',{
            email, password
        })
        let errors = null 

        if(!response.data){
            errors = {
                status: response.request.status,
                statusText: response.request.statusText
            }
        }

        return {
            data,
            errors
        }
    }
})