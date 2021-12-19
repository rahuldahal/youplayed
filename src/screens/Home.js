import React, { useEffect, useState } from 'react';
import { View, Button, Text, Image, StyleSheet, TextInput } from 'react-native';
import { auth } from '../../App';
import Heading from '../components/Heading';
import { useAuth } from '../contexts/AuthProvider';
import { YOUTUBE_DATA_API, IP_DETAILS_API } from '@env';
import Scrollable from '../components/Scrollable';
import colors from '../colors';
import VideoOverview from '../components/VideoOverview';

export default function Home() {
  const [IPDetails, setIPDetails] = useState(null);
  const [trendingVideos, setTrendingVideos] = useState(null);

  function videoOverview(items) {
    return items.map((item) => {
      const { publishedAt, channelId, title, thumbnails, channelTitle } =
        item.snippet;
      const { duration } = item.contentDetails;
      const { viewCount, likeCount, commentCount } = item.statistics;
      return {
        id: item.id,
        publishedAt,
        channelId,
        title,
        thumbnails,
        channelTitle,
        duration,
        viewCount,
        likeCount,
        commentCount,
      };
    });
  }

  useEffect(() => {
    (async function () {
      try {
        const res = await fetch(IP_DETAILS_API);
        const details = await res.json();
        setIPDetails(details);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  useEffect(() => {
    IPDetails &&
      (async function () {
        try {
          const res = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&part=snippet,statistics,contentDetails&maxResults=10&regionCode=${IPDetails.countryCode}&key=${YOUTUBE_DATA_API}`
          );
          const { items } = await res.json();
          setTrendingVideos(videoOverview(items));
        } catch (e) {
          console.log(e);
        }
      })();
  }, [IPDetails]);

  return (
    <Scrollable>
      <View style={styles.container}>
        <View style={styles.header}>
          <Heading size="1">Explore popular videos.</Heading>
          <Text style={{ color: colors.redishGrey }}>
            Swipe Right to Watch Later Click to View
          </Text>
        </View>

        <View style={styles.videos}>
          {trendingVideos ? (
            trendingVideos.map((overview) => {
              const {
                id,
                duration,
                viewCount,
                likeCount,
                title,
                channelTitle,
                thumbnails,
              } = overview;
              return (
                <VideoOverview
                  key={id}
                  duration={duration}
                  viewCount={viewCount}
                  likeCount={likeCount}
                  title={title}
                  channelName={channelTitle}
                  image={thumbnails.standard.url}
                />
              );
            })
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </View>
    </Scrollable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  header: {
    marginTop: 20,
  },
  videos: {
    marginTop: 40,
  },
});
