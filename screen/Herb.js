import { View, Text, ScrollView, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const Herb = ({navigation}) => {
  const onPressItem = (id, name) => {
    navigation.navigate('Detail', { id: id, name: name })
  }
  return (
    <ScrollView style={{ padding: 10 }}>
      <View style={{ height: "100%", alignItems: "center", backgroundColor: "#ffffff" }}>
        <View style={styles.top}>
            <Image source={require('../img/att/cover_01.jpg')} style={styles.image390} />
            <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 10, paddingHorizontal: 10 }}>
              สมุนไพรท้องถิ่น
            </Text>
        </View>
        <View style={{ flexDirection: 'row', height: 100, padding: 10, width: "100%" }}>
          <View style={{flex: 1}} >
            <Image source={require('../img/img-1.jpg')} style={[styles.image120, { marginRight: 0 }]} />
          </View>
          <View style={{flex: 2}} >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>แฝกหอม</Text>
            <Text style={{ fontSize: 14 }}>ชื่อวิทยาศาสตร์ : </Text>
            <Text style={{ fontSize: 14, fontStyle: 'italic' }}>Ophiopogon intermedius D.Don</Text>
            <Text style={{ fontSize: 14 }}>วงศ์ : Asparagaceae</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', height: 100, padding: 10, width: "100%" }}>
          <View style={{flex: 1}} >
            <Image source={require('../img/img-2.jpg')} style={[styles.image120, { marginRight: 10 }]} />
          </View>
          <View style={{flex: 2}} >
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>โด่ไม่รู้ล้ม</Text>
            <Text style={{ fontSize: 14 }}>ชื่อวิทยาศาสตร์ : </Text>
            <Text style={{ fontSize: 14, fontStyle: 'italic' }}>Elephantopus scaber L.</Text>
            <Text style={{ fontSize: 14 }}>วงศ์ : Asteraceae</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', height: 100, padding: 10, width: "100%" }}>
          <View style={{flex: 1}} >
            <Image source={require('../img/img-3.jpg')} style={[styles.image120, { marginRight: 10 }]} />
          </View>
          <View style={{flex: 2}} >
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>ป่าช้าหมอง</Text>
            <Text style={{ fontSize: 14 }}>ชื่อวิทยาศาสตร์ : </Text>
            <Text style={{ fontSize: 14, fontStyle: 'italic'  }}>Gymnanthemum extensum Steetz</Text>
            <Text style={{ fontSize: 14 }}>วงศ์ : Asteraceae</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', height: 100, padding: 10, width: "100%" }}>
          <View style={{flex: 1}} >
            <Image source={require('../img/img-4.jpg')} style={[styles.image120, { marginRight: 10 }]} />
          </View>
          <View style={{flex: 2}} >
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>กำแพงเจ็ดชั้น</Text>
            <Text style={{ fontSize: 14, fontStyle: 'italic'  }}>Salacia chinensis L.</Text>
            <Text style={{ fontSize: 14 }}>วงศ์ : Celastraceae</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', height: 100, padding: 10, width: "100%" }}>
          <View style={{flex: 1}} >
            <Image source={require('../img/img-5.jpg')} style={[styles.image120, { marginRight: 10 }]} />
          </View>
          <View style={{flex: 2}} >
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>เอื้องหมายนา</Text>
            <Text style={{ fontSize: 14, fontStyle: 'italic'  }}>Cheilocostus speciosus (J.Koenig) C.D.Specht</Text>
            <Text style={{ fontSize: 12 }}>วงศ์ : Costaceae</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff000',
    padding: 10,
    margin: 10,
  },
  top: {
    padding: 5,
    flex: 0.25,
    backgroundColor: '#ffffff',
  },
  headerText: {
  //padding: 2,
  flex: 0.10,
  backgroundColor: '#0CA7FF',
},
  middle: {
    padding: 1,
      flex: 0.45,
      backgroundColor: '#ffffff',
    },
  grid: {
    flexDirection: 'row', // เรียงรูปแนวนอน
    flex: 0.25,
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
    width: 100, // ปรับขนาดของรูปภาพตามที่คุณต้องการ
    height: 80, // ปรับขนาดของรูปภาพตามที่คุณต้องการ
    borderRadius: 10,
    alignContent: 'flex-start',
  },
});
export default Herb