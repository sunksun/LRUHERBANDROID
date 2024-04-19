import React from 'react'
import { Text, Image, Pressable, StyleSheet, View, ScrollView } from 'react-native'

const Splash = ({navigation}) => {
  const onPress1 = () => {
    navigation.navigate('Herb')
}
const onPress2 = () => {
  navigation.navigate('Source')
}
const onPress3 = () => {
  navigation.navigate('Farmer')
}
    return (
        <View style={{ height: "100%", alignItems: "center", backgroundColor: "#0CA7FF" }}>
        <View style={styles.top} >
          <Image source={require('../img/lru.png')} style={{ width: 120, height: 158 }} />
        </View>
        <View style={styles.headerText}>
          <Text style={{ color: "white", fontSize: 24 }}>สมุนไพรท้องถิ่นไทเลย</Text>
        </View>
        <View style={styles.middle} >
          <Pressable onPress={onPress1}>
            <Image source={require('../img/cover_01.jpg')} style={styles.image390} />
          </Pressable>
        </View>
        <View style={styles.bottom} >
            <Text style={{ color: "white", fontSize: 18 }}>คณะวิทยาศาสตร์และเทคโนโลยี</Text>
            <Text style={{ color: "white", fontSize: 16 }}>มหาวิทยาลัยราชภัฏเลย</Text>
        </View>
      </View>
      
    )
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      padding: 20,
      margin: 10,
    },
    top: {
      padding: 10,
      flex: 0.30,
      backgroundColor: '#0CA7FF',
    },
    headerText: {
    flex: 0.10,
    backgroundColor: '#0CA7FF',
  },
    middle: {
      padding: 1,
        flex: 0.50,
        backgroundColor: '#0CA7FF',
      },
    bottom: {
        width: "100%",
        flex: 0.15,
        backgroundColor: 'hotpink',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image390: {
      width: 390, // ปรับขนาดของรูปภาพตามที่คุณต้องการ
      height: 250, // ปรับขนาดของรูปภาพตามที่คุณต้องการ
      borderRadius: 10,
    },
    image120: {
      width: 120, // ปรับขนาดของรูปภาพตามที่คุณต้องการ
      height: 100, // ปรับขนาดของรูปภาพตามที่คุณต้องการ
      borderRadius: 10,
    },
  });
export default Splash
