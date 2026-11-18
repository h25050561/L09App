import {StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import AppAlt from "./App_Alt";


const datasource = [
    {key: 'a'},
    {key: 'b'},
    {key: 'c'},
    {key: 'd'},
    {key: 'e'},
    {key: 'f'},
    {key: 'g'},
    {key: 'h'},
    {key: 'i'},
    {key: 'j'},
    {key: 'k'},
    {key: 'l'},
    {key: 'm'},
    {key: 'n'},
    {key: 'o'},
    {key: 'p'},
    {key: 'q'},
    {key: 'r'},
    {key: 's'},
    {key: 't'},
    {key: 'u'},
    {key: 'v'},
    {key: 'w'},
    {key: 'x'},
    {key: 'y'},
    {key: 'z'}
]

const renderItem = ({item}) => {
  return (
      <TouchableOpacity style={styles.opacityStyle}>
        <Text style={styles.textStyle}>{item.key}</Text>
      </TouchableOpacity>
  )
}


function App() {
  return (
    <View style={styles.container}>
      <FlatList data={datasource} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginBottom: 20
  },
  opacityStyle: {
    borderWidth: 1
  },
  textStyle: {
    fontSize: 15,
    margin: 10,
    textAlign: 'left'
  }
});

export default AppAlt;