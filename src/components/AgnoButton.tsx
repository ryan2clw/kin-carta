import React, { FunctionComponent, } from "react";
import { TouchableOpacity } from "react-native";


interface IAgnoButton {
    onPress: (item: any) => void,
    style: object
}

const AgnoButton: FunctionComponent<IAgnoButton> = (props) => {
    return (
            <TouchableOpacity
                onPress={props.onPress}
                style={{ ...props.style }}
                >
                { props.children }
            </TouchableOpacity>
    );
}
export default AgnoButton;