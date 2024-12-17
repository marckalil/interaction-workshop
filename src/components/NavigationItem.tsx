import { Link, LinkProps } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import Icon from '@expo/vector-icons/Octicons';

type NavigationItemProps = Omit<LinkProps, 'children'> & {
  label: string;
};

export function NavigationItem({ label, ...linkProps }: NavigationItemProps) {
  return (
    <Link {...linkProps} style={styles.link}>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <Icon name="chevron-right" size={24} />
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  link: {
    width: '100%'
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  label: {
    fontSize: 16
  }
});
