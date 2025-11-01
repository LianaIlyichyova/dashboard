interface Activity {
  id: number;
  date: string;
  text: string;
}

export const mockActivities: Activity[] = [
  { id: 1, date: "JUN 26", text: 'Responded to need "Volunteer Activities"' },
  { id: 2, date: "JUN 24", text: 'Added an interest "Volunteer Activities"' },
  { id: 3, date: "JUN 23", text: 'Joined the group "Boardsmanship Forum"' },
  { id: 4, date: "JUN 21", text: 'Responded to need "In-Kind Opportunity"' },
];
