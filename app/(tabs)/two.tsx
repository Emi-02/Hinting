import { Image, Button, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import {colors} from "../../constants/styles"
import * as ContextMenu from "zeego/context-menu"

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/icon.png")}
      style={{width: 40, height: 40}} />
      <Text style={{fontSize: 20}}>Nice to see you again</Text>
      <TouchableOpacity 
        style={{ backgroundColor: colors.lDark, marginTop: 20, marginBottom: 5, borderRadius: 50 }} >
        <Text 
        style={{ color: colors.lWhite, width: 300, height: 30, display: 'flex', alignItems: 'center',
          justifyContent: 'center'
         }}>Email</Text>
      </TouchableOpacity>
        <TouchableOpacity 
        style={{ backgroundColor: colors.lLight, marginBottom: 15, borderRadius: 50}} >
        <Text 
        style={{ color: colors.nDark, width: 300, height: 30, display: 'flex', alignItems: 'center',
          justifyContent: 'center'
         }}>Log in</Text>
      </TouchableOpacity>
        <Text style={{fontSize: 12}}>By continuing you agree to Hinting's Terms of Service and acknowledge you've read our Privacy Policy. Notice at collection</Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
