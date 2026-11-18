import {StyleSheet, Text, View, ScrollView, FlatList, SectionList, TouchableOpacity} from 'react-native';

const datasource = [
    {
        data:
            [
                {key: 'a'},
                {key: 'e'},
                {key: 'i'},
                {key: 'o'},
                {key: 'u'}
            ],
        title: 'Vowels', bgColor: 'skyblue'
    },
    {
        data: [
            {key: 'b'},
            {key: 'c'},
            {key: 'd'},
            {key: 'f'},
            {key: 'g'},
            {key: 'h'},
            {key: 'j'},
            {key: 'k'},
            {key: 'l'},
            {key: 'm'},
            {key: 'n'},
            {key: 'p'},
            {key: 'q'},
            {key: 'r'},
            {key: 's'},
            {key: 't'},
            {key: 'v'},
            {key: 'w'},
            {key: 'x'},
            {key: 'y'},
            {key: 'z'}
        ],
        title: 'Consonants', bgColor: 'steelblue'
    }
]

const renderItem = ({item, index, section}) => {
    function colorPicker() {
        let colorSelect = index % 2
        switch (colorSelect) {
            case 0:
                return "khaki"
            case 1:
                return "white"
            default:
                return "white"
        }
    }

    return (
        <TouchableOpacity style={[styles.opacityStyle, {backgroundColor: colorPicker()}]}>
            <Text style={styles.textStyle}>{index + 1}. {item.key}</Text>
        </TouchableOpacity>
    )
}


export default function AppAlt() {
    return (
        <View style={styles.container}>
            <SectionList contentContainerStyle={{padding: 10}} sections={datasource} renderItem={renderItem}
                         renderSectionHeader={({section: {title, bgColor}}) => (
                             <Text style={[styles.headerText, {backgroundColor: bgColor}]}>{title}</Text>)}/>
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
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});
