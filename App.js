import React , {useState} from 'react';
import {View , Text,TextInput, StyleSheet, Image,TouchableHighlight} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';


import list from './assets/lista.png';
import perfil from './assets/perfilUsuario.png';

const Drw = createDrawerNavigator();

const sty = StyleSheet.create({
    cabecalho : {
      flexDirection : "row",
      width : 358,
      height : 50,
      backgroundColor : "lightgray",
      alignItems : "center",
      justifyContent : "center",
      position : 'relative'
      
     
    },
    Titulo : {
      fontFamily : "Sans-Serif",
      fontWeight : "bold",
      fontSize : 25,
      color : "#ff6610",
      marginLeft : 45
      
    },
    list : {
      width : 30,
      height : 30,
      flexDirection : 'row',
      marginLeft : 10,
    },
    perfil : {
      width : 30,
      height : 30,
      flexDirection : 'row',
      marginLeft : 40 
    },
    form : {
      backgroundColor : "lightgray",
      width : 300,
      height : 355,
      marginTop : 50,
      borderRadius : 34,
      borderWidth : 2,
      borderColor : "#ff6610",
      position : 'relative'
    },
    inp : {
      width : 270,
      height : 24,
      backgroundColor : 'white',
      borderWidth : 1,
      borderTopRightRadius : 5,
      borderTopLeftRadius : 5,
      borderBottomLeftRadius : 5,
      borderBottomRightRadius : 5,
      marginLeft : 10,
      marginBottom : 10 
    },
    Nm : {
    fontSize : 17,
    color : 'rgb(61, 53, 73)',
    fontFamily : 'sans-serif',
    marginLeft : 5,
    marginTop : 15 ,
    marginBottom : 5
  },
   but : {
    fontFamily : 'sans-serif',
    fontSize : 17,
    textAlign : 'center',
    paddingBottom : 10,
    paddingTop : 10,
    color: "rgb(61, 53, 73)",
    fontWeight : 'bold',
    backgroundColor : "lightblue",
    borderWidth : 2,
    marginTop : 20,
    marginLeft : 10,
    marginRight : 10,
    borderRadius : 7,
          


  }
})


function cadastro (){
  return(
    <View style={{flex:1, flexDirection : 'colunmn' , }}>
     <View style={sty.cabecalho}>
        <Image source={list} style={sty.list}/>
        <Text style={sty.Titulo}>PetShop.com</Text>
        <Image source={perfil} style={sty.perfil}/>
     </View>
     <View style={{flex : 1 ,alignItems:"center"}}>
        <View style={sty.form}>
         <Text style ={{fontFamily : "sans-serif",fontWeight : "bold",fontSize : 20, marginTop : 10 , textAlign : "center"}}>
          Cadastro de Produtos </Text>
         <Text style={sty.Nm}>Nome</Text>
         <TextInput name="nmProduto" placeholder="  digite o Nome do produto" style={sty.inp}/>
         <Text style={sty.Nm}>Marca</Text>
         <TextInput name="marcaProduto" placeholder="  digite a marca do produto" style={sty.inp}/>
         <Text style={sty.Nm}>Descrição</Text>
         <TextInput name="descProduto" placeholder="  crie uma descrição do produto" style={sty.inp}/>
          <TouchableHighlight onPress={()=>{
          alert('Cadastrado')
        }}>
          <Text style={sty.but}>Cadastrar</Text>
        </TouchableHighlight>
       </View>
      
     </View>
    </View>
  )
}

function listagem (){
  return(
    <View style={{flex:1}}>
    <Text>mais um texto qualquer</Text>
    </View>
  )
}



function  main(){
    return(
          <NavigationContainer>
            <Drw.Navigator  initialRouteName="Cadastro" screenOptions={{headerShown : false}}>
                <Drw.Screen name="Cadastro" component={cadastro}>
                </Drw.Screen>
                <Drw.Screen name="Listagem" component={listagem}/>
            </Drw.Navigator>
          </NavigationContainer>
    )
}

export default main ; 




