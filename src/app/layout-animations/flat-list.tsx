import { useState } from 'react';
import { Card, cards, color, radius, spacing } from '@/src/constants';
import { FlatList, Pressable, StyleSheet, Text } from 'react-native';
import Icon from '@expo/vector-icons/Octicons';

type TodoProps = Card & {
  index: number;
  onDelete: (id: string) => void;
};

function Todo(cardItem: TodoProps) {
  const [disabled, setDisabled] = useState(false);
  const toggleDisabled = () => {
    setDisabled((prev) => !prev);
  };

  return (
    <Pressable
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
    </Pressable>
  );
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
    color: 'white'
  }
});
