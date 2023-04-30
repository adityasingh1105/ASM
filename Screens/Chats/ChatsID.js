import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class ChatsID extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("ChatScreen", { paramId: 1 })}
                >
                    <Text>ChatsID 1</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>ChatsID 2</Text>
                </TouchableOpacity>
            </View>
        )
    }
}