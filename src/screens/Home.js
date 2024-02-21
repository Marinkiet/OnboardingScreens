import { StyleSheet, TouchableOpacity, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { ScrollView } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FilledButton from '../components/Buttons/FilledButton'
import AlphaCard from '../components/AlphaCard'
import BetaBox from '../components/BetaBox'

const green="#67c9d0";
yellow="#ffd503"
const Home = () => {

  return (
    <View style={styles.container}>
        {/* Header Text Icon PP */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Employee Manual</Text>
          <View style={styles.rightIconProfileContainer}>
            <View>
              <FontAwesome5 name="search" size={20} color={green} />
            </View>
            <View style={styles.profileImageContainer}>
              <Image style={styles.profileImage} source={require('../assets/pp.jpeg')} />
            </View>
          </View>
        </View>

        {/* Scroll view cards section */}
        <View style={styles.bodyContainer}>
          <ScrollView style={{paddingHorizontal:10}}>
            {/* Cards */}
            <AlphaCard headingText="Employees" boxType="beta"/>
            <AlphaCard headingText="Pineapple Culture" boxType="charlie"/>
            <AlphaCard headingText="Brand"/>
            <AlphaCard headingText="CRAFT"/>
            <AlphaCard headingText="Benefits"/>
          </ScrollView>
        
      </View>
              {/* Footer navigation */}

      <View style={styles.footerContainer}>
          <MaterialCommunityIcons name="view-grid-outline" size={30} color="white" />
          <FontAwesome6 name="heart" size={30} color="white" />
          <FontAwesome6 name="heart" size={30} color="white" />
          <Ionicons name="people-outline" size={30} color="white" />
          <Ionicons name="notifications-outline" size={30} color="white" />
        </View>

    </View>

  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    // backgroundColor: 'pink',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10%',
    paddingHorizontal:10
   
  },
  headerText: {
    fontSize: 28,
    fontWeight: '600'
  },
  profileImageContainer:{
    alignItems:'center',
    justifyContent:'center'
  },
  profileImage: {
    width:50,
    height:50,
    borderRadius:25,
    resizeMode:'cover'
    
  },
  rightIconProfileContainer: {
    width: '25%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bodyContainer: {
    flex: 8,
  },
  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: green,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    
  }
})