import React from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native';
import NotificationCard from '../../components/NotificationCard';

import { useSelector } from 'react-redux';

const NotificationScreen = () => {
    const notifications = useSelector(state => state.notifications.notifications);
    return (
        <View>
            <FlatList
                keyExtractor={(item, index) => item.name}
                data={notifications}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <NotificationCard
                            name={item.name}
                            posted={item.posted}
                            subject={item.subject}
                            icon={item.icon}></NotificationCard>
                    </TouchableOpacity>
                )}></FlatList>
        </View>
    );
}

export default NotificationScreen;