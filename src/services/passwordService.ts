export default function generatePass(){
    let password:string = ''
    let caracters:string = 'AGGGgggga@$#1234567890poiuytrewqÇLKJHGFDSA!+_)(*&$#@!'
    let passwordLenght = 16

    for(let index = 0; index < passwordLenght; index++){
        password += caracters.charAt(
            Math.floor(Math.random() * caracters.length)
        )
    }
    
    return password
}