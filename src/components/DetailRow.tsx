import React, { FunctionComponent } from "react";
import { Text, View, StyleSheet } from "react-native";

export interface IDetailRow {
    primaryKey: string,
    val: string,
    secondaryKey?: string
}
const styles = StyleSheet.create({
    primaryKeyView: {
        backgroundColor: '#fff',
        paddingVertical: 5
    },
    primaryKey: {
        fontSize: 14,
        fontWeight: "600",
        color: '#b1b1b1'
    },
    secondaryKey: {
        backgroundColor: 'brown'
    },
    val: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    valText: {
        fontSize: 18,
        fontWeight: "700",
        color: '#545454'
    },
    secondaryKeyText: {
        fontSize: 14,
        fontWeight: "600",
        color: '#b1b1b1'
    },
});

const DetailRow: FunctionComponent<IDetailRow> = (props) => {
    return (
        <View style={{flex: 1, margin: 15 }}>
            <View style={styles.primaryKeyView}>
                <Text style={styles.primaryKey}>{props.primaryKey + ":"}</Text>
            </View>
            <View style={styles.val}>
                <Text style={styles.valText}>{props.val}</Text>
                <Text style={styles.secondaryKeyText}>{props.secondaryKey}</Text>

            </View>
        </View>
    );
}
export default DetailRow;