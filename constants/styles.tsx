import { StyleSheet } from 'react-native';

const colors = {
  lDark: '#71c9ce',
  lMedium: '#a6e3e9',
  lLight: '#cbf1f5',
  lWhite: '#e3fdfd',
  nDark: '#222831',
  nMedium: '#393e46',
  nLight: '#00adb5',
  nWhite: '#eeeeee'
};

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lDark,
    padding: 20,
  },
  button: {
    backgroundColor: colors.lMedium,
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: colors.lLight,
    fontSize: 18,
  },
});

export { globalStyles, colors };