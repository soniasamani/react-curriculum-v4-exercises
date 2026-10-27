function SnackList() {
  const snacks = [
    { name: 'Ice Cream', rank: 3 },
    { name: 'Popcorn', rank: 2 },
    { name: 'Chocolate', rank: 1 },
  ];
  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);
  return (
    <ol>
      {sortedSnacks.map((snack) => (
        <li key={snack.rank}>{snack.name}</li>
      ))}
    </ol>
  );
}

export default SnackList;
