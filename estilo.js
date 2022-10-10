import {StyleSheet} from 'react-native';

const sty = StyleSheet.create({
    corpo : {
      flex: 1,
      flexDirection : 'colunm',
      backgroundColor : 'lightgray'
    },
    head : {
      flexDirection:'row',
      width: 320,
      height: 65,
      backgroundColor:'rgb(15, 69, 40)',
      borderBottomLeftRadius:7,
      borderBottomRightRadius:7,
      alignSelf:'center'
    },
    tit:{
      fontSize:30,
      alignSelf:'center',
      marginLeft:100,
      fontWeight:'bold',
      fontFamily: 'tahoma',
      color:'rgb(146, 76, 20)'
    },
    form1:{
      flexDirection:'column',
      backgroundColor:'white',
      marginTop:100,
      height:300,
      width:320,
      alignSelf:'center',
      borderRadius:15,
      borderColor:'rgb(15, 69, 40)',
      borderStyle:'solid',
      borderWidth:2,
      position:'absolute'
    },
    space:{
      marginLeft:15,
      paddingBottom:15,
      maxWidth:250
    },
    inpt:{
      backgroundColor:'lightgray',
      width:250,
      height:30,
      marginTop:10,
      borderColor:'rgb(112, 163, 242)',
      borderStyle:'solid',
      borderRadius:5,
      borderWidth:2,
      fontFamily:'arial'
    },
    list2:{
    flexDirection:'column',
    backgroundColor:'white',
    marginTop:120, 
    alignSelf:'center',
    borderRadius:15,
    borderColor:'rgb(15, 69, 40)',
    borderStyle:'solid',
    borderWidth:2,
    position:'absolute',
    height:350,
    width:330,
    },
    vwTable:{
      flexDirection:'column',
      alignItems:'center',
      borderRightWidth:2,
      height:32,
      width:100,
      borderColor:'rgb(146, 76, 20)',
      
    },
    vwTableDt:{
      flexDirection:'column',
      alignItems:'center',
      height:32,
      width:150, 
    },
    nmTable:{
      fontFamily:'tahoma',
      fontSize:18,
      marginTop:5,
    },
    nmTableDt:{
    fontFamily:'tahoma',
    fontSize:16,
    marginTop:8,
    marginLeft:-20 
    },
    vwObjeto:{
      flexDirection:'row',
      alignSelf:'center',
      backgroundColor:'lightgray',
      marginTop:4,
      width:318,
      height:50,
      borderBottomStartRadius:4,
      borderBottomEndRadius:4
    },
    nmObjeto:{
     flexDirection:'row',
     fontFamily:'arial',
     fontSize:14,
     textAlign:'start',
     paddingTop:5,
      
    },
    excl:{
      width:15,
      height:15,
      marginTop:5,
      marginLeft:1
    },
    edits:{
      width:15,
      height:15,
      marginTop:10,
      marginLeft:3
    },
    atualiz:{
     backgroundColor:'rgb(15, 69, 40)',
     width:85,
     height:25,
     borderRadius:4,
     position:'absolute',
     paddingLeft:10,
     marginLeft:20,
     marginTop:20,
     borderWidth:1,
     borderColor:'darkgreen' 
    },
    resetiz:{
     backgroundColor:'rgb(15, 69, 40)',
     width:85,
     height:25,
     borderRadius:4,
     position:'absolute',
     marginLeft:230,
     marginTop:20,
     paddingLeft:10,
     borderWidth:1,
     borderColor:'darkgreen'
    }

    
});

export default sty;