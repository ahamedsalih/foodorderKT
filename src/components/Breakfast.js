import React from "react";
import { Text, View } from "react-native";
import {WebView} from "react-native-webview"



const BreakFast=()=>{
    return(
        <WebView  
        source = {{ uri:'https://www.google.com' }}  
    />
    ) 
}


export default BreakFast;