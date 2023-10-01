import React, {useState, useEffect} from 'react';
import {FlatList, Text} from 'react-native';

const CommentList = ({postId}) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.error(error));
  }, [postId]);

  return (
    <FlatList
      data={comments}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => <Text>{item.body}</Text>}
    />
  );
};

export default CommentList;
