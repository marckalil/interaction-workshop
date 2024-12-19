import { color, spacing } from '@/src/constants';
import {
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from '@expo/vector-icons/Octicons';
import { useState } from 'react';

const activeTintColor = color.blue;
const inactiveTintColor = color.grey;

type TabItemType = {
  title: string;
  icon: string;
  id: string;
};

const tabs: TabItemType[] = [
  { title: 'Home', icon: 'home', id: 'home' },
  { title: 'Search', icon: 'search', id: 'search' },
  { title: 'Settings', icon: 'gear', id: 'settings' }
];

type TabItemProps = TabItemType & {
  onPressTab: (id: string) => void;
  isSelected: boolean;
};

function TabItem({ title, icon, id, onPressTab, isSelected }: TabItemProps) {
  const tintColor = isSelected ? activeTintColor : color.grey;
  const handlePress = () => {
    onPressTab(id);
  };
  return (
    <Pressable style={styles.tabItemContainer} onPress={handlePress}>
      <Icon name={icon} size={24} color={tintColor} />
      <Text style={[{ color: tintColor }]}>{title}</Text>
    </Pressable>
  );
}

function TabIndicator() {
  const dimensions = useWindowDimensions();
  const width = dimensions.width / 3;
  return <View style={[styles.tabIndicator, { width }]} />;
}

export default function BottomTabsExample() {
  const insets = useSafeAreaInsets();
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const onPressTab = (id: string) => {
    setSelectedTabId(id);
  };

  return (
    <View style={styles.container}>
      <View
        style={[styles.bottomTabsContainer, { paddingBottom: insets.bottom }]}
      >
        <TabIndicator />
        {tabs.map((tab) => (
          <TabItem
            key={tab.id}
            {...tab}
            onPressTab={onPressTab}
            isSelected={tab.id === selectedTabId}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    flex: 1,
    justifyContent: 'flex-end'
  },
  bottomTabsContainer: {
    backgroundColor: color.white,
    flexDirection: 'row',
    paddingTop: spacing.S
  },
  tabItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.XS
  },
  tabIndicator: {
    backgroundColor: color.blue,
    height: 4,
    position: 'absolute',
    top: 0,
    left: 0
  }
});
