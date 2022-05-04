import reactDom from "react-dom";
import {StyleSheet} from 'react-native';


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
      height : 420,
      marginTop : 50,
      borderRadius : 34,
      borderWidth : 2,
      borderColor : "#ff6610",
      position : 'relative',
    },
     form2 : {
      backgroundColor : "lightgray",
      width : 370,
      height : 455,
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
export default sty ;
