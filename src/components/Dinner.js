import React from "react";
import { Text, View } from "react-native";
import {WebView} from "react-native-webview"



const Dinner=()=>{
    return(
        <WebView  
        source = {{ uri:'https://forms.gle/3MRd3eWLKSMEZsww6' }}  
    />
    )
}


export default Dinner;