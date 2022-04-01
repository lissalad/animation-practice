function Bars() {
  const barStyle = "h-10 w-10 box rounded ";
  const collection = [];

  const shades = [
    "bg-teal-100",
    "bg-teal-200",
    "bg-teal-300",
    "bg-teal-400",
    "bg-teal-500",
    "bg-teal-600",
    "bg-teal-700",
    "bg-teal-800",
    "bg-teal-900",
  ];

  for (let i = 0; i < 9; i += 1) {
    let shade = shades[i];
    let style = barStyle + shade;
    collection.push(style);
  }

  return (
    <>
      {collection.map((style, i) => {
        return <div key={i} alt="bar" className={style}></div>;
      })}
    </>
  );
}

export default Bars;
