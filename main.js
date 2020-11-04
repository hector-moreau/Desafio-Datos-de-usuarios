const userModule = (() => {

    async function init() {
        const { results: users } = await getUsers()
        render(users)
    }

    async function getUsers() {
        try{
            const response = await fetch('https://randomuser.me/api/?results=18')
            const resp = await response.json()
            return resp
        } catch (error) {
            console.error(error)
            return error
        }
    }

    function render(users) {
        const user_data = document.querySelector('#user-data')
        const html = users.map(user => `<div class="card col-2"> 
        <img src="${user.picture.large}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
            <p  class="card-text"><strong>Teléfono:</strong>${user.phone}</p>
            <p  class="card-text"><strong>Email:</strong>${user.email}</p>
        </div>
        </div>`)

        const user_data_ul = document.createElement('ul')
        user_data_ul.className = 'row'
        user_data_ul.innerHTML = html.join(' ')
        user_data.appendChild(user_data_ul)
    }


        return { init }

})();


userModule.init()
