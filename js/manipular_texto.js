var message, email

message = 'Estou estudando javascript'
console.log(message.substring(5))
console.log(message.length)

email = 'JOSEVICTOR@gmail.com'

console.log(email.substring(0, email.indexOf('@')).toLocaleLowerCase())
//console.log(email.substring(email.indexOf('@')))