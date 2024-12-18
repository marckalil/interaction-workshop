import { color } from './color';

export type Card = {
  id: string;
  name: string;
  color: keyof typeof color;
};

const colors = Object.keys(color).filter(
  (c) => c !== 'red'
) as (keyof typeof color)[];

const tasks = [
  'Buy groceries',
  'Clean the house',
  'Finish project report',
  'Call mom',
  'Schedule dentist appointment',
  'Pay bills',
  'Read a book',
  'Exercise',
  'Plan weekend trip',
  'Organize desk',
  'Water plants',
  'Write blog post',
  'Update resume',
  'Prepare presentation',
  'Attend team meeting',
  'Fix the leaky faucet',
  'Grocery shopping',
  'Walk the dog',
  'Reply to emails',
  'Backup computer',
  'Meal prep for the week',
  'Study for exam',
  'Clean the car',
  'Buy birthday gift',
  'Renew library books',
  'Plan birthday party',
  'Do laundry',
  'Take out the trash',
  'Prepare dinner',
  'Meditate',
  'Review budget',
  'Plan vacation',
  'Organize closet',
  'Write thank you notes',
  'Check credit score',
  'Update software',
  'Clean the fridge',
  'Go for a run',
  'Visit the doctor',
  'Attend workshop',
  'Fix the broken chair',
  'Buy new shoes',
  'Plan family gathering',
  'Organize photos',
  'Write a letter',
  'Learn a new skill',
  'Volunteer',
  'Clean the windows',
  'Host a dinner party',
  'Review insurance policy'
];

export const cards: Card[] = tasks.map((task, i) => ({
  id: `${i}`,
  name: task,
  color: colors[i % colors.length]
}));
