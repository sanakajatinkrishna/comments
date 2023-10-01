import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

const Dropdown = ({posts, onPostSelect}) => {
  const [selectedPost, setSelectedPost] = useState(
    posts.length > 0 ? posts[0].id : null,
  );

  return (
    <Picker
      selectedValue={selectedPost}
      onValueChange={itemValue => {
        setSelectedPost(itemValue);
        onPostSelect(itemValue);
      }}>
      {posts.map(post => (
        <Picker.Item key={post.id} label={post.title} value={post.id} />
      ))}
    </Picker>
  );
};

export default Dropdown;
