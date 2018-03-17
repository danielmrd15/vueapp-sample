const TOKEN = 'id_token';
export default {
    getToken: function() {
        return window.localStorage.getItem(TOKEN)
    },
    setToken: (tokendata) => {
        return window.localStorage.setItem(TOKEN, tokendata)
    },
    setuser: (userdata) => {
        return window.localStorage.setItem('userdata', userdata)
    }
}