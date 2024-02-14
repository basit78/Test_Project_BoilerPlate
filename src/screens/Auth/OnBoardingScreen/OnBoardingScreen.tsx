import React, {useRef, useState} from 'react';
import {FlatList, ImageBackground, View} from 'react-native';
import {SVG} from 'src/assets/svg';
import {COLORS, STYLES} from 'src/assets/theme';
import {AppButton, AppText, Icon} from 'src/components';
import {onBoardData} from 'src/data/appData';

import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'src/hooks/useTheme';
import {LABELS} from 'src/labels';
import {NavigationProps} from 'src/types/NavigationTypes';
import {
  OnBoardingScreenProps,
  renderItemFunc,
  renderTabFunc,
} from 'src/types/OnBoardingScreenTypes';
import {Theme} from 'src/types/ThemeTypes';
import {styles as styling} from './styles';

const OnBoardingScreen: React.FC<OnBoardingScreenProps> = props => {
  const theme = useTheme() as Theme;
  const styles = styling(theme);
  const flatListRef = useRef<FlatList>(null);
  const navigation = useNavigation<NavigationProps>();

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    if (currentIndex < onBoardData.length) {
      setCurrentIndex(currentIndex + 1);
    }

    flatListRef.current?.scrollToIndex({
      animated: true,
      index: currentIndex + 1,
    });
  };

  const onDone = () => {
    navigation.navigate('InitialScreen', {});
  };

  const renderTab: renderTabFunc = index => (
    <View style={styles.tab}>
      <View style={index == 0 ? styles.active : styles.inactive} />
      <View style={index == 1 ? styles.active : styles.inactive} />
      <View style={index == 2 ? styles.active : styles.inactive} />
    </View>
  );

  const renderItem: renderItemFunc = ({item}) => (
    <ImageBackground source={item.image} style={styles.image}>
      <View style={styles.center}>
        <AppText
          title={item.title}
          variant="h1"
          color={COLORS[theme].white}
          alignSelf="center"
        />
        <AppText
          title={item.text}
          variant="body3"
          color={COLORS[theme].white}
          extraStyle={[STYLES.textAlign('center'), STYLES.pH(20)]}
        />
      </View>
    </ImageBackground>
  );

  return (
    <View style={STYLES.container(theme)}>
      <FlatList
        ref={flatListRef}
        data={onBoardData}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        scrollEnabled={false}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      {currentIndex !== 2 && (
        <AppText
          title={LABELS.skip}
          variant="body1"
          extraStyle={styles.skipBtn}
          color={COLORS[theme].text}
          onPress={onDone}
        />
      )}

      {renderTab(currentIndex)}
      {currentIndex === 2 ? (
        <AppButton
          title={LABELS.getStarted}
          variant="filled"
          onPress={onDone}
          extraStyle={{
            button: styles.getStarted,
            title: {color: COLORS[theme].black},
          }}
          SVGRight={<SVG.NextArrow fill={COLORS[theme].black} />}
        />
      ) : (
        <Icon
          SVGIcon={<SVG.NextArrow fill={COLORS[theme].black} />}
          onPress={handleNext}
          extraStyle={{
            container: styles.nextBtn,
          }}
        />
      )}
    </View>
  );
};

export default OnBoardingScreen;
