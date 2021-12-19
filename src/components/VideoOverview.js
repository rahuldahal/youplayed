import React from 'react';
import { ImageBackground, View, StyleSheet, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../colors';

function formatDuration(duration) {
  return duration
    .match(/([0-9][0-9]?H?M?S?)/g)
    .map((e) => e.toLowerCase())
    .join(' ');
}

function countStats(views) {
  const { length } = views.toString().split('');
  if (length < 4) {
    return views.toString();
  } else if (length <= 6) {
    return `${Math.round(views / 1000)}K`;
  } else if (length <= 9) {
    return `${(views / 1000000).toFixed(1)}M`;
  } else {
    return `${(views / 1000000000).toFixed(1)}B`;
  }
}

export default function VideoOverview({
  duration,
  viewCount,
  likeCount,
  image,
  title,
  channelName,
}) {
  const formattedDuration = formatDuration(duration);
  const formattedViews = countStats(viewCount);
  const formattedLikes = countStats(likeCount);

  return (
    <View style={styles.container}>
      <View style={styles.bgWrapper}>
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
            <Text>{formattedDuration}</Text>
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
                <Text>{formattedViews}</Text>
              </View>

              <View style={[styles.textWithIcon, styles.stat]}>
                <MaterialIcons
                  style={styles.icon}
                  name="thumb-up"
                  size={18}
                  color={colors.red}
                />
                <Text>{formattedLikes}</Text>
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
      </View>
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
  bgWrapper: {
    borderRadius: 8,
    borderBottomLeftRadius: 0,
    overflow: 'hidden',
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
    borderBottomRightRadius: 8,
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
    borderBottomLeftRadius: 8,
  },
});
