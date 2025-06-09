export default function SkillInfo({ image, name }: {image:string, name:string}) { 
    return (
        <div className="flex flex-col justify-center items-center">
      <img
        key={name}
        src={image}
        alt={name}
        className="sm:w-12 h-12 sm:h-12"
          />
          <p className="text-center text-black mt-4">{ name}</p>
      </div>
    )
}