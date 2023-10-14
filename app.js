const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const data = new FormData(form)

    axios.post('server.php', data)        
        .then((result) => {
            if (result.data.error) {
                console.error('error')
            } else {                
                console.log(`User: ${result.data.user}`)
            }
        })
})