import React from 'react';
import { ImageBackground, View, StyleSheet, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../colors';

export default function VideoOverview({ stats, image, title, channelName }) {
  const { duration, viewsCount, likesCount } = stats;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: image }}
        resizeMode="cover"
        style={styles.bgImage}
      >
        <View
          style={[
            styles.textWithIcon,
            styles.duration,
            { backgroundColor: colors.redishWhite },
          ]}
        >
          <MaterialIcons
            style={styles.icon}
            name="access-time"
            size={18}
            color={colors.red}
          />
          <Text>{duration}</Text>
        </View>

        <View
          style={[styles.overview, { backgroundColor: colors.redishWhite }]}
        >
          <View style={styles.stats}>
            <View style={[styles.textWithIcon, styles.stat]}>
              <MaterialIcons
                style={styles.icon}
                name="remove-red-eye"
                size={18}
                color={colors.red}
              />
              <Text>{viewsCount}</Text>
            </View>

            <View style={[styles.textWithIcon, styles.stat]}>
              <MaterialIcons
                style={styles.icon}
                name="thumb-up"
                size={18}
                color={colors.red}
              />
              <Text>{likesCount}</Text>
            </View>
          </View>

          <View style={[styles.textWithIcon, styles.channelName]}>
            <MaterialIcons
              style={styles.icon}
              name="subscriptions"
              size={18}
              color={colors.red}
            />
            <Text>{channelName}</Text>
          </View>
        </View>
      </ImageBackground>
      <Text
        style={[
          styles.title,
          { backgroundColor: colors.red, color: colors.redishWhite },
        ]}
      >
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    borderRadius: 8,
    // TODO: overflow: 'hidden',
    marginBottom: 80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  bgImage: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  duration: {
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    padding: 8,
    borderBottomRightRadius: 18,
  },
  textWithIcon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginRight: 4,
  },
  overview: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    padding: 16,
    borderTopLeftRadius: 18,
  },
  stats: {
    display: 'flex',
    flexDirection: 'row',
  },
  stat: {
    marginRight: 16,
  },
  title: {
    position: 'absolute',
    bottom: -40,
    padding: 8,
    maxWidth: '90%',
    fontSize: 18,
    fontWeight: 'bold',
    borderBottomRightRadius: 8,
  },
});
