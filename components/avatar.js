export default function Avatar({ name, picture, position }) {
  return (
    <div className="flex items-center">
      <span className="avatar">
        <img src={picture} alt={name} />
      </span>
      <div>
        <div className="font-bold">{name}</div>
        <div className="font-bold">{position}</div>
      </div>
    </div>
  );
}
