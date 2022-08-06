import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

import Botao from './componentes/Botao'
//import Titulo from './componentes/Titulo'
/* import Primeiro from './componentes/Primeiro'
import CompPadrao, {Comp1, Comp2} from './componentes/Multi'
import MinMax from './componentes/MinMax' */
//import Aleatorio from './componentes/aleatorio'

export default () => ( //instanciando componentes // se usar {3}, ele interpretara como um valor numerico
    <View style = {style.App}>
      <Botao
      />

    {/* 
        <Titulo 
          principal = "Cadastro Produto"
          secundario = "Tela de Cadastro do Produto"
        />

        <Aleatorio min = {1} max = {60}/>
        <Aleatorio min = {1} max = {60}/>
        <Aleatorio min = {1} max = {60}/>
        <Aleatorio min = {1} max = {60}/>
        <Aleatorio min = {1} max = {60}/> */}

        {/*
        <MinMax min = {3} max = {20}/> 
        <MinMax min = "2" max = "10"/>
         <CompPadrao/>
        <Comp1/>
        <Comp2/>
        <Primeiro /> */}
    </View>
)

const style = StyleSheet.create({
    App: {
      //backgroundColor: '#A00',
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20
    }
})
/*

import React from 'react'
import {View} from 'react-native'
import {Text} from 'react-native'
import Primeiro from './componentes/primeiro'

export default () => (<View><Primeiro /></View>)



import React from 'react'
import {View} from 'react-native'
import {Text} from 'react-native'
import Pri from './componentes/primeiro'

export default () => <Pri></Pri>



import React from 'react'
import {Text} from 'react-native'

import blabla from './componentes/primeiro'


export default() => <Text>blabla</Text>


function App()
{
  return <Text>Primeira componente</Text>
}

export default App

export default() => {
  return <Text>Primeira componente</Text>
}

const App = function App()
{
  return <Text>Primeira componente!</Text>
}

export default App

*/

/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>oi</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

*/
