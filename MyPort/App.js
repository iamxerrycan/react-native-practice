import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const Name =()=>{
    return(
      <View>
        <Text> sonakshi </Text>
      </View>
    )
  }
  
  return (
    <View >
      {/* <Text style={{fontSize: 30 , justifyContent:"center" , display:"flex" , alignItems:"center"}}>Hello raj!</Text>
      <Text style={{fontSize: 30 , justifyContent:"center" , display:"flex" , alignItems:"center"}}>Hello rahul!</Text>
      <Text style={{fontSize: 30 , justifyContent:"center" , display:"flex" , alignItems:"center"}}>Hello rakesh</Text>
      <StatusBar style="auto" /> */}
      <Name/>
    </View>
  );
}


