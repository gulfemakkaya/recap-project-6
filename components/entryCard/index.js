import Image from "next/image";

export default function EntryCard({ id, image, name, location }) {
  return (
    <li key={id}>
      <Image src={image} alt={name} />
      <p>{name}</p>
      <p>{location}</p>
    </li>
  );
}
