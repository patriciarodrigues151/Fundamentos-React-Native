import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default(props) =>{ //destructure (ler algo de um objeto)
    min = props.min
    max = props.max
    const delta = max - min + 1
    const aleatorio = parseInt(Math.random() * delta) + min
    setTimeout(() => aleatorio = parseInt(Math.random() * delta)+min, 2000)
    return(
        <Text style = {Estilo.txtM}>
            O número aleatório entre {min} e {max} é {aleatorio} 
        </Text>
    )
}

/*

function DezSegundos(){ //consta tempo segundos que passaram
    alert("Já temos dez segundos.");
}
setTimeout(DezSegundos, 1000*10)


import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default(props) =>{ //destructure (ler algo de um objeto)
    props.max += 2000
    props.min += 1000
    let {min, max} = props // destructure // se por obj.freeze(congela o valor do objeto ou seja ele não mudara. Só mudará aqui (localmente))
    min += 10000
    max += 10000

    //o ideal é criar uma nova const variável para usar os valores dos parametros
    const delta = max - min + 1
    const aleatorio = parseInt(Math.random() * delta) + min
    return(
        <Text style = {Estilo.txtM}>
            O número aleatório entre {min} e {max} é {aleatorio} 
        </Text>
    )
}


export default({min, max}) =>{
    const delta = max - min + 1
    const aleatorio = parseInt(Math.random() * delta) + min
    return(
        <Text style = {Estilo.txtM}>
            O número aleatório entre {min} e {max} é {aleatorio} 
        </Text>
    )
}

export default(props) =>{
    const {min, max} = props
    const delta = max - min + 1
    const aleatorio = parseInt(Math.random() * delta) + min
    return(
        <Text style = {Estilo.txtM}>
            O número aleatório entre {min} e {max} é {aleatorio} 
        </Text>
    )
}
*/