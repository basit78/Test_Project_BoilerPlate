import {TouchableOpacity, View} from 'react-native';
import {COLORS, STYLES} from 'src/assets/theme';
import {IconProps} from 'src/types/IconTypes';
import AppText from '../AppText/AppText';
import Space from '../Space/Space';

const Icon: React.FC<IconProps> = ({
  SVGIcon = null,
  title = '',
  color = COLORS['light'].black,
  variant = 'h6',
  iconLeft = true,
  mB = 0,
  mL = 0,
  mR = 0,
  extraStyle = {container: {}, subContainer: {}, title: {}},
  alignSelf = 'flex-start',
  onPress = () => {},
}) => (
  <TouchableOpacity
    style={[STYLES.alignSelf(alignSelf), extraStyle.container]}
    onPress={onPress}
    activeOpacity={0.8}>
    <View style={[STYLES.rowCenter, extraStyle.subContainer]}>
      {iconLeft && (
        <>
          {SVGIcon && SVGIcon}
          <Space mR={mR} />
        </>
      )}
      {title && (
        <AppText
          onPress={onPress}
          title={title}
          variant={variant}
          color={color}
          extraStyle={extraStyle.title}
          alignSelf={alignSelf}
        />
      )}
      {!iconLeft && (
        <>
          <Space mL={mL} />
          {SVGIcon && SVGIcon}
        </>
      )}
    </View>
    {!!mB && <Space mB={mB} />}
  </TouchableOpacity>
);

export default Icon;
