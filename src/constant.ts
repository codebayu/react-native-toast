import { Dimensions, Platform } from 'react-native';

const ASSETS = {
  success: Platform.select({
    default: require('@/asset/image/toast/success.png'),
  }),
  error: Platform.select({
    default: require('@/asset/image/toast/error.png'),
  }),
  warning: Platform.select({
    default: require('@/asset/image/toast/warning.png'),
  }),
};

const SCREEN_WIDTH = Dimensions.get('window').width;
const ICON_SIZE = 20;
const PADDING = 12;
const CONTAINER_SIZE = ICON_SIZE + PADDING * 2;
const MAX_QUEUE_SIZE = 2;
const THROTTLE_DELAY = 300;

export {
  ASSETS,
  SCREEN_WIDTH,
  ICON_SIZE,
  PADDING,
  CONTAINER_SIZE,
  MAX_QUEUE_SIZE,
  THROTTLE_DELAY,
};
