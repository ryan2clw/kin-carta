import React, { FunctionComponent } from "react";
import { TouchableNativeFeedback, Platform, TouchableOpacity } from "react-native";


interface IAgnoButton {
    onPress: (item: any) => void,
    style: object
}

const AgnoButton: FunctionComponent<IAgnoButton> = (props) => {
    return (
        Platform.OS === 'android' ?
            <TouchableNativeFeedback
                onPress={props.onPress}
                style={{ ...props.style }}
                >
                { props.children }
            </TouchableNativeFeedback> :
            <TouchableOpacity
                onPress={props.onPress}
                style={{ ...props.style }}
                >
                { props.children }
            </TouchableOpacity>
    );
}
export default AgnoButton;