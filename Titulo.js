//para retornar mais de um elemento é importante envolver ele em uma view ou um react.fragment (fragment)
import React from 'react' 
import {Text} from 'react-native'
import Estilo from './estilo'

export default props => (//Usando react.Fragment é possível colocar propriedades, como key
    <React.Fragment key = "1"> 
        <Text style = {Estilo.txtM}>{props.principal}</Text>
        <Text> {props.secundario}</Text>
    </React.Fragment>
)

/*
import React, {Fragment} from 'react' //ou não importar o fragmente e apenas usar <> e </>
import {Text} from 'react-native'
import Estilo from './estilo'

export default props => (//para retornar mais de um elemento é importante envolver ele em uma view ou um react.fragment (fragment)
    <> 
        <Text style = {Estilo.txtM}>{props.principal}</Text>
        <Text> {props.secundario}</Text>
    </>
)

import {Text} from 'react-native'
import Estilo from './estilo'

export default props => (//para retornar mais de um elemento é importante envolver ele em uma view ou um react.fragment (fragment)
    <Fragment> 
        <Text style = {Estilo.txtM}>{props.principal}</Text>
        <Text> {props.secundario}</Text>
    </Fragment>
)

import React from 'react' // sem importar o fragment, apenas referenciando-o na tag
import {Text} from 'react-native'
import Estilo from './estilo'

export default props => (//para retornar mais de um elemento é importante envolver ele em uma view ou um react.fragment (fragment)
    <React.Fragment> 
        <Text style = {Estilo.txtM}>{props.principal}</Text>
        <Text> {props.secundario}</Text>
    </React.Fragment>
)


import React from 'react'
import {View, Text} from 'react-native'
import Estilo from './estilo'

export default props => (//para retornar mais de um elemento é importante envolver ele em uma view ou um react.fragment (fragment)
    <View> 
        <Text style = {Estilo.txtM}>{props.principal}</Text>
        <Text> {props.secundario}</Text>
    </View>
)

*/