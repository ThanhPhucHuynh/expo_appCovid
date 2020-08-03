// import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import axios from 'axios'
import { StyleSheet, Text, View,SafeAreaView, ScrollView , StatusBar,Alert } from 'react-native';
import HomeScreen from './src/screen/HomeScreen'
import DetailScreen from './src/screen/DetailScreen';
import { Modal, Portal, Button, Provider } from 'react-native-paper';

export default function App() {
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Yêu anh hong ta :v <3",
      "😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪",
      [
        {
          text: "Yes",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  const click = ()=>{
    console.log("A");
    
  }
  const [data, setData] = useState(null)
  useEffect(()=>{
      axios.get("https://code.junookyo.xyz/api/ncov-moh/")
        .then((res) => {
          console.log(res.data);
          setData(res.data)
        })
  },[])
  return (
    
    <Provider>
      <Portal>
     
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        
        <HomeScreen  data={data} />
        <DetailScreen data={data} click={createTwoButtonAlert} />
      </SafeAreaView>
      </Portal>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
