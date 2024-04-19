import { Text, Image, Pressable, StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'

const Farmer = () => {
  return (
    <ScrollView>
        <View style={styles.middle} >
            <Image source={require('../img/farmers.jpg')} style={styles.image390} />
            <Text style={{ fontWeight: 'bold', fontSize: 24, padding: 10, textAlign: 'center' }}>
              นายสังสรรค์ หล้าพันธ์
            </Text>
            <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 10 }}>
              ลักษณะทางพฤกษศาสตร์
            </Text>
            <Text style={styles.text}>
              xxx
            </Text>
    
            <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 10 }}>
            สรรพคุณ
            </Text>
            <Text style={styles.text}>
              xxx
            </Text>
    
        </View>
          
        </ScrollView>
      )
    }
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        padding: 20,
        margin: 10,
      },
      headerText: {
      padding: 1,
      flex: 0.10,
      backgroundColor: '#FFFFFF',
      },
      image390: {
        width: 380, // ปรับขนาดของรูปภาพตามที่คุณต้องการ
        height: 250, // ปรับขนาดของรูปภาพตามที่คุณต้องการ
        borderRadius: 10,
      },
      image120: {
        width: 120, // ปรับขนาดของรูปภาพตามที่คุณต้องการ
        height: 100, // ปรับขนาดของรูปภาพตามที่คุณต้องการ
        borderRadius: 10,
      },
      middle: {
        padding: 5,
        flex: 0.40,
        backgroundColor: '#FFFFFF',
        marginTop: 0,
        },
      text: {
        fontSize: 20,
        padding: 10,
      },
    });

export default Farmer