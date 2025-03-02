import Image from "next/image";
import Link from "next/link";

interface DestinationCardProps {
  image: string;
  title: string;
  price: string;
}

export default function DestinationCard({
  image,
  title,
  price,
}: DestinationCardProps) {
  return (
    <Link href="#" className="group">
      <div className="overflow-hidden rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg">
        <div className="relative h-48">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-sm opacity-90">A partir de</p>
            <p className="text-2xl font-bold">R$ {price}</p>
          </div>
        </div>
        <div className="bg-white p-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Ida e volta</span>
            <span className="text-sm font-medium text-[#FF7020] group-hover:underline">
              Ver ofertas
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
