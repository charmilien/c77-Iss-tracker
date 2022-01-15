
import * as React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Platform, TouchableOpacity,StatusBar,Image, ImageBackground} from 'react-native'; 


export default class HomeScreen extends React.Component
{

    render(){
            return(

                        <View style={styles.container}>
                            <SafeAreaView style={styles.androidSafeArea}/>
                            <ImageBackground style={styles.bgImage} source={require('../assets/iss_bg.jpg')}>
                            <View style={styles.titleBar}>
                            <Text style={styles.titleText}> ISS TRACKER  </Text>
                            </View>

                            <TouchableOpacity style={styles.routeCard} onPress={()=>this.props.navigation.navigate("Iss")}> 
                                <Text style={styles.routeText}>ISS LOCATION</Text>
                                <Text style={styles.knowMore} > Know More.... </Text>
                                <Text style={styles.digit} > 1 </Text>
                                <Image source={require('../assets/iss_icon.png')} style={styles.iconImage}></Image>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.routeCard} onPress={()=>this.props.navigation.navigate("Meteor")}>
                                <Text style={styles.routeText}>METEORS</Text> 
                                <Text style={styles.knowMore} > Know More.... </Text>
                                <Text style={styles.digit} > 2 </Text>
                                <Image source={require('../assets/meteor_icon.png')} style={styles.iconImage}></Image>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.routeCard} onPress={()=>this.props.navigation.navigate("Update")}>
                                <Text style={styles.routeText}>UPDATE</Text>
                                <Text style={styles.knowMore} > Know More.... </Text>
                                <Text style={styles.digit} > 3 </Text>
                                <Image source={require('../assets/rocket_icon.png')} style={styles.iconImage}></Image>
                            </TouchableOpacity>
                            </ImageBackground>
                        </View>
                 )
             }
  
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"skyblue"
    },

   bgImage:{flex:1, resizeMode:'cover' },
   iconImage:{position:'absolute', height:180, width:180, resizeMode:'contain', top:-80, right:-10},
   androidSafeArea:{marginTop: Platform.OS==="android" ? StatusBar.currentHeight : 0 },
   titleBar:{flex:0.15,alignItems:'center',justifyContent:"center"},
   titleText:{fontSize:40,fontWeight:'bold', color:"white"}, 

   routeCard:{flex:0.25,marginTop:50,marginLeft:50,marginRight:50, borderRadius:30, backgroundColor:"white",},
   routeText:{fontSize:30, fontWeight:"bold", color:"black", marginTop:60,paddingLeft:30},

   knowMore:{paddingLeft:30, color:"red", fontSize:15},
   digit:{position:'absolute',fontSize:100, color: "rgba(183,183,183,0.5)", right:-20, bottom:-15,}
})