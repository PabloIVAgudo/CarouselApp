import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    homeContainer: {
      flex: 1,
      backgroundColor: '#E1ABD5',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      paddingBottom: 75,
      paddingLeft: 100,
      paddingRight: 100,
    },
    button: {
      backgroundColor: '#3B5DC8',
      padding: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
    title: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
  },
});

export default styles;