import { Pressable, StyleSheet, View } from "react-native";
import Text from '../../material/Text';
import Colors from "../../../constants/Colors";

export default function TaskItem({ item, onPress }) {

    function handleTouch(item) {
        if (onPress != null) {
            onPress(item)
        }
    }

    function getTaskPriority() {
        switch (item.priority) {
            case "LOW":
                return { ...styles.taskPriority, backgroundColor: Colors.button.main }
            case "MEDIUM":
                return { ...styles.taskPriority, backgroundColor: Colors.button.warn }
            case "HIGH":
                return { ...styles.taskPriority, backgroundColor: Colors.button.cancel }
            default:
                return {}
        }
    }

    return <Pressable style={styles.taskItem} onPress={() => { handleTouch(item) }}>
        <View style={getTaskPriority()}></View>
        <View style={styles.taskItemContainer}>
            <Text style={styles.taskTitle}>{item.title}</Text>
            <Text>{item.shortDescription}</Text>
            <View style={{ flexDirection: "row" }}>
                <Text style={styles.assignedTo}>{`Created by: `}</Text>
                <Text style={styles.assignedToHighlight}>{item.creator}</Text>
            </View>
        </View>

    </Pressable>

}

const styles = StyleSheet.create({
    taskItem: {
        flexDirection: "row",
        backgroundColor: Colors.items.main,
        borderRadius: 4,
        marginBottom: 8,
    },
    taskPriority: {
        height: "100%",
        width: 2
    },
    taskItemContainer: {

        padding: 16,
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.text.main,
        marginBottom: 4,
    },
    assignedTo: {
        color: Colors.text.main,
    },
    assignedToHighlight: {
        color: Colors.text.highlight,
    },
});
