import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';

import { Colours, GlobalStyles } from '~styles';
import TextCustom from '~components/TextCustom';
import { LayoutProps } from './HomeLayout.type';
import Icon from '~components/Icon';

import styles from './HomeLayout.style';

const Layout: React.FC<LayoutProps> = ({
  title,
  children,
  style,
  isSeeMore = false,
  horizontal = false,
  isBackground = false,
}) => {
  return (
    <View
      style={[
        GlobalStyles.globalStyle,
        styles.layout,
        {
          backgroundColor: isBackground
            ? Colours.BACKGROUND[50]
            : Colours.WHITE,
        },
      ]}>
      {(title || isSeeMore) && (
        <View style={styles.layout_title}>
          <TextCustom style={styles.layout_title_text}>{title}</TextCustom>
          {isSeeMore && (
            <TouchableOpacity style={styles.layout_see_more}>
              <TextCustom style={styles.layout_see_more_text}>
                See more
              </TextCustom>
              <Icon name="arrow-right" color={Colours.RED[500]} />
            </TouchableOpacity>
          )}
        </View>
      )}
      <ScrollView
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
        style={[styles.layout_children, style]}>
        {children}
      </ScrollView>
    </View>
  );
};

export default Layout;
