import React, { Component, useState, useCallback } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import * as ImagePicker from "react-native-image-picker";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

export default function ImagePickerex() {
  const [pickerResponse, setPickerResponse] = useState("ss");
  const [visible, setVisible] = useState(false);

  const onImageLibraryPress = useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: "photo",
      includeBase64: false,
    };
    launchImageLibrary(options, setPickerResponse);
  }, []);

  const onCameraPress = useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: "photo",
      includeBase64: false,
    };
    launchCamera(options, setPickerResponse);
  }, []);

  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;

  return (
    <View>
      <TouchableOpacity onPress={onImageLibraryPress}>
        <Text>image picker</Text>
      </TouchableOpacity>
    </View>
  );
}
