import React , {useState} from 'react';
import {View , Text,TextInput, StyleSheet, Image,TouchableHighlight} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import sty from './style'
import sacola from './assets/sacola.png';
import list from './assets/lista.png';
import perfil from './assets/perfilUsuario.png';
import editar from './assets/write.png';
import excluir from './assets/excluir.png';






function Cadastro (props){
  //const [teste,setTeste] =useState(2);
  const [nome,setNome] = useState("");
  const [marca,setMarca] = useState("");
  const [valor,setValor] = useState("0");
  const [desc,setDesc] = useState("");

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
         <TextInput name="nmProduto" placeholder="  digite o Nome do produto" style={sty.inp} value={nome} onChangeText={(txt)=>setNome(txt)}/>
         <Text style={sty.Nm}>Marca</Text>

         <TextInput name="marcaProduto" placeholder="  digite a marca do produto" style={sty.inp} value={marca} onChangeText={(txt)=>setMarca(txt)} />
         <Text style={sty.Nm}>Descrição</Text>

         <TextInput name="descProduto" placeholder="  crie uma descrição do produto" style={sty.inp} value={desc}  onChangeText={(txt)=>setDesc(txt)}/>
         <Text style={sty.Nm}>Valor</Text>

          <TextInput name="valorProduto" placeholder=" defina o Valor do produto" style={sty.inp} value={valor} onChangeText={setValor}/>

          <TouchableHighlight 
            onPress={()=>{
              alert('cadastrado');
              props.adicionar({nome:nome, marca:marca, valor:valor, desc:desc})
            }}>
          
           <View> <Text style={sty.but}>Cadastrar</Text> </View>
        </TouchableHighlight>
       </View>
     </View>
    </View>
  )
}

function Listagem(props){
  const listaView =[];
  for(let i=0; i < props.lista.length; i++){
    const registro = props.lista[i];
  listaView.push( 
    <View style={sty.prod}> 
       <Text style={{fontFamily:'arial',marginStart:-40,paddingTop:10,fontWeight:'bold',marginHorizontal:4}}> {registro.nome} </Text> 
       <Text style={{fontFamily:'arial',paddingTop:10,fontWeight:'bold', marginStart:-1}}> {registro.marca} </Text>
       <Text style={{fontFamily:'arial',paddingTop:10,fontWeight:'bold',marginStart:12}}> {registro.desc} </Text>
       <Text style={{fontFamily:'arial',paddingTop:10,fontWeight:'bold',color:'#ff6610',marginLeft:25,marginHorizontal:27}}>{registro.valor}</Text> 
       <Image source={editar} style={{width:20,height:20,position:'absolute',marginLeft:260,marginTop:6}}/>
       <Image source={excluir} style={{width:20,height:20,position:'absolute',marginLeft:320,marginTop:6}}/>  
    </View>           
    );
  }
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
        <View style={{flexDirection:'column',justifyContent: "center",marginLeft: 5,borderRadius:5}}>
          {listaView}  
        </View>
    </View>
    </View>
    </View>
  );
}

const Drw = createDrawerNavigator();

function  Main () {
 
    const [lista,setLista] = useState([]);

    const adicionar =(props)=>{
      const listaTemp = [...lista];
          listaTemp.push(props);
          setLista(listaTemp);
    }
    return(
          <NavigationContainer>
            <Drw.Navigator screenOptions={{headerShown : false}} >
                <Drw.Screen name="Cadastro" >
                {(props)=> <Cadastro {...props} adicionar={(props)=>adicionar(props)}/>}
                </Drw.Screen>
                <Drw.Screen name="Listagem">
                 {(props)=> <Listagem {...props} lista={lista}/>}
                </Drw.Screen>
            </Drw.Navigator>
          </NavigationContainer>
    )
}

export default Main ; 

//  
