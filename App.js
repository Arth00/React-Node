import React, {useState} from 'react';
import {Text,View,TextInput,TouchableHighlight,SafeAreaView,ScrollView,ToastAndroid,Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import excluir from './assets/circulo-cruzado.png';
import edit from './assets/editar.png';

import sty from './estilo.js';


function Formu (props) {
  const [ nome,setNome ] = useState("");
  const [ cpf,setCpf ] = useState("");
  const [ dtNasc,setDtNasc ] = useState(""); 
 return (
    <View style={sty.corpo}>
      <ScrollView>
        <SafeAreaView>
          <View style={sty.head}>
            <Text style={sty.tit}> Test.Io </Text>
          </View>
          <View style={sty.form1}>
            <Text style={{fontFamily: 'tahoma',textAlign: 'center',
                          fontWeight: 'bold',marginTop: 10,
                          paddingBottom: 15,color: 'rgb(146, 76, 20)',}}>
              CADASTRE-SE !
            </Text>
            <View style={sty.space}>
              <Text style={{fontFamily: 'arial',fontWeight: 'bold',fontSize: 15,}}> Nome: </Text>
              <TextInput 
              placeholder=" digite seu nome completo" style={sty.inpt} value={nome}
              onChangeText={(txt)=>setNome(txt)} maxLength={35} 
              />
            </View>
            <View style={sty.space}>
              <Text style={{ fontFamily: 'arial', fontWeight: 'bold', fontSize: 15}}> CPF: </Text>
              <TextInput 
              placeholder=" digite o CPF sem pontos ou traços" 
              style={sty.inpt} value={cpf} onChangeText={(txt)=>setCpf(txt)}
              maxLength={11}
              />
            </View>
            <View style={sty.space}>
              <Text style={{ fontFamily: 'arial', fontWeight: 'bold', fontSize: 15 }}> Data de Nascimento: </Text>
              <TextInput 
              placeholder=" digite a data sem pontos ou traços"
              style={sty.inpt} value={dtNasc}
              onChangeText={(txt)=>setDtNasc(txt)}
              multiline={true} maxLength={8}
               />
            </View>
            <TouchableHighlight onPress={()=>{
                //alert('Usuário Cadastrado');
                props.add({
                  nome : nome,
                  cpf : cpf,
                  dtNasc : dtNasc
                })
                ToastAndroid.show('Usuário Cadastrado',ToastAndroid.SHORT)   
            }}>
              <View style={{position: 'absolute',backgroundColor: 'rgb(15, 69, 40)',width: 200,
                            height: 35,flexDirection: 'row',alignSelf: 'center',borderRadius: 8}}>
                <Text style={{flexDirection: 'row',alignSelf: 'center',marginLeft: 40,
                fontFamily: 'tahoma',fontSize: 17, color: 'rgb(146, 76, 20)',fontWeight: 'bold'}}> CADASTRAR</Text>
              </View>
            </TouchableHighlight>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
 );
}

function Lista (props) {
  const listView = [];
  for(let i=0;i<props.lista.length;i++){
    let obj = props.lista[i];

    listView.push(
     <View style={sty.vwObjeto}>
      <View style={{borderWidth:1,borderColor:'rgb(146, 76, 20)',height:50,width:98}}>
        <Text style={sty.nmObjeto}>{obj.nome}</Text>
      </View>
      <View style={{borderWidth:1,borderColor:'rgb(146, 76, 20)',height:50,width:99}}>
        <Text style={sty.nmObjeto}>{obj.cpf}</Text>
      </View>
      <View style={{borderWidth:1,borderColor:'rgb(146, 76, 20)',height:50,width:120}}>
        <Text style={sty.nmObjeto}>{obj.dtNasc}</Text>
        <View style={{position:'absolute',width:20,height:48,alignSelf:'end'}}>
          <TouchableHighlight>
            <Image source={excluir} style={sty.excl} />
          </TouchableHighlight>
          <TouchableHighlight>
            <Image source={edit} style={sty.edits} />
          </TouchableHighlight>
        </View>
      </View>
      </View>
      )
  }
  return (
        <View style={sty.corpo}>
         <View style={sty.head}>
            <Text style={sty.tit}> Test.Io </Text>
         </View>
         <View style={{flexDirection:'row'}}>
          <View style={sty.atualiz}>
            <TouchableHighlight><Text style={{fontFamily:'tahoma',fontSize:15}}>Atualizar</Text></TouchableHighlight>
          </View>
          <View style={sty.resetiz}>
            <TouchableHighlight><Text style={{fontFamily:'tahoma',fontSize:15}}>Resetar</Text></TouchableHighlight>
          </View>
         </View>
        <ScrollView style={sty.list2} directionalLockEnabled={true} indicatorStyle='black'>
          <View style={{
            flexDirection:'row',backgroundColor:'rgb(15, 69, 40)',
            height:35,borderTopStartRadius:7,borderTopEndRadius:7,
            borderColor:'rgb(146, 76, 20)',borderBottomWidth:3
            }}>
            <View style={sty.vwTable}><Text style={sty.nmTable}> Nome</Text></View>
            <View style={sty.vwTable}><Text style={sty.nmTable}>CPF</Text></View>
            <View style={sty.vwTableDt}><Text style={sty.nmTableDt}>Data de Nasc.</Text></View>
          </View>
          {listView}
        </ScrollView> 
    </View>
  )
}

const Aba = createBottomTabNavigator();

function Main(props) {
  const [lista,setLista] = useState([]);

  const add =(props)=>{
        const listTemp = [...lista];
        listTemp.push(props);
        setLista(listTemp);
  }
  return (  
      <NavigationContainer>
        <Aba.Navigator screenOptions={{headerShown : false}} initialRouteName="lista" >
          <Aba.Screen name="Formu" >
          {()=> <Formu{...props} add={(props)=>{add(props)}}/>}
          </Aba.Screen>
          <Aba.Screen name="lista"> 
          {(props)=> <Lista{...props} lista={lista} />}
          </Aba.Screen>
        </Aba.Navigator>
      </NavigationContainer>       
  )
    
}

export default Main;
