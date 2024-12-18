import { Card, cards, color, radius, spacing } from '@/src/constants';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from '@expo/vector-icons/Octicons';
import { useState } from 'react';

type TodoProps = Card & {
  onDelete: (id: string) => void;
};
function Todo(cardItem: TodoProps) {
  return (
    <View
      style={[styles.cardContainer, { backgroundColor: color[cardItem.color] }]}
    >
      <Text style={styles.cardTitle}>{cardItem.name}</Text>
      <Pressable onPress={() => cardItem.onDelete(cardItem.id)}>
        <Icon name="trash" size={24} color="white" />
      </Pressable>
    </View>
  );
}
export default function FlatListExample() {
  const [todos, setTodos] = useState(cards);

  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const renderItem = ({ item }: { item: Card }) => (
    <Todo {...item} onDelete={handleDelete} />
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
