import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './cardStyles';

export default function Card ({title, image}){
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri: image}}
            />
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}