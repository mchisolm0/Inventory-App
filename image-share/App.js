import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import logo from './assets/logo.png';


export default function App() {
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if(permissionResult.granted == false) {
      alert("Permission to access camera roll is required.");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}></Image>
      <Text style={styles.instructions}>To share a photo from your phone with a friend, just press the button below.</Text>
      <TouchableOpacity
        onPress={openImagePickerAsync}
        style={styles.button}>
          <Text style={styles.buttonText}>Pick a photo</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 15,
    padding: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});
