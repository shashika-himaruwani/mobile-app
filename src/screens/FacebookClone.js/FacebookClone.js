import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const userAvatar = require('../../assests/avatar.jpg');
const storyImage1 = require('../../assests/story1.jpg');
const storyImage2 = require('../../assests/story.jpg');
const storyImage3 = require('../../assests/story2.jpg');
const storyImage4 = require('../../assests/story3.jpg');
const storyImage5 = require('../../assests/story2.jpg');
const postImage1 = require('../../assests/story1.jpg');
const postImage2 = require('../../assests/story.jpg');

const FacebookClone = () => {
  const stories = [
    { id: 1, user: 'Your Story', image: storyImage1 },
    { id: 2, user: 'John Doe', image: storyImage2 },
    { id: 3, user: 'Jane Smith', image: storyImage3 },
    { id: 4, user: 'Mike Johnson', image: storyImage4 },
    { id: 5, user: 'Mike Johnson', image: storyImage5 },
  ];

  const posts = [
    {
      id: 1,
      user: 'Himaruwani',
      userImage: userAvatar,
      content: 'Having a great day!',
      image: postImage1,
      likes: 156,
      comments: 24,
      shares: 5,
      timeAgo: '2 hours ago'
    },
    {
      id: 2,
      user: 'Jane Smith',
      userImage: userAvatar,
      content: 'Beautiful sunset today!',
      image: postImage2,
      likes: 243,
      comments: 45,
      shares: 12,
      timeAgo: '4 hours ago'
    },
  ];

  const CreatePostSection = () => (
    <View style={styles.createPostContainer}>
      <View style={styles.createPostHeader}>
        <Image
          source={userAvatar}
          style={styles.userAvatar}
        />
        <TouchableOpacity style={styles.postInput}>
          <Text style={styles.postInputText}>What's on your mind?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.createPostActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="images" size={22} color="#45BD62" />
          <Text style={[styles.actionText, { color: '#45BD62' }]}>Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialCommunityIcons name="video" size={22} color="#F35369" />
          <Text style={[styles.actionText, { color: '#F35369' }]}>Live</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialCommunityIcons name="video-plus" size={22} color="#A033FF" />
          <Text style={[styles.actionText, { color: '#A033FF' }]}>Room</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const StorySection = () => (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.storyContainer}
    >
      {stories.map(story => (
        <TouchableOpacity key={story.id} style={styles.storyCard}>
          <Image source={story.image} style={styles.storyImage} />
          <Text style={styles.storyText}>{story.user}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const PostCard = ({ post }) => (
    <View style={styles.postCard}>
      <View style={styles.postHeader}>
        <Image source={post.userImage} style={styles.postUserImage} />
        <View style={styles.postHeaderText}>
          <Text style={styles.postUsername}>{post.user}</Text>
          <View style={styles.timeContainer}>
            <Text style={styles.postTime}>{post.timeAgo}</Text>
            <FontAwesome name="globe" size={12} color="#65676B" style={styles.globeIcon} />
          </View>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <MaterialCommunityIcons name="dots-horizontal" size={22} color="#65676B" />
        </TouchableOpacity>
      </View>
      <Text style={styles.postContent}>{post.content}</Text>
      <Image source={post.image} style={styles.postImage} />
      <View style={styles.postStats}>
        <View style={styles.likesContainer}>
          <FontAwesome name="thumbs-up" size={16} color="#1878F3" />
          <Text style={styles.statsText}>{post.likes}</Text>
        </View>
        <View style={styles.commentsSharesContainer}>
          <Text style={styles.statsText}>{post.comments} Comments</Text>
          <Text style={styles.statsText}>{post.shares} Shares</Text>
        </View>
      </View>
      <View style={styles.postActions}>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome name="thumbs-o-up" size={20} color="#65676B" />
          <Text style={styles.actionText}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialCommunityIcons name="comment-outline" size={20} color="#65676B" />
          <Text style={styles.actionText}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialCommunityIcons name="share-outline" size={20} color="#65676B" />
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <CreatePostSection />
        <StorySection />
        <View style={styles.separator} />
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
  },
  createPostContainer: {
    backgroundColor: 'white',
    padding: 12,
    marginBottom: 8,
  },
  createPostHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  postInput: {
    flex: 1,
    backgroundColor: '#F0F2F5',
    padding: 8,
    borderRadius: 20,
  },
  postInputText: {
    color: '#65676B',
  },
  createPostActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#E4E6EB',
    paddingTop: 10,
  },
  storyContainer: {
    backgroundColor: 'white',
    padding: 10,
  },
  storyCard: {
    width: 100,
    height: 170,
    marginRight: 10,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  storyImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  storyText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  separator: {
    height: 8,
    backgroundColor: '#F0F2F5',
  },
  postCard: {
    backgroundColor: 'white',
    marginBottom: 3,
  },
  postHeader: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
  },
  postHeaderText: {
    flex: 1,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  globeIcon: {
    marginLeft: 4,
  },
  moreButton: {
    padding: 5,
  },
  postUserImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  postUsername: {
    fontWeight: 'bold',
  },
  postTime: {
    fontSize: 12,
    color: '#65676B',
  },
  postContent: {
    padding: 12,
  },
  postImage: {
    width: '100%',
    height: 270,
  },
  postStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6EB',
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentsSharesContainer: {
    flexDirection: 'row',
  },
  statsText: {
    marginLeft: 8,
    marginRight: 20,
    color: '#65676B',
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  actionText: {
    color: '#65676B',
    fontWeight: '500',
    marginLeft: 8,
  },
});

export default FacebookClone;