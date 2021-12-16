import React, { useEffect, useState } from "react";
import { Animated, StatusBar, Text, View } from "react-native";



const SplashScreen=(props)=>{

    const [circle]=useState(new Animated.Value(0));

   useEffect(()=>{
    
    Animated.timing(circle,{
        toValue:1,
        duration:800,
        useNativeDriver:true
    }).start()

    setTimeout(()=>{

     props.navigation.replace("home")   

    },2000)
   },[])


    return(
        <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#ff9800"}}>
           <StatusBar backgroundColor="#ff9800"/>

           <Animated.View style={{width:150,height:150,backgroundColor:"white",alignItems:"center",justifyContent:"center",borderRadius:100,opacity:circle}}>

            <Text style={{color:"#ff9800",fontWeight:"bold"}}>Food Order</Text>   
  

           </Animated.View>
           
        </View>
    )
}


export default SplashScreen;