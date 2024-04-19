import { View, Text, ScrollView, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const Herb = ({navigation}) => {
  const onPressItem = (id, name) => {
    navigation.navigate('Item1', { id: id, name: name })
  }
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
        <Pressable onPress={() => onPressItem(1, 'แฝกหอม')}>
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
        <Pressable onPress={() => onPressItem(2, 'โด่ไม่รู้ล้ม')}>
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
        <Pressable onPress={() => onPressItem(3, 'ป่าช้าหมอง')}>
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
        <Pressable onPress={() => onPressItem(4, 'กำแพงเจ็ดชั้น')}>
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
        <Pressable onPress={() => onPressItem(5, 'เอื้องหมายนา')}>
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
        <Pressable onPress={() => onPressItem(6, 'หญ้าแห้วหมู')}>
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
        <Pressable onPress={() => onPressItem(7, 'เปล้าใหญ่')}>
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
        <Pressable onPress={() => onPressItem(8, 'หญ้างวงช้าง')}>
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
        <Pressable onPress={() => onPressItem(9, 'กระบก')}>
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
        <Pressable onPress={() => onPressItem(10, 'อัคคีทวาร')}>
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
        <Pressable onPress={() => onPressItem(11, 'กระตังใบ')}>
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
        <Pressable onPress={() => onPressItem(12, 'กระโดน')}>
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
        <Pressable onPress={() => onPressItem(13, 'ตูมกา')}>
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
        <Pressable onPress={() => onPressItem(14, 'ช้างน้าว')}>
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
        <Pressable onPress={() => onPressItem(15, 'ส่องฟ้า')}>
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
        <Pressable onPress={() => onPressItem(16, 'ตูดหมูตูดหมา')}>
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
        <Pressable onPress={() => onPressItem(17, 'มะคังแดง')}>
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
        <Pressable onPress={() => onPressItem(18, 'คำมอกหลวง')}>
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
        <Pressable onPress={() => onPressItem(19, 'สีดาโคก ไข่เน่าน้ย')}>
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
        <Pressable onPress={() => onPressItem(20, 'ยอป่า')}>
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
        <Pressable onPress={() => onPressItem(21, 'กระทุ่มนา')}>
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
        <Pressable onPress={() => onPressItem(22, 'เหมือดคน')}>
        <View style={styles.row}>
          <View style={{flex: 1}} >
            <Image source={require('../img/img-22.jpg')} style={styles.image100} />
          </View>
          <View style={{flex: 2}} >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>เหมือดคน</Text>
            <Text style={{ fontSize: 14 }}>ชื่อวิทยาศาสตร์ : </Text>
            <Text style={{ fontSize: 14, fontStyle: 'italic'  }}>Scleropyrum pentandrum (Dennst.) Mabb.</Text>
            <Text style={{ fontSize: 12 }}>วงศ์ : Santalaceae</Text>
          </View>
        </View>
        </Pressable>
        <Pressable onPress={() => onPressItem(23, 'คนทา')}>
        <View style={styles.row}>
          <View style={{flex: 1}} >
            <Image source={require('../img/img-23.jpg')} style={styles.image100} />
          </View>
          <View style={{flex: 2}} >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>คนทา</Text>
            <Text style={{ fontSize: 14 }}>ชื่อวิทยาศาสตร์ : </Text>
            <Text style={{ fontSize: 14, fontStyle: 'italic'  }}>Harrisonia perforata Merr.</Text>
            <Text style={{ fontSize: 12 }}>วงศ์ : Simaroubaceae</Text>
          </View>
        </View>
        </Pressable>
        <Pressable onPress={() => onPressItem(24, 'กระเจียว')}>
        <View style={styles.row}>
          <View style={{flex: 1}} >
            <Image source={require('../img/img-24.jpg')} style={styles.image100} />
          </View>
          <View style={{flex: 2}} >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>กระเจียว</Text>
            <Text style={{ fontSize: 14 }}>ชื่อวิทยาศาสตร์ : </Text>
            <Text style={{ fontSize: 14, fontStyle: 'italic'  }}>Curcuma angustifolia Roxb.</Text>
            <Text style={{ fontSize: 12 }}>วงศ์ : Zingiberaceaea</Text>
          </View>
        </View>
        </Pressable>
        <Pressable onPress={() => onPressItem(25, 'กระเจียวขาว')}>
        <View style={styles.row}>
          <View style={{flex: 1}} >
            <Image source={require('../img/img-25.jpg')} style={styles.image100} />
          </View>
          <View style={{flex: 2}} >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>กระเจียวขาว</Text>
            <Text style={{ fontSize: 14 }}>ชื่อวิทยาศาสตร์ : </Text>
            <Text style={{ fontSize: 14, fontStyle: 'italic'  }}>Curcuma parviflora Wall.</Text>
            <Text style={{ fontSize: 12 }}>วงศ์ : Zingiberaceaea</Text>
          </View>
        </View>
        </Pressable>
        <Pressable onPress={() => onPressItem(26, 'เถาพันซ้าย')}>
        <View style={styles.row}>
          <View style={{flex: 1}} >
            <Image source={require('../img/img-26.jpg')} style={styles.image100} />
          </View>
          <View style={{flex: 2}} >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>เถาพันซ้าย</Text>
            <Text style={{ fontSize: 14 }}>ชื่อวิทยาศาสตร์ : </Text>
            <Text style={{ fontSize: 14, fontStyle: 'italic'  }}>Spatholobus parviflorus (Roxb.ex DC.) Kuntze</Text>
            <Text style={{ fontSize: 12 }}>วงศ์ : Fabaceae</Text>
          </View>
        </View>
        </Pressable>
        <Pressable onPress={() => onPressItem(27, 'ข้าวเย็นใต้')}>
        <View style={styles.row}>
          <View style={{flex: 1}} >
            <Image source={require('../img/img-27.jpg')} style={styles.image100} />
          </View>
          <View style={{flex: 2}} >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>ข้าวเย็นใต้</Text>
            <Text style={{ fontSize: 14 }}>ชื่อวิทยาศาสตร์ : </Text>
            <Text style={{ fontSize: 14, fontStyle: 'italic'  }}>Premna herbacea Roxb.</Text>
            <Text style={{ fontSize: 12 }}>วงศ์ : Fabaceae</Text>
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
    padding: 4, 
    width: "100%",
  },
  middle: {
    padding: 1,
      flex: 0.45,
      backgroundColor: '#ffffff',
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