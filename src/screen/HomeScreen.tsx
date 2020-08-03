import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import { AppLoading } from 'expo';
import { Feather } from '@expo/vector-icons'; 
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
interface prosHome{
    case: string,
    deaths: string,
    recovered: string
}
type listHome = prosHome[]
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F4F4F4',
        flex:1
    },
    header: {
        padding: 10
    },
    headerContent: {
        marginTop: 10
    }
    
})

const HomeScreen = ({data}:any) => {
    const day = new Date()
    const content = 'Corona Virus Case'
    const contentCase = (data)?(data.data['vietnam'].cases)
     : "Something wrong"
    
      let [fontsLoaded] = useFonts({
        Cardo: require('../assets/Cardo-Regular.ttf'),
      });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
    return (
       <View style={styles.container}>
           <View style={styles.header}>
                <Feather name="menu" size={24} color="black" />
                <View style={styles.headerContent}>
                    <Text style={{
                        fontSize: 15,
                        color: 'silver'
                    }}>{day.toString()}</Text>
                    <Text style={{
                        fontSize: 14,
                        marginTop: 10
                    }}>{content}</Text>
                    <Text style={{
                        fontSize: 80,
                        marginTop: 10,
                        color: 'black',
                        fontFamily: "Cardo"  || ""   
                        // fontWeight: "bold"
                    }}>{contentCase}
                         <Text style={{
                        fontSize: 13,
                        marginTop: 10
                    }}>{content} in VN</Text>
                    </Text>
                </View>
           </View>
       </View>
    );}
};

export default HomeScreen;