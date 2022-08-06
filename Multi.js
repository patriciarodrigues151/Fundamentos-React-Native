import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'

function Comp() //dar um nome para uma função default é opcional
{
    return <Text style = {Estilo.txtG}>Comp #oficial</Text>
}

function Comp1()
{
    return <Text style = {Estilo.txtG}>Comp #01</Text>
}

function Comp2()
{
    return <Text style = {Estilo.txtG}>Comp #02</Text>
}

export {Comp1, Comp2}
export default Comp

/*
import React from 'react'
import {Text} from 'react-native'

export default function Comp() //dar um nome para uma função default é opcional
{
    return <Text>Comp #oficial</Text>
}

function Comp1()
{
    return <Text>Comp #01</Text>
}

function Comp2()
{
    return <Text>Comp #02</Text>
}

export {Comp1, Comp2}


import React from 'react'
import {Text} from 'react-native'

export default function Comp() //dar um nome para uma função default é opcional
{
    return <Text>Comp #oficial</Text>
}

export function Comp1()
{
    return <Text>Comp #01</Text>
}

export function Comp2()
{
    return <Text>Comp #02</Text>
}




import React from 'react'
import {Text} from 'react-native'

function Comp()
{
    return <Text>Comp #oficial</Text>
}

function Comp1()
{
    return <Text>Comp #01</Text>
}

function Comp2()
{
    return <Text>Comp #02</Text>
}

export {Comp1, Comp2}
*/