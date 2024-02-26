import {Platform, StyleSheet} from 'react-native';

export const globalStyle = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 60,
    fontWeight: '300',
    color: 'black',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 10,
    bottom: Platform.OS === 'ios' ? 0 : 15,
  },
});
