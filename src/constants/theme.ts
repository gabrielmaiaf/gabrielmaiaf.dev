import { darken } from 'polished';

const Theme = {
  primary: '#282a38',
  primaryBg: '#0d1222',
  secondaryBg: '#18212E',
  primaryText: '#FFF',
  primaryContrast: '#F3F9FF',
  buttonColor: '#cabf7f',
  primaryGradient2: '#007C8A',
  standard: '#000',
  background: '#272822',
  backgroundTextImage: '#272822aa',
  backgroundCode: darken('0.15', '#272822'),
  textEmphasis: '#BC6C25',
  postPhotoCaption: '#C0C0C0',
  subTitle: '#afa76a',
  standardBackground: '#fff',
  primaryBorder: '#577E7D',
  brands: {
    linkedin: '#0077B5',
    gitlab: '#FC6D27',
  },
  icon: {
    prog: '#60a5fa',
    progBg: '#193059',
    music: '#c084fc',
    musicBg: '#342559',
    headph: '#22d3ee',
    headphBg: '#0e3d51',
    faith: '#f87171',
    faithBg: '#462130',
    guitar: '#fb923d',
    guitarBg: '#492c26',
  }
};

export default Theme;
