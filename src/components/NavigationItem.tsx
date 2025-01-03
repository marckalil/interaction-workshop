import { Link, LinkProps } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import Icon from '@expo/vector-icons/Octicons';
import { color, radius, spacing } from '@/src/constants';

type NavigationItemProps = Omit<LinkProps, 'children'> & {
  label: string;
};

export function NavigationItem({ label, ...linkProps }: NavigationItemProps) {
  return (
    <Link {...linkProps} style={styles.link}>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <Icon name="chevron-right" color={color.black} size={24} />
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  link: {
    width: '100%',
    gap: spacing.S
  },
  container: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.M,
    backgroundColor: color.yellow,
    borderRadius: radius.S
  },
  label: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: color.black
  }
});
