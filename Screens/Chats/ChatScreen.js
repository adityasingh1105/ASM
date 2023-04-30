import { View, Text } from 'react-native'
import { Bubble, GiftedChat } from 'react-native-gifted-chat'
import React, { useState, useCallback, useEffect } from 'react'
import { useRoute } from '@react-navigation/native';

export default function ChatScreen({  }) {
    // console.log("____IDDD____", route.params.paramKey)
    const [messages, setMessages] = useState([]);
    const route = useRoute
    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])
    const onSend = messagesArray => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messagesArray))
    }

    return (
        <View style={{ flex: 1 }}>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}

                renderBubble={props => {
                    return (
                        <Bubble {...props} wrapperStyle={{
                            right: {
                                backgroundColor: "purple"
                            },
                        }} />
                    );
                }}
            />
        </View>
    )
}