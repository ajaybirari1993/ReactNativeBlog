import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button
} from 'react-native';
import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
  const { state, updateBlogPost } = useContext(Context);
  const blog = state.find(blog => blog.id == navigation.getParam('id'));
  // const blog = fetchBlogPost(navigation.getParam('id'));
  const [title, setTitle] = useState(blog?.title);
  const [content, setContent] = useState(blog?.content);



  return (
    <View style={styles.conatiner}>
      <Text
        style={styles.label}
        key='titleLabel'
      >
        Enter new title:
      </Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.input}
        key='titleInput'
      />
      <Text
        style={styles.label}
        key='contentLabel'
      >
        Enter new content:
      </Text>
      <TextInput
        value={content}
        onChangeText={(text) => setContent(text)}
        style={styles.input}
        key='contentInput'
      />
      <Button
        title="Update Blog"
        onPress={() => updateBlogPost(title, content, navigation.getParam('id'), () => {
          navigation.navigate('Index');
        })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    paddingHorizontal: 5
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 2
  },
  input: {
    fontSize: 18,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
    padding: 5
  }
});


export default EditScreen;