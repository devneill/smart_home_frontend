export default function getRandomName() {
  const names = [
    "Enrique",
    "West",
    "Damien",
    "Braun",
    "Ellie",
    "Osborne",
    "Cierra",
    "Vega",
    "Alden",
    "Cantrell",
    "Kierra",
    "Gentry",
    "Pierre",
    "Cox",
    "Thomas",
    "Crane",
  ];
  const selector = Math.floor(Math.random() * names.length);
  return `${names[selector]}'s device`;
}
