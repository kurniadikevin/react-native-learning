import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button } from 'react-native';
import { NativeScreenNavigationContainer } from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Dashboard(props){
    return(
        <View>
            <View style={styles.title}>
            <Text style={{fontSize : 20}}>A project React Native</Text>
        </View>
        <View style={styles.dashboard}>
            <Button style={styles.dashboard.text} title='Home' onPress={()=>{props.navigation.navigate('Home')}}/>
            <Button style={styles.dashboard.text} title='Profile' onPress={()=>{props.navigation.navigate('Profile')}}/>
            <Button style={styles.dashboard.text} title='About' onPress={()=>{props.navigation.navigate('About',{about_id: ''})}}/>
        </View>
        </View>
    )
}


const styles = StyleSheet.create({
    title : {
        display: 'flex',
        flexDirection : 'row',
        justifyContent: 'center',
        paddingBottom: 10,
      },
      dashboard:{
        display: 'flex',
        flexDirection : 'row',
        height: 50,
        justifyContent: 'center',
        alignItems:'center',
        text : {
          paddingRight : 10,
          paddingLeft : 10,
        }
      },

})