import {Dimensions, PixelRatio} from 'react-native';

const { width, height, deviceScale, fontScale } = Dimensions.get(
    'window'
);
const baseWidth = 360;
const baseHeight = 700;
  
const scaledWidth = width / baseWidth;
const scaledHeight = height / baseHeight;
const scale = Math.min(scaledWidth, scaledHeight);

// Dimensions and Scale
export const SCALED_RATIO = deviceScale;
export const WINDOW_WIDTH = width;
export const WINDOW_HEIGHT =  height;
export const FONT_SCALE = fontScale;
export const SCALED_SIZE = (size) => Math.ceil(size * scale);

// COLORS
export const PRIMARY = '#FFCC00';
export const SECONDARY = '#0A285F';
export const WHITE = '#FFFFFF';
export const BLACK = '#000000';

// TYPOGRAPHY
// Font Style
export const FONT_REGULAR = {
    fonFamily: 'Roboto',
    fontWeight: '400'
}

export const FONT_BOLD = {
    fonFamily: 'Roboto',
    fontWeight: '700'
}