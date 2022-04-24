import React , {useState} from 'react';
import {View , Text,TextInput, StyleSheet, Image,TouchableHighlight} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import style from './style'
import sacola from './assets/sacola.png';
import list from './assets/lista.png';
import perfil from './assets/perfilUsuario.png';
import editar from './assets/write.png';
import excluir from './assets/excluir.png';

const Drw = createDrawerNavigator();

const sty = StyleSheet.create({
    cabecalho : {
      flexDirection : "row",
      width : 370,
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
      marginLeft : 30
      
    },
    list : {
      width : 30,
      height : 30,
      flexDirection : 'row',
      marginLeft : 2,
    },
    perfil : {
      width : 30,
      height : 30,
      flexDirection : 'row',
      marginLeft : 20 
    },
    sacola : {
      width : 30,
      height : 30,
      flexDirection : 'row',
      marginLeft : 7
    }
    ,
    form1 : {
      backgroundColor : "lightgray",
      width : 300,
      height : 400,
      marginTop : 50,
      borderRadius : 34,
      borderWidth : 2,
      borderColor : "#ff6610",
      position : 'relative',
    },
     form2 : {
      backgroundColor : "lightgray",
      width : 370,
      height : 450,
      marginTop : 50,
      marginRight:20,
      marginLeft:19,
      borderRadius : 34,
      borderWidth : 2,
      borderColor : "#ff6610",
      position : 'relative',
    },
    inp : {
      width : 270,
      height : 30,
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
    marginTop : 10 ,
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
    marginTop : 10,
    marginLeft : 10,
    marginRight : 10,
    borderRadius : 7,
  },
  prod : {
    flexDirection : 'row',
    justifyContent: 'center',
    width : 350,
    height:35,
    backgroundColor:'#dee3d9',
    marginLeft: 10,
    borderRadius:5
  }
 
})


function cadastro (props){
  const [nome , setNome] = useState("");
  const [marca , setMarca] = useState("");
  const [valor , setValor] = useState("");
  const [desc , setDesc] = useState("");
  return(
    <View style={{flex:1 , flexDirection : 'colunm',backgroundColor:'#dee3d9',width:370}}>
     <View style={sty.cabecalho}>
        <Image source={list} style={sty.list}/>
        <Text style={sty.Titulo}>PetShop.com</Text>
        <Image source={perfil} style={sty.perfil}/>
        <Image source={sacola} style={sty.sacola}/>
     </View>
     <View style={{flex : 1 ,alignItems:"center"}}>
        <View style={sty.form1}>
         <Text style ={{
           fontFamily : "sans-serif",
           fontWeight : "bold",fontSize : 20,
           marginTop : 10 , textAlign : "center"}}>
          Cadastro de Produtos </Text>
         <Text style={sty.Nm}>Nome</Text>
         <TextInput name="nmProduto" placeholder="  digite o Nome do produto" style={sty.inp} value={nome} onChangeText={setNome}/>
         <Text style={sty.Nm}>Marca</Text>
         <TextInput name="marcaProduto" placeholder="  digite a marca do produto" style={sty.inp} value={marca} onChangeText={setMarca} />
         <Text style={sty.Nm}>Descrição</Text>
         <TextInput name="descProduto" placeholder="  crie uma descrição do produto" style={sty.inp} value={desc}  onChangeText={setDesc}/>
         <Text style={sty.Nm}>Valor</Text>
          <TextInput name="valorProduto" placeholder=" defina o Valor do produto" style={sty.inp} value={valor} onChangeText={setValor}/>
          <TouchableHighlight onPress={()=>{
          alert('Cadastrado');

          props.add({nome: nome})
          
        }}>
          <Text style={sty.but}>Cadastrar</Text>
        </TouchableHighlight>
       </View>
     </View>
    </View>
  )
}

function listagem (props){

  return(
    <View style={{flex:1 , flexDirection : 'colunm',backgroundColor:'#dee3d9',width:370}}>
    <View style={sty.cabecalho}>
        <Image source={list} style={sty.list}/>
        <Text style={sty.Titulo}>PetShop.com</Text>
        <Image source={perfil} style={sty.perfil}/>
        <Image source={sacola} style={sty.sacola}/>
     </View>
     <View style={{flex:1,alignItems :'center'}}>
       <View style={sty.form2}>
          <Text style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:20,marginTop:10,textAlign:"center"}}>Lista dos Produtos </Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{padding : 10,fontFamily:'arial',fontSize:17}}> Nome </Text>
            <Text style={{padding : 10,fontFamily:'arial',fontSize:17}}> Marca </Text>
            <Text style={{padding : 10,fontFamily:'arial',fontSize:17}}>Descrição</Text>
            <Text style={{padding : 10,fontFamily:'arial',fontSize:17}}>Valor </Text>
        </View>
          <View style={sty.prod}>
            <Text style={{fontFamily:'arial',marginStart:-40,paddingTop:10,fontWeight:'bold',marginHorizontal:4}}> Shampoo </Text> 
            <Text style={{fontFamily:'arial',paddingTop:10,fontWeight:'bold', marginStart:-1}}> Palmolive </Text>
            <Text style={{fontFamily:'arial',paddingTop:10,fontWeight:'bold',marginStart:12}}>Ver Mais </Text>
            <Text style={{fontFamily:'arial',paddingTop:10,fontWeight:'bold',color:'#ff6610',marginLeft:25,marginHorizontal:27}}>22.00 </Text> 
            <Image source={editar} style={{width:20,height:20,position:'absolute',marginLeft:260,marginTop:6}}/>
            <Image source={excluir} style={{width:20,height:20,position:'absolute',marginLeft:320,marginTop:6}}/>     
        </View>
        <View style={sty.prod}>
            <Text style={{fontFamily:'arial',marginStart:-40,paddingTop:10,fontWeight:'bold',marginHorizontal:4}}> Shampoo </Text> 
            <Text style={{fontFamily:'arial',paddingTop:10,fontWeight:'bold', marginStart:-1}}> Palmolive </Text>
            <Text style={{fontFamily:'arial',paddingTop:10,fontWeight:'bold',marginStart:12}}>Ver Mais </Text>
            <Text style={{fontFamily:'arial',paddingTop:10,fontWeight:'bold',color:'#ff6610',marginLeft:25,marginHorizontal:27}}>22.00 </Text> 
            <Image source={editar} style={{width:20,height:20,position:'absolute',marginLeft:260,marginTop:6}}/>
            <Image source={excluir} style={{width:20,height:20,position:'absolute',marginLeft:320,marginTop:6}}/>     
        </View>
    </View>
    </View>
    </View>
  )
}



function  main(){
    return(
          <NavigationContainer>
            <Drw.Navigator  initialRouteName="Cadastro" screenOptions={{headerShown : false}}>
                <Drw.Screen name="Cadastro" component={cadastro}></Drw.Screen>
                <Drw.Screen name="Listagem" component={listagem}></Drw.Screen>
            </Drw.Navigator>
          </NavigationContainer>
    )
}

export default main ; 




