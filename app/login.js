import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,TextInput, Image,TouchableWithoutFeedback} from 'react-native';

export default class login extends React.Component {

render(){
  return(
    <View>
    <View style = {{flexDirection:'row',}}>
   <TouchableWithoutFeedback onPress={()=>this._signin()}><Text style = {{color:'rgb(62,171,186)',fontSize:45,marginLeft:50}}>Signin</Text></TouchableWithoutFeedback>
   <TouchableWithoutFeedback onPress={()=>this._register()}><Text style = {{color:'rgb(234,243,245)',fontSize:45,marginLeft:50}}>Registeration</Text></TouchableWithoutFeedback>
   </View>
   <View style={{flexDirection:'column'}}>
   </View>
{
<View style = {styles.container}>
<View style = {[styles.cstyle,{flexDirection:'row',marginBottom:8}]}>
<Image source={require('components/username.png')} style={[styles.istyle,{flex:.1}]} />
<TextInput style={{flex:.8}}  placeholder="EmailID"></TextInput>
</View>
<View style = {[styles.cstyle,{flexDirection:'row',marginBottom:8}]}>
<Image source = {require('./components/password.png')} style = {[styles.pstyle,{flex:.1}]}/>
<TextInput style =  {{flex:.8}} placeholder="Password"secureTextEntry={true}></TextInput>
</View>
<TouchableOpacity style={styles.button}><Text style = {styles.textstyle}>Login</Text></TouchableOpacity>
<View style = {{flexDirection:'row',marginBottom:8}}>
<Text> New user?   </Text>
<TouchableOpacity onPress={()=>this._register()}><Text style = {{color:'rgb(62,171,186)'}}>Registernow</Text></TouchableOpacity>
</View>
</View>

}

</View>
  )



}

}