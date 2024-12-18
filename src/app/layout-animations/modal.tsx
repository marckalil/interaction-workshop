import { Button, Separator } from '@/src/components';
import { color, radius, spacing } from '@/src/constants';
import React from 'react';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ModalExample() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Button onPress={openModal} label="Open modal" />
      </SafeAreaView>

      <Modal visible={modalVisible} transparent>
        <Pressable onPress={closeModal} style={styles.overlay} />
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Modal Example</Text>
            <Separator />
            <Text style={styles.modalText}>
              This is an example about how to animate a modal
            </Text>
            <Button onPress={closeModal} label="Close" />
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: spacing.M
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: color.blue,
    opacity: 0.5
  },
  modalContent: {
    backgroundColor: 'white',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: radius.M,
    gap: spacing.M
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center'
  }
});
