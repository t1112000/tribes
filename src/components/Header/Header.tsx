import React, { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import { HeaderProps } from './Header.type';
import LogoImage from '~assets/images/pngs/logo.png';
import LocationSVG from '~assets/images/svgs/location.svg';
import Icon from '~components/Icon';
import TextCustom from '~components/TextCustom';

import styles from './Header.style';
import { GlobalStyles } from '~styles';
import HamMenu from '~components/HamMenu';

const Header: React.FC<HeaderProps> = ({
  isSearch = true,
  isLanguage = true,
}) => {
  const [visibleMenu, setVisibleMenu] = useState(false);

  return (
    <View style={[GlobalStyles.globalStyle, styles.header]}>
      <View style={styles.header_list}>
        <Image style={styles.header_image} source={LogoImage} />
        <View style={styles.header_icons}>
          {isSearch && (
            <TouchableOpacity>
              <Icon style={styles.header_icon} name="search" />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => setVisibleMenu(true)}>
            <Icon style={styles.header_icon} name="menu" />
          </TouchableOpacity>
        </View>
      </View>
      {isLanguage && (
        <View style={styles.header_select}>
          <LocationSVG />
          <TextCustom style={styles.header_select_text}>Singapore</TextCustom>
          <Icon name="arrow-down" />
        </View>
      )}

      <HamMenu isVisible={visibleMenu} onClose={() => setVisibleMenu(false)} />
    </View>
  );
};

export default Header;
