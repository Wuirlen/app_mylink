import React from 'react';
import { View, Text } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Feather } from '@expo/vector-icons';
import { ContainerButton, Item, ActionContainer } from './styles';

export default function ListItem({ data, selectedItem }){

    function RightActions(){
        return(
            <ActionContainer onPress={() => alert('TESTE') }>
                <Feather 
                    name="trash"
                    color="#FFF"
                    size={24}
                />
            </ActionContainer>
        )
    }

    return(
        <View>
            <Swipeable renderRightActions={RightActions} >
                <ContainerButton activeOpacity={0.9} onPress={ () => selectedItem(data) } >
                    <Feather
                        name="link"
                        color="#FFF"
                        size={24}
                    />
                    <Item numberOfLine={1}> {data.long_url} </Item>
                </ContainerButton>
            </Swipeable>
        </View>
    )
}