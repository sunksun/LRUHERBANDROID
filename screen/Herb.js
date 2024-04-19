import { View, Text, ScrollView, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const Herb = ({navigation}) => {
  const onPressItem1 = () => {
    navigation.navigate('Item1')
  }
  return (
    <ScrollView>
      <View style={{ height: "100%", alignItems: "center", backgroundColor: "#ffffff" }}>
        <View style={styles.top}>
            <Image source={require('../img/cover_01.jpg')} style={styles.image390} />
            <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 10, paddingHorizontal: 10 }}>
              สมุนไพรท้องถิ่น
            </Text>
        </View>
        <Pressable onPress={onPressItem1}>
        <View style={styles.row}>
          <View style={{flex: 1}} >
            <Image source={require('../img/img-1.jpg')} style={[styles.image100, { marginRight: 0 }]} />
          </View>
          <View style={{flex: 2}} >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>แฝกหอม</Text>
            <Text style={{ fontSize: 14 }}>ชื่อวิทยาศาสตร์ : </Text>
            <Text style={{ fontSize: 14, fontStyle: 'italic' }}>Ophiopogon intermedius D.Don</Text>
            <Text style={{ fontSize: 14 }}>วงศ์ : Asparagaceae</Text>
          </View>
        </View>
        </Pressable>
        <Pressable onPress={onPressItem1}>
        <View style={styles.row}>
          <View style={{flex: 1}} >
            <Image source={require('../img/img-2.jpg')} style={[styles.image100, { marginRight: 10 }]} />
          </View>
          <View style={{flex: 2}} >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>โด่ไม่รู้ล้ม</Text>
            <Text style={{ fontSize: 14 }}>ชื่อวิทยาศาสตร์ : </Text>
            <Text style={{ fontSize: 14, fontStyle: 'italic' }}>Elephantopus scaber L.</Text>
            <Text style={{ fontSize: 14 }}>วงศ์ : Asteraceae</Text>
          </View>
        </View>
        </Pressable>
        <Pressable onPress={onPressItem1}>
        <View style={styles.row}>
          <View style={{flex: 1}} >
            <Image source={require('../img/img-3.jpg')} style={[styles.image100, { marginRight: 10 }]} />
          </View>
          <View style={{flex: 2}} >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>ป่าช้าหมอง</Text>
            <Text style={{ fontSize: 14 }}>ชื่อวิทยาศาสตร์ : </Text>
            <Text style={{ fontSize: 14, fontStyle: 'italic'  }}>Gymnanthemum extensum Steetz</Text>
            <Text style={{ fontSize: 14 }}>วงศ์ : Asteraceae</Text>
          </View>
        </View>
        </Pressable>
        <Pressable onPress={onPressItem1}>
        <View style={styles.row}>
          <View style={{flex: 1}} >
            <Image source={require('../img/img-4.jpg')} style={[styles.image100, { marginRight: 10 }]} />
          </View>
          <View style={{flex: 2}} >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>กำแพงเจ็ดชั้น</Text>
            <Text style={{ fontSize: 14 }}>ชื่อวิทยาศาสตร์ : </Text>
            <Text style={{ fontSize: 14, fontStyle: 'italic'  }}>Salacia chinensis L.</Text>
            <Text style={{ fontSize: 14 }}>วงศ์ : Celastraceae</Text>
          </View>
        </View>
        </Pressable>
        <Pressable onPress={onPressItem1}>
        <View style={styles.row}>
          <View style={{flex: 1}} >
            <Image source={require('../img/img-5.jpg')} style={[styles.image100, { marginRight: 10 }]} />
          </View>
          <View style={{flex: 2}} >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>เอื้องหมายนา</Text>
            <Text style={{ fontSize: 14 }}>ชื่อวิทยาศาสตร์ : </Text>
            <Text style={{ fontSize: 14, fontStyle: 'italic'  }}>Cheilocostus speciosus (J.Koenig) C.D.Specht</Text>
            <Text style={{ fontSize: 12 }}>วงศ์ : Costaceae</Text>
          </View>
        </View>
        </Pressable>
        <Pressable onPress={onPressItem1}>
        <View style={styles.row}>
          <View style={{flex: 1}} >
            <Image source={require('../img/img-6.jpg')} style={styles.image100} />
          </View>
          <View style={{flex: 2}} >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>หญ้าแห้วหมู</Text>
            <Text style={{ fontSize: 14 }}>ชื่อวิทยาศาสตร์ : </Text>
            <Text style={{ fontSize: 14, fontStyle: 'italic'  }}>Cyperrus rotundus L.</Text>
            <Text style={{ fontSize: 12 }}>วงศ์ : Cyperaceae</Text>
          </View>
        </View>
        </Pressable>
        <Pressable onPress={onPressItem1}>
        <View style={styles.row}>
          <View style={{flex: 1}} >
            <Image source={require('../img/img-7.jpg')} style={styles.image100} />
          </View>
          <View style={{flex: 2}} >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>เปล้าใหญ่</Text>
            <Text style={{ fontSize: 14 }}>ชื่อวิทยาศาสตร์ : </Text>
            <Text style={{ fontSize: 14, fontStyle: 'italic'  }}>Croton roxburghii N.P. Balaker.</Text>
            <Text style={{ fontSize: 12 }}>วงศ์ : Euphorbiaceae</Text>
          </View>
        </View>
        </Pressable>
        <Pressable onPress={onPressItem1}>
        <View style={styles.row}>
          <View style={{flex: 1}} >
            <Image source={require('../img/img-8.jpg')} style={styles.image100} />
          </View>
          <View style={{flex: 2}} >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>หญ้างวงช้าง</Text>
            <Text style={{ fontSize: 14 }}>ชื่อวิทยาศาสตร์ : </Text>
            <Text style={{ fontSize: 14, fontStyle: 'italic'  }}>Heliotropium indicum L</Text>
            <Text style={{ fontSize: 12 }}>วงศ์ : Boraginaceae</Text>
          </View>
        </View>
        </Pressable>
        <Pressable onPress={onPressItem1}>
        <View style={styles.row}>
          <View style={{flex: 1}} >
            <Image source={require('../img/img-9.jpg')} style={styles.image100} />
          </View>
          <View style={{flex: 2}} >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>กระบก</Text>
            <Text style={{ fontSize: 14 }}>ชื่อวิทยาศาสตร์ : </Text>
            <Text style={{ fontSize: 14, fontStyle: 'italic'  }}>Irvingia malayana Oliv. ex A.W.Benn.</Text>
            <Text style={{ fontSize: 12 }}>วงศ์ : Irvingiaceae</Text>
          </View>
        </View>
        </Pressable>
        <Pressable onPress={onPressItem1}>
        <View style={styles.row}>
          <View style={{flex: 1}} >
            <Image source={require('../img/img-10.jpg')} style={styles.image100} />
          </View>
          <View style={{flex: 2}} >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>อัคคีทวาร</Text>
            <Text style={{ fontSize: 14 }}>ชื่อวิทยาศาสตร์ : </Text>
            <Text style={{ fontSize: 14, fontStyle: 'italic'  }}>Rotheca serrata (L.) Steane & Mabb.</Text>
            <Text style={{ fontSize: 12 }}>วงศ์ : Lamiaceae</Text>
          </View>
        </View>
        </Pressable>
        <Pressable onPress={onPressItem1}>
        <View style={styles.row}>
          <View style={{flex: 1}} >
            <Image source={require('../img/img-11.jpg')} style={styles.image100} />
          </View>
          <View style={{flex: 2}} >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>กระตังใบ</Text>
            <Text style={{ fontSize: 14 }}>ชื่อวิทยาศาสตร์ : </Text>
            <Text style={{ fontSize: 14, fontStyle: 'italic'  }}>Leea indica (Burm.f) Merr.</Text>
            <Text style={{ fontSize: 12 }}>วงศ์ : Leeaceae</Text>
          </View>
        </View>
        </Pressable>
        <Pressable onPress={onPressItem1}>
        <View style={styles.row}>
          <View style={{flex: 1}} >
            <Image source={require('../img/img-12.jpg')} style={styles.image100} />
          </View>
          <View style={{flex: 2}} >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>กระโดน</Text>
            <Text style={{ fontSize: 14 }}>ชื่อวิทยาศาสตร์ : </Text>
            <Text style={{ fontSize: 14, fontStyle: 'italic'  }}>Careya arborea Roxb</Text>
            <Text style={{ fontSize: 12 }}>วงศ์ : Lecythidaceae</Text>
          </View>
        </View>
        </Pressable>
        <Pressable onPress={onPressItem1}>
        <View style={styles.row}>
          <View style={{flex: 1}} >
            <Image source={require('../img/img-13.jpg')} style={styles.image100} />
          </View>
          <View style={{flex: 2}} >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>ตูมกา</Text>
            <Text style={{ fontSize: 14 }}>ชื่อวิทยาศาสตร์ : </Text>
            <Text style={{ fontSize: 14, fontStyle: 'italic'  }}>Strychnos nux-blanda A.W.Hill</Text>
            <Text style={{ fontSize: 12 }}>วงศ์ : Loganiaceae</Text>
          </View>
        </View>
        </Pressable>
        <Pressable onPress={onPressItem1}>
        <View style={styles.row}>
          <View style={{flex: 1}} >
            <Image source={require('../img/img-14.jpg')} style={styles.image100} />
          </View>
          <View style={{flex: 2}} >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>ช้างน้าว</Text>
            <Text style={{ fontSize: 14 }}>ชื่อวิทยาศาสตร์ : </Text>
            <Text style={{ fontSize: 14, fontStyle: 'italic'  }}>Ochna integerrima (Lour.) Merr.</Text>
            <Text style={{ fontSize: 12 }}>วงศ์ : Ochnaceae</Text>
          </View>
        </View>
        </Pressable>
        <Pressable onPress={onPressItem1}>
        <View style={styles.row}>
          <View style={{flex: 1}} >
            <Image source={require('../img/img-15.jpg')} style={styles.image100} />
          </View>
          <View style={{flex: 2}} >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>ส่องฟ้า</Text>
            <Text style={{ fontSize: 14 }}>ชื่อวิทยาศาสตร์ : </Text>
            <Text style={{ fontSize: 14, fontStyle: 'italic'  }}>Clausena wallichii Oliv.</Text>
            <Text style={{ fontSize: 12 }}>วงศ์ : Rutaceae</Text>
          </View>
        </View>
        </Pressable>
        <Pressable onPress={onPressItem1}>
        <View style={styles.row}>
          <View style={{flex: 1}} >
            <Image source={require('../img/img-16.jpg')} style={styles.image100} />
          </View>
          <View style={{flex: 2}} >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>ตูดหมูตูดหมา</Text>
            <Text style={{ fontSize: 14 }}>ชื่อวิทยาศาสตร์ : </Text>
            <Text style={{ fontSize: 14, fontStyle: 'italic'  }}>Paederia  linearis Hook.f.</Text>
            <Text style={{ fontSize: 12 }}>วงศ์ : Rubiaceae</Text>
          </View>
        </View>
        </Pressable>
        <Pressable onPress={onPressItem1}>
        <View style={styles.row}>
          <View style={{flex: 1}} >
            <Image source={require('../img/img-17.jpg')} style={styles.image100} />
          </View>
          <View style={{flex: 2}} >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>มะคังแดง</Text>
            <Text style={{ fontSize: 14 }}>ชื่อวิทยาศาสตร์ : </Text>
            <Text style={{ fontSize: 14, fontStyle: 'italic'  }}>Dioecrescis erythroclada (Kurz) Tirveng.</Text>
            <Text style={{ fontSize: 12 }}>วงศ์ : Rubiaceae</Text>
          </View>
        </View>
        </Pressable>
        <Pressable onPress={onPressItem1}>
        <View style={styles.row}>
          <View style={{flex: 1}} >
            <Image source={require('../img/img-18.jpg')} style={styles.image100} />
          </View>
          <View style={{flex: 2}} >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>คำมอกหลวง</Text>
            <Text style={{ fontSize: 14 }}>ชื่อวิทยาศาสตร์ : </Text>
            <Text style={{ fontSize: 14, fontStyle: 'italic'  }}>Gardenia sootepensis Hutch.</Text>
            <Text style={{ fontSize: 12 }}>วงศ์ : Rubiaceae</Text>
          </View>
        </View>
        </Pressable>
        <Pressable onPress={onPressItem1}>
        <View style={styles.row}>
          <View style={{flex: 1}} >
            <Image source={require('../img/img-19.jpg')} style={styles.image100} />
          </View>
          <View style={{flex: 2}} >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>สีดาโคก ไข่เน่าน้ย</Text>
            <Text style={{ fontSize: 14 }}>ชื่อวิทยาศาสตร์ : </Text>
            <Text style={{ fontSize: 14, fontStyle: 'italic'  }}>Gardenia obtusifolia Roxb. ex Hook.f.</Text>
            <Text style={{ fontSize: 12 }}>วงศ์ : Rubiaceae</Text>
          </View>
        </View>
        </Pressable>
        <Pressable onPress={onPressItem1}>
        <View style={styles.row}>
          <View style={{flex: 1}} >
            <Image source={require('../img/img-20.jpg')} style={styles.image100} />
          </View>
          <View style={{flex: 2}} >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>ยอป่า</Text>
            <Text style={{ fontSize: 14 }}>ชื่อวิทยาศาสตร์ : </Text>
            <Text style={{ fontSize: 14, fontStyle: 'italic'  }}>Morinda coreia Buch.-Ham.</Text>
            <Text style={{ fontSize: 12 }}>วงศ์ : Rubiaceae</Text>
          </View>
        </View>
        </Pressable>
        <Pressable onPress={onPressItem1}>
        <View style={styles.row}>
          <View style={{flex: 1}} >
            <Image source={require('../img/img-21.jpg')} style={styles.image100} />
          </View>
          <View style={{flex: 2}} >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>กระทุ่มนา</Text>
            <Text style={{ fontSize: 14 }}>ชื่อวิทยาศาสตร์ : </Text>
            <Text style={{ fontSize: 14, fontStyle: 'italic'  }}>Mitragyna hirsuta Havil.</Text>
            <Text style={{ fontSize: 12 }}>วงศ์ : Rubiaceae</Text>
          </View>
        </View>
        </Pressable>
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
  row: { 
    flexDirection: 'row', 
    height: 100, 
    padding: 5, 
    width: "100%",
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
    width: 380, // ปรับขนาดของรูปภาพตามที่คุณต้องการ
    height: 250, // ปรับขนาดของรูปภาพตามที่คุณต้องการ
    borderRadius: 10,
  },
  image100: {
    width: 100, // ปรับขนาดของรูปภาพตามที่คุณต้องการ
    height: 80, // ปรับขนาดของรูปภาพตามที่คุณต้องการ
    borderRadius: 10,
    marginRight: 10,
    alignContent: 'flex-start',
  },
});
export default Herb