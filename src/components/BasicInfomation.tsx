export default function BasicInfomation({
  name,
  info,
}: {
  name: string;
  info: string;
}) {
  return (
    <div className="w-full flex-col items-start">
      <div className="w-full flex flex-row justify-start space-y-1">
        <p className="text-xl text-gray-400 w-48 text-start">{name}</p>
        <p className="text-xl font-bold text-black">{info}</p>
      </div>
      <hr className="border-t border-gray-200 my-3" />
    </div>
  );
}
