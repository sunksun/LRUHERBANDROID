import { Text, Image, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'

const Herb1 = () => {
  return (
    <ScrollView>
    <View style={styles.headerText} >
        <Text style={{ color: "black", fontSize: 24 }}>แฝกหอม</Text>
    </View>

    <View style={styles.middle} >
        <Image source={require('../img/cover_01.jpg')} style={styles.image390} />
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
    width: 390, // ปรับขนาดของรูปภาพตามที่คุณต้องการ
    height: 250, // ปรับขนาดของรูปภาพตามที่คุณต้องการ
    borderRadius: 10,
  },
  middle: {
    padding: 1,
    flex: 0.40,
    backgroundColor: '#FFFFFF',
    marginTop: 0,
    },
  text: {
    fontSize: 20,
    padding: 10,
  },
});
export default Herb1