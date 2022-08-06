import React from 'react'
import { Button } from 'react-native'

export default props =>{
    const executar = () => console.warn("Exec! #1")


    return(
        <>
            <Button
                title = "Executar#1"
                onPress = {executar} //passando uma referencia para que no momento que for clicado a função será executada. Só é executada quando é clicado o botão atraves do onPress
            />
            <Button
                title = "Executar#2"
                onPress = {function(){
                    console.warn("Exec #2")
                }} //passando uma referencia para que no momento que for clicado a função será executada. Só é executada quando é clicado o botão atraves do onPress
            />
            <Button
                title = "Executar#3"
                onPress = {() => console.warn("Exec #3")}//passando uma referencia para que no momento que for clicado a função será executada. Só é executada quando é clicado o botão atraves do onPress
            />
        </>
    )
}

/*
import React from 'react'
import { Button } from 'react-native'

export default props =>{
    function executar(){
        console.warn("Exec!")
    }
    return(
        <Button
            title = "Executar"
            onPress = {executar} //passando uma referencia para que no momento que for clicado a função será executada. Só é executada quando é clicado o botão atraves do onPress
        />
    )
}
*/