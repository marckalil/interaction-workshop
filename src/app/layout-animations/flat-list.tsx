import { useState } from 'react';
import { Card, cards, color, radius, spacing } from '@/src/constants';
import { FlatList, Pressable, StyleSheet, Text } from 'react-native';
import Icon from '@expo/vector-icons/Octicons';
import Animated, {
  FadeIn,
  FadeInUp,
  LinearTransition
} from 'react-native-reanimated';

type TodoProps = Card & {
  index: number;
  onDelete: (id: string) => void;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

function Todo(cardItem: TodoProps) {
  const [disabled, setDisabled] = useState(false);
  const toggleDisabled = () => {
    setDisabled((prev) => !prev);
  };

  return (
    <AnimatedPressable
      entering={FadeInUp.delay(cardItem.index * 50)}
      layout={LinearTransition}
      onPress={toggleDisabled}
      style={[
        styles.cardContainer,
        { backgroundColor: disabled ? color.grey : color[cardItem.color] }
      ]}
    >
      <Text style={styles.cardTitle}>{cardItem.name}</Text>
      <Pressable onPress={() => cardItem.onDelete(cardItem.id)}>
        <Icon name="trash" size={24} color="white" />
      </Pressable>
    </AnimatedPressable>
  );
}

function keyExtractor(todoItem: Card) {
  return todoItem.id;
}

export default function FlatListExample() {
  const [todos, setTodos] = useState(cards);

  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const renderItem = ({ item, index }: { item: Card; index: number }) => (
    <Todo {...item} index={index} onDelete={handleDelete} />
  );

  return (
    <FlatList
      data={todos}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      contentContainerStyle={styles.contentContainerStyle}
    />
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: spacing.M,
    gap: spacing.SM
  },
  cardContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.M,
    borderRadius: radius.M
  },
  cardTitle: {
    fontSize: 16,
    color: color.white
  }
});
