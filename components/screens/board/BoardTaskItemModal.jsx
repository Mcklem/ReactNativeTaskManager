import { Modal, Pressable, StyleSheet, View } from "react-native";
import Colors from "../../../constants/Colors";
import Button from "../../material/Button";
import Text from "../../material/Text";
import { Agenda, LocaleConfig } from 'react-native-calendars';
import { getDateFromUnix, getHoursAndMinutesDiff } from "../../../utils/dateTime";
import Postit from '../../../assets/postit.svg';




export default function BoardTaskItemModal({ item, onRequestClose, onPressHide }) {
    
    function getDuration(item){
        const duration = getHoursAndMinutesDiff(item?.startTime, item?.endTime);
        return duration.hours + ' horasy y ' + duration.minutes + ' minutos.';
    }

    return <Modal
        statusBarTranslucent={true}
        animationType="slide"
        transparent={true}
        visible={item != null}
        onRequestClose={onRequestClose}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalTitleText}>{item?.title}</Text>
                <Text style={styles.modalContentText}>{item?.longDescription}</Text>
                <View>
                    <Text style={styles.contentTitleText}>Estimación</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text >Hora de inicio: </Text>
                        <Text >{getDateFromUnix(item?.startTime)}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text >Hora de fin: </Text>
                        <Text >{getDateFromUnix(item?.endTime)}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text >Duración estimada: </Text>
                        <Text >{getDuration(item)}</Text>
                    </View>
                </View>
                <View style={{ width: "100%", height: "50%" }}>
                    <Postit height={"100%"} width={"100%"} />
                    <View style={{ position: "absolute", padding: "18%" }}>
                        <Text style={{ color: "black" }}>{item?.comments}</Text>
                    </View>
                </View>
                <Button

                    title="Cerrar"
                    onPress={onPressHide}>
                </Button>
            </View>
        </View>
    </Modal>
};


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        padding: 8,
        backgroundColor: Colors.backgrounds.header,
        borderRadius: 20,
        width: "100%",
        height: "100%",
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalTitleText: {
        marginTop: 30,
        color: Colors.text.main,
        fontSize: 20,
        marginBottom: 15,
        textAlign: 'center',
    },
    modalContentText: {
        marginTop: 10,
        color: Colors.text.main,
        fontSize: 14,
        marginBottom: 15,
        textAlign: 'left',
    },
    contentTitleText: {
        marginTop: 10,
        color: Colors.text.main,
        fontSize: 18,
        marginBottom: 15,
        textAlign: 'center',
    },
});
