const titulo_login = document.querySelector('h2')
console.log(titulo_login)

titulo_login.style.color = 'red'
titulo_login.style.backgroundColor = 'black'
titulo_login.style.fontSize = '60px'

const button_login = document.querySelector('button')
console.log(button_login)

button_login.style.color = 'black'
button_login.style.backgroundColor = 'violet'
button_login.style.fontSize = '14px'

const userNameImput = document.querySelector('#login-usuario')
console.log(userNameImput)

userNameImput.style.color = 'red'

userNameImput.classList.add('error')
userNameImput.classList.remove('error')

const errorVisible = document.querySelector('.error-text')
console.log(errorVisible)
errorVisible.classList.add('visible')
