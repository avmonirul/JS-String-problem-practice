const userName = 'blackpink';
const userInput = 'blackpinK';
console.log(userName.toLowerCase());
if (userName.toLocaleLowerCase() === userInput.toLocaleLowerCase()){
    console.log('valid user')
}
else{
    console.log('invalid user')
}