import * as ImagePicker from 'expo-image-picker';

const pickPhotoAsync = async (handleChange) => {
  const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (!permission.granted) {
    alert('Permission to access camera roll is required!');
    return;
  }
  const result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    aspect: [1, 1],
    base64: true,
  });
  if (result.cancelled) {
    alert('No image was selected');
    return;
  }
  handleChange(result.uri);
};

const takePhotoAsync = async (handleChange) => {
  const permission = await ImagePicker.requestCameraPermissionsAsync();
  if (!permission.granted) {
    alert('Permission to access camera roll is required!');
    return;
  }
  const result = await ImagePicker.launchCameraAsync({
    allowsEditing: true,
    aspect: [1, 1],
    base64: true,
  });
  console.log(result);
  if (result.cancelled) {
    alert('No pic was taken');
    return;
  }
  handleChange(result.uri);
};

export { pickPhotoAsync, takePhotoAsync };
