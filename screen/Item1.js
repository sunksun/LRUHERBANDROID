import { Text, Image, Pressable, StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'

const Item1 = () => {
    return (
        <ScrollView>
        <View style={styles.middle} >
            <Image source={require('../img/img-1.jpg')} style={styles.image390} />
            <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 10 }}>
              ลักษณะทางพฤกษศาสตร์
              </Text>
            <Text style={styles.text}>
            ไม้ล้มลุกหลายปี ลำต้นใต้ดินสั้น ใบเป็นกอหนา ใบเรียวยาว แบน ไม่มีก้านใบ แผ่นใบด้านบนสีเขียวเข้ม แผ่นใบด้านล่างสีเขียวหม่น ขอบใบเรียบ ปลายใบแหลมถึงมน ดอกเป็นช่อ ดอกย่อยจำนวนมาก  ดอกย่อยอยู่เป็นกลุ่ม บางกลุ่มมี 2-3 ดอก บางครั้งพบดอกเดียว กลีบดอก 5 กลีบ สีขาวหรือขาวเขียวตอนปลายกลีบ รูปขอบขนาน หรือรูปรี  เมล็ดรูปรี
            </Text>
    
            <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 10 }}>
            สรรพคุณ
            </Text>
            <Text style={styles.text}>
            -
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

export default Item1