import { View, Text, StyleSheet, TextInput, Button } from "react-native"

const App = () => {

  return  <View  style={styles.container}>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="product"/>
              <Button title="ADD" />
            </View>
            <View style={styles.listContainer}>
              <View style={styles.cardProduct}>
                <Text style={styles.cardTitle}>Smirnoff</Text>
                <Text>2200 $</Text>
                <Button title="DEL"/>
              </View>
              <View style={styles.cardProduct}>
                <Text style={styles.cardTitle}>Speed</Text>
                <Text>1800 $</Text>
                <Button title="DEL"/>
              </View>
              <View style={styles.cardProduct}>
                <Text style={styles.cardTitle}>Hielo</Text>
                <Text>3200 $</Text>
                <Button title="DEL"/>
              </View>
            </View>
          </View>
  
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"start",
    alignItems:"center",
    marginTop:60
  },
  inputContainer:{
    flexDirection:"row",
    alignSelf:"stretch",
    justifyContent:"space-around"
  },
  input:{
    borderWidth:4,
    paddingHorizontal:10,
    paddingVertical:5,
    width:200
  },
  listContainer : {

    width:"100%"
  },
  cardProduct:{

    flexDirection:"row",
    padding:10,
    margin:10,
    justifyContent:"space-around",
    alignItems:"center",
    borderWidth:4
  }

})

export default App

