import Image from "next/image";

export default function EntryCard({ image, name, location }) {
  return (
    <li>
      <Image src={image} alt={name} width={240} height={240} />
      <p>{name}</p>
      <p>{location}</p>
    </li>
  );
}
