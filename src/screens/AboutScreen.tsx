// import text e view para uma tela sobre o aplicativo
import { Text, View, StyleSheet} from 'react-native';

// função que retorna uma tela sobre o aplicativo
export default function AboutScreen() {
  return (
    <View style = {styles.container} >
      <Text style = { styles.title }>About</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
})