import * as React from 'react';
import {View, Text, StyleSheet,ImageBackground,Image, SafeAreaView,StatusBar,Platform} from 'react-native'; 



export default class UpdateScreen extends React.Component
{

    render(){
            return(

            <View style={styles.container}>
               <SafeAreaView style={styles.androidSafeArea}/>
                    <ImageBackground style={styles.bgImage} source={require('../assets/bg_updates.jpg')}>
                        <View style={styles.titleBar}>
                            <Text style={styles.titleText}> UPDATES ON METEOR  </Text>
                        </View>
                    </ImageBackground>
             </View>
                 )
             }
  
}

const styles=StyleSheet.create({
    container:{
        flex:1, 
    },
    
    bgImage:{flex:1, resizeMode:'cover' },
    iconImage:{position:'absolute', height:180, width:180, resizeMode:'contain', top:-80, right:-10},
    androidSafeArea:{marginTop: Platform.OS==="android" ? StatusBar.currentHeight : 0 },
    titleBar:{flex:0.15,alignItems:'center',justifyContent:"center"},
    titleText:{fontSize:40,fontWeight:'bold', color:"white"}
})