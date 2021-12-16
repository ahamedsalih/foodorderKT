import React from "react";
import { StatusBar, Text, View,Image,Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {WIDTH,HEIGHT} from "../Constant"



class Home extends React.Component{
    render(){
        return(
          <View style={{flex:1}}>
              <StatusBar backgroundColor="#ff9800"/>

              <View style={{flex:1,backgroundColor:"#ff9800",alignItems:"center"}}>

              <Text style={{color:"white",fontWeight:"bold",top:60,fontSize:18}}>Food Order</Text>    

              <View style={{width:WIDTH,height:HEIGHT/1.2,backgroundColor:"white",position:"absolute",bottom:0,borderTopRightRadius:30,borderTopLeftRadius:30,alignItems:"center",justifyContent:"center",elevation:4}}>

               <Text style={{position:"absolute",top:20,fontWeight:"bold"}}>ORDER NOW</Text>


               <Image style={{width:WIDTH/1.5,height:HEIGHT/5,position:"absolute",top:60}} resizeMode="contain" source={require("../Assets/pic1.png")}/>


               <TouchableOpacity onPress={()=>Linking.openURL("https://forms.gle/6yBKHP6C5zSLZvCq5")} style={{width:WIDTH/1.6,height:HEIGHT/12,backgroundColor:"#ff9800",borderRadius:50,elevation:4,alignItems:"center",justifyContent:"center"}}>

               
               <Text style={{color:"white",fontWeight:"bold"}}>BREAK FAST</Text>  


               </TouchableOpacity>

               <TouchableOpacity onPress={()=>Linking.openURL("https://forms.gle/3MRd3eWLKSMEZsww6")} style={{width:WIDTH/1.6,height:HEIGHT/12,backgroundColor:"#ff9800",borderRadius:50,top:30,elevation:4,alignItems:"center",justifyContent:"center"}}>

               <Text style={{color:"white",fontWeight:"bold"}}>DINNER</Text>     

               </TouchableOpacity>


                  
              </View>    

              </View>
             

          </View> 
        )
    }
}

export default Home;


