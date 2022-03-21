import React, { useState } from 'react';
import { Text, View, Button, Alert } from 'react-native';

//var count = 10;

//const simpleAlert = () => {
  //alert('Contador em ==>' + count);
//};

export default () => {
 // const v = useState(0);
 // let count = v[0];
 // let setCount = v[1];
 
 const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Contador {count}</Text>
      <Button
        title="Incrementa"
        onPress={() => {
          setCount (count + 1);
          //alert('Valor do count ==>' + count);
        }}/>
        <Button 
        title="Incrementa" 
        onPress={() => {
          setCount(count - 0.5);
        }}
        />
      
      
    </View>
  );
};
