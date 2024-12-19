const LevelIndicator: React.FC<{ points: number }> = ({ points }) => {
  const getColor = () => {
    if (points >= 80) return "bg-green-500";
    if (points >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <span
      className={`inline-block w-4 h-4 rounded-full ${getColor()}`}
      title={`Nivel basado en ${points} puntos`}
    ></span>
  );
};

export default LevelIndicator;
