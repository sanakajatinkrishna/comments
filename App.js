import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Dropdown from './Dropdown';
import CommentList from './CommentList';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error(error));
  }, []);
  return (
    <View style={styles.container}>
      <Dropdown posts={posts} onPostSelect={setSelectedPost} />
      {selectedPost && <CommentList postId={selectedPost} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default App;
