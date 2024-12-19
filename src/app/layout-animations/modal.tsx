import { Button, Separator } from '@/src/components';
import { color, radius, spacing } from '@/src/constants';
import React from 'react';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, {
  FadeIn,
  FadeInDown,
  FadeOut,
  LightSpeedInLeft,
  LightSpeedInRight,
  Easing
} from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

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
        <AnimatedPressable
          entering={FadeIn.duration(500)}
          exiting={FadeOut}
          onPress={closeModal}
          style={styles.overlay}
        />
        <View style={styles.modal}>
          <Animated.View entering={FadeInDown} style={styles.modalContent}>
            <Animated.Text
              entering={LightSpeedInLeft.duration(300)
                .delay(500)
                .easing(Easing.inOut(Easing.quad))}
              style={styles.modalTitle}
            >
              Modal Example
            </Animated.Text>
            <Separator />
            <Animated.Text
              entering={LightSpeedInRight.delay(500)
                .duration(300)
                .easing(Easing.inOut(Easing.quad))}
              style={styles.modalText}
            >
              This is an example about how to animate a modal
            </Animated.Text>
            <Button onPress={closeModal} label="Close" />
          </Animated.View>
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
    backgroundColor: color.white,
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
