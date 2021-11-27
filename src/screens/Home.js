import React, { useState } from 'react';
import { View, Button, Text, Image, StyleSheet, TextInput } from 'react-native';
import { auth } from '../../App';
import Heading from '../components/Heading';
import { useAuth } from '../contexts/AuthProvider';
import { YOUTUBE_DATA_API } from '@env';
import Scrollable from '../components/Scrollable';

export default function Home() {
  const [user] = useAuth();
  const [, setIsAuthenticated] = useAuth();
  const [channelName, onChangeChannelName] = useState('');

  async function fetchChannel() {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&maxResults=1&q=${encodeURIComponent(
        channelName
      )}&key=${YOUTUBE_DATA_API}`
    );
    const data = await res.json();
    const { channelId, channelTitle, description, thumbnails } =
      data.items[0].snippet;
    console.log({ channelId, channelTitle, description, thumbnails });
  }

  async function signOut() {
    await auth.signOut();
    setIsAuthenticated(false);
  }

  return (
    <Scrollable>
      <View>
        <Image
          style={{ width: 48, height: 48, borderRadius: 48 / 2 }}
          source={{ uri: user.avatar }}
        />
        <Heading size="1">Authenticated as {user.fullname}!</Heading>
        <Text>This is the main screen.</Text>
        <TextInput
          onChangeText={onChangeChannelName}
          value={channelName}
          keyboardType="default"
          placeholder="Channel Name"
        />
        <Button title="Search Channel" onPress={fetchChannel} />
        <Button title="Logout" onPress={signOut} />
      </View>
    </Scrollable>
  );
}
