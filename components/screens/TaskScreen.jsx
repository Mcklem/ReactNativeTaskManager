
import { StyleSheet, Text, View } from 'react-native';

export default function TaskScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Test 2</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
