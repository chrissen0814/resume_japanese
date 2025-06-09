export default function HobbyInfo({
  image,
  name,
}: {
  image: string;
  name: string;
}) {
  return (
    <div className="flex flex-col justify-center">
      <img
        key={name}
        src={image}
        alt={name}
        className="rounded shadow h-60 w-60 sm:w-60 sm:h-60 object-cover"
          />
          <p className="text-center text-black mt-4 text-lg">{ name}</p>
      </div>
      
  );
}
