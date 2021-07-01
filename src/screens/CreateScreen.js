import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button
} from 'react-native';
import { Context } from './../context/BlogContext';



const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addBlogPosts } = useContext(Context);

  return (
    <View style={styles.conatiner}>
      <Text
        style={styles.label}
        key='titleLabel'
      >
        Enter Title:
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
        Enter Content:
      </Text>
      <TextInput
        value={content}
        onChangeText={(text) => setContent(text)}
        style={styles.input}
        key='contentInput'
      />
      <Button
        title="Add Blog"
        onPress={() => addBlogPosts(title, content, () => {
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


export default CreateScreen;