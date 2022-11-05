const Palette = ({ palette, selectColor, color }) => {
  return (
    <div className="palette-container">
      {palette.map((item) => (
        <div
          style={{ backgroundColor: item.color }}
          className={
            color === item.color ? "add-border palette-unit" : "palette-unit"
          }
          onClick={() => selectColor(item)}
        ></div>
      ))}
    </div>
  );
};

export default Palette;
