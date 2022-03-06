import React, { useState } from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native'
import {Divider} from "react-native-elements";
import colors from "../../config/colors";

const icons = [
  { name: 'Accueil', active: require('../../assets/tabs-icons/home.png'), inactive: require('../../assets/tabs-icons/home-inactive.png')},
  { name: 'Recherche', active: require('../../assets/tabs-icons/search.png'), inactive: require('../../assets/tabs-icons/search-inactive.png')},
  { name: 'Reels', active: require('../../assets/tabs-icons/reels.png'), inactive: require('../../assets/tabs-icons/reels-inactive.png')},
  { name: 'Acheter', active: require('../../assets/tabs-icons/shop.png'), inactive: require('../../assets/tabs-icons/shop-inactive.png')},
  { name: 'Profil', active: require('../../assets/users/tony.jpeg'), inactive: require('../../assets/users/tony.jpeg')}
]

const BottomTabs = () => {

  const [activeTab, setActiveTab] = useState('Accueil')

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={ () => setActiveTab(icon.name)}>
      <Image
        source={activeTab === icon.name ? icon.active : icon.inactive}
        style={[
          styles.icon,
          icon.name === 'Profil' ? styles.profilePic() : null,
          activeTab === 'Profil' && icon.name === activeTab ? styles.profilePic(activeTab) : null
        ]}
      />
    </TouchableOpacity>
  )

  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation='vertical' />
      <View style={styles.container}>
        { icons.map( (icon, index) => (
          <View key={index}>
            <Icon icon={icon} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: '100%',
    bottom: '3%',
    zIndex: 999,
    backgroundColor: colors.background
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    paddingTop: 10
  },
  icon: {
    width: 30,
    height: 30
  },
  profilePic: (activeTab = '') => ({
    borderRadius: 50,
    borderWidth: activeTab === 'Profil' ? 2 : 0,
    borderColor: colors.white
  })
})

export default BottomTabs
