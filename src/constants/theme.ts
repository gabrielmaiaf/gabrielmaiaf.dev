import { darken } from 'polished';

const Theme = {
  primary: '#172237',
  primaryContrast: '#F3F9FF',
  primaryGradient1: '#004C69',
  primaryGradient2: '#007C8A',
  secondary: '#3D91F9',
  standard: '#000',
  background: '#3E485F',
  backgroundCode: darken(0.15, '#3E485F'),
  textEmphasis: '#BC6C25',
  postPhotoCaption: '#C0C0C0',
  subTitle: '#629677',
  standardBackground: '#fff',
  primaryBorder: '#577E7D',
  footer: '#3E485F',
  brands: {
    linkedin: '#0077B5',
    gitlab: '#FC6D27',
  },
};

export default Theme;
