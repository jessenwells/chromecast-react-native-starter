import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, Image, StatusBar, TouchableNativeFeedback } from 'react-native'
import GoogleCast, { CastButton } from 'react-native-google-cast'
import FirebaseStorage from './firebase'

const App = () => {
  const [videoPath, setVideoPath] = useState()
  const [imagePath, setImagePath] = useState()

  // firebase-storage
  const storage = FirebaseStorage.ref()
  const video = storage.child('firebase-storage-video.mp4')
  const image = storage.child('firebase-storage-video.jpg')
  video.getDownloadURL().then((res) => setVideoPath(res))
  image.getDownloadURL().then((res) => setImagePath(res))

  // react-native-google-cast
  startCast = (video, image, title, subtitle, duration, currentTime, mediaType) => {
    GoogleCast.castMedia({
      mediaUrl: video, // stream media video uri
      imageUrl: image, // image video representative uri
      title: title, // media main title
      subtitle: subtitle, // media subtitle
      streamDuration: duration, // stream duration in seconds
      contentType: mediaType, // optional media type, default is 'video/mp4'
      playPosition: currentTime, // stream play position in seconds
    })
  }

  return (
    <View>
      <StatusBar barStyle='light-content' backgroundColor='#000' animated={true} />
      <Header />
      <ScrollView contentContainerStyle={styles.scrollView}>
        {[...Array(5)].map((_, i) => (
          <TouchableNativeFeedback key={i} onPress={() => this.startCast(videoPath, imagePath, _, _, _, _, 'video/mp4')}>
            <Image source={{ uri: imagePath }} style={styles.image} />
          </TouchableNativeFeedback>
        ))}
      </ScrollView>
    </View>
  )
}

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerBody} />
      <View>
        <CastButton style={{ width: 60, height: 60, tintColor: '#fff' }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#111',
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  headerBody: {
    flex: 2,
  },
  scrollView: {
    backgroundColor: '#222',
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 350,
    marginBottom: 20,
  },
})

export default App
