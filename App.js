import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';

export default function App() {

 const [sampleState,setSampleState]= useState('no Input');

 const handleChange= function(event){
  setSampleState(event.target.value);
 }

  return (
    
    <ScrollView style={styles.container}>
      <View style={styles.title}>
        <Text style={{fontSize : 20}}>Awesome project React Native</Text>
      </View>
      <View style={styles.dashboard}>
        <Text style={styles.dashboard.text}>Home</Text>
        <Text style={styles.dashboard.text}>Contact</Text>
        <Text style={styles.dashboard.text}>About us</Text>
      </View>
      <View style={styles.main}>
        <Image source={require('./assets/image-test.png') } style={{width: 100, height: 100,marginBottom: 20}}
        />
        <Text style={styles.text}>Open up App.js to start working on your app!</Text>
        <Text style={styles.text}>Hello im using react Native. This is the testing app to learning react Native.
        To try all basic UI element that can be used in React Native</Text>
        <View>
          <TextInput style={{
            borderWidth: 1,
            height: 40,
            width: 200,
            borderColor: 'black',
          }}  defaultValue="Write something for textInput"
          onChangeText={text=> setSampleState(text)}
          />
        
          <Text style={{fontSize: 20, color: 'gray',paddingTop: 10}}>{sampleState}</Text>
        </View>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut tristique nisl. Integer nulla nisi, faucibus nec lectus in, pellentesque sollicitudin lacus. Morbi euismod tincidunt libero eu euismod. Aliquam erat volutpat. Donec euismod imperdiet velit, sed consequat libero scelerisque vel. In faucibus, lectus vel pretium imperdiet, magna nunc hendrerit justo, quis pharetra lacus libero at magna. Sed ac ultrices lectus, quis lobortis mauris. Morbi hendrerit, urna ut semper fringilla, nisi quam efficitur dolor, a euismod est turpis vitae massa. Aliquam pulvinar urna eget tincidunt porttitor. Cras nibh purus, tincidunt nec venenatis quis, tristique efficitur nunc. Integer dignissim, sapien quis dapibus venenatis, augue purus sagittis leo, non ornare augue nisl a diam. Aliquam vitae vulputate arcu. Morbi venenatis dictum est tempor varius. Nullam non nibh in mauris congue ornare in sit amet dui. Praesent aliquam consectetur scelerisque.

            Duis ac tortor ac lorem posuere pellentesque. Proin augue lorem, consectetur vitae urna at, auctor tristique libero. Etiam pulvinar nulla nec elit interdum laoreet. Aenean feugiat nec orci et euismod. Integer in nisl mauris. Vivamus bibendum aliquam turpis sed cursus. Fusce neque mauris, tristique in leo eget, pharetra auctor nisl. Integer vel leo mollis enim consequat blandit. Vivamus neque arcu, auctor eu aliquet scelerisque, fermentum lacinia tellus. Morbi aliquam, ante eu facilisis bibendum, massa neque dignissim sem, quis convallis lacus velit in diam. Quisque gravida eu erat vitae ultricies. Suspendisse dignissim sit amet velit eget placerat. Nullam accumsan ante odio, sit amet posuere est porttitor in. Praesent a neque auctor, pulvinar enim sit amet, semper lacus. Vivamus rutrum est dapibus ornare pretium.

          Pellentesque ac purus a nibh eleifend volutpat sit amet at lorem. In hac habitasse platea dictumst. Curabitur nulla nisl, hendrerit a dictum quis, scelerisque non tellus. Ut id rhoncus nisl. Donec in ligula sit amet lectus ornare ultricies vel nec velit. Pellentesque id volutpat enim. Curabitur commodo ornare nunc, nec convallis nisi. Fusce mauris mi, eleifend at eleifend non, consectetur in risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus nunc mi, condimentum vel augue ut, pretium iaculis quam.</Text>


        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
   paddingTop: 50,
    
  },
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
  main : {
    padding: 10,
    paddingTop: 25,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    

  },
  text: {
    color: 'black',
  
  }
});
