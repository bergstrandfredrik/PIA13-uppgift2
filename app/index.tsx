import { Text, View, Button } from "react-native";
import { useState } from "react";

export default function Index() {
  const [counter, setCounter] = useState(0);

  function incrementCounter () {
    setCounter(counter + 1);
  }
  function decrementCounter () {
    if(counter === 0) return;
    setCounter(counter - 1);
  }
  function resetCounter () {
    setCounter(0);
  }

  
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <View style={{flex: 2}}>
        <Text style={{fontSize: 50}}>{counter}</Text>
      </View>
      <View style={{}}>
        <Button title="plus" onPress={incrementCounter}/>
      </View>
      <View >
        <Button title="minus" onPress={decrementCounter}/>
      </View>
      { counter > 0 &&
        <View>
          <Button title="reset" onPress={resetCounter}/>
        </View>
      }
      <View style={{flex: 10}}></View>
    </View>
  );
}
