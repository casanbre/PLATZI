const userDataBase = [
    {
        username: "carlos",
        password: "123",
    },
    {
        username: "juan",
        password: "456",
    },
    {
        username: "felipe",
        password: "789",
    },
]

const Mtime = [
    {
        username: "Juliana",
        time: "Hoy tengo sueño",
    },
    {
        username: "Natalia",
        time: "Amo la programacion"
    }

]


class Usuario{
    constructor(username,password) {
        this.username = username
        this.password = password
    }

    validar(){
        const userExito = userDataBase.some(user => user.username === this.username && user.password === this.password)
        if(userExito){
            console.log("WELCOME")

            for(let r= 0;r < Mtime.length; r++){
                console.log(Mtime[r].username, Mtime[r].time)
            }
            
            
        }
        else{
            console.log("ERROR")
        }
    }

}

function Work (){
    const nombre = prompt("DIGITE USUARIO")
    const pass_string = prompt("DIGITE CONTRASEÑA")
    
    const nuevo = parseFloat(pass_string)

    const usuario1 = new Usuario (nombre,pass_string)
    usuario1.validar()
}



function CrearUsuario (){
    const nombre = prompt("DIGITE USUARIO")
    const pass_string = prompt("DIGITE CONTRASEÑA")
    const nuevo = parseFloat(pass_string)

    const Agregar = {username: nombre , password: nuevo}

    userDataBase.push(Agregar)

}

function Admin(){
    for( i = 0; i< userDataBase.length; i++){
        console.log(`Usuario: ${userDataBase[i].username} Contraseña ${userDataBase[i].password}`)
    }
}

    function Inicio (){

        let salir = false;

        while  (!salir){
            let  opcion = parseInt(prompt("DIGITE OPCION: 1. INICIAR SECCION 2. CREAR  3. ADMIN 4.SALIR"))
            
            switch(opcion){
                
                case 1:
                    Work()
                    break
                case 2:
                    CrearUsuario()
                    break
                case 3:
                    Admin()
                    break
                case 4:
                    console.log("saliendo")
                    salir = true;
                    break
                default:
                    console.log("DIGITE UN OPCION VALIDA")
                    break;
            
            }
        }
    }

Inicio()

      
    



