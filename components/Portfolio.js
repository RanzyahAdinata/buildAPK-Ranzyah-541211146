import React, { useState } from 'react';
import { Image, View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ButtonC from '../components/CustomButton';
import CustomImage from '../components/CustomImage';
import Deskripsi from '../components/CustomText';

export default function PortfolioScreen({ navigation }) {
  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});

  const addLike = (projectId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [projectId]: (prevLikes[projectId] || 0) + 1,
    }));
  };

  const addDislike = (projectId) => {
    setDislikes((prevDislikes) => ({
      ...prevDislikes,
      [projectId]: (prevDislikes[projectId] || 0) + 1,
    }));
  };

  const removeLike = (projectId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [projectId]: Math.max((prevLikes[projectId] || 0) - 1, 0),
    }));
  };

  const projects = [
    {
      id: 1,
      title: 'Mobile App Design BodyBuilder',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor elit, fermentum non augue vitae, condimentum porttitor nunc. Nullam id justo at dolor vestibulum volutpat eget sed justo. Quisque in nisi id augue aliquet finibus. Duis molestie faucibus mauris nec placerat. Maecenas cursus sapien in diam sodales rhoncus.',
      imageSource: require('../assets/proyek1.png'),
    },
    {
      id: 2,
      title: 'G-Course Online',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor elit, fermentum non augue vitae, condimentum porttitor nunc. Nullam id justo at dolor vestibulum volutpat eget sed justo. Quisque in nisi id augue aliquet finibus. Duis molestie faucibus mauris nec placerat. Maecenas cursus sapien in diam sodales rhoncus.',
      imageSource: require('../assets/proyek2.png'),
    },
    {
      id: 3,
      title: 'Website Wordpress Griyasoft.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor elit, fermentum non augue vitae, condimentum porttitor nunc. Nullam id justo at dolor vestibulum volutpat eget sed justo. Quisque in nisi id augue aliquet finibus. Duis molestie faucibus mauris nec placerat. Maecenas cursus sapien in diam sodales rhoncus.',
      imageSource: require('../assets/proyek3.png'),
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <CustomImage source={require('../assets/windahy.jpg')} style={styles.profil} />
        <Text style={styles.nama}>Ranzyah Adinata Aldo</Text>
        <Deskripsi />
        <ButtonC onPress={() => alert('Makasih Yaa')} title="Contact Me" color="black" style={{}} />

        <View style={{ padding: 25 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 15 }}>
            My Recent Content
          </Text>

          {projects.map((project) => (
            <View key={project.id} style={styles.projectContainer}>
              <Image source={project.imageSource} style={styles.thumbnail} />
              <View style={styles.projectInfo}>
                <Text style={styles.projectTitle}>{project.title} </Text>
                <Text style={styles.projectDescription}>{project.description}</Text>
                <TouchableOpacity>
                  <Image
                    style={{ width: 80, height: 80, left: 310, top: 15 }}
                    source={require('../assets/button.png')}
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.likeButton} onPress={() => addLike(project.id)}>
                <MaterialCommunityIcons name="heart" size={20} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.dislikeButton} onPress={() => addDislike(project.id)}>
                <MaterialCommunityIcons name="heart-broken" size={20} color="white" />
              </TouchableOpacity>

              <Text style={styles.likeCount}> Likes: {likes[project.id] || 0} </Text>
              <Text style={styles.dislikeCount}> Dislikes: {dislikes[project.id] || 0} </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#F0F0F0',
    fontFamily: 'sans-serif',
    alignItems: 'center',
  },
  nama: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profil: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  projectContainer: {
    marginVertical: 10,
    marginBottom: 5,
    marginTop: 5,
  },
  thumbnail: {
    width: 380,
    height: 200,
    borderRadius: 5,
  },
  projectInfo: {
    // flex: 2,
    // marginLeft: ,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    top: 10,
  },
  projectDescription: {
    fontSize: 14,
    top: 10,
  },
  likeButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    bottom: 65,
  },
  dislikeButton: {
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    bottom: 95,
    left: 45,
  },
  likeCount: {
    marginLeft: 10,
    fontSize: 14,
    bottom: 85,
    right: 10,
  },
  dislikeCount: {
    marginLeft: 10,
    fontSize: 14,
    bottom: 85,
    right: 10,
  },
});
