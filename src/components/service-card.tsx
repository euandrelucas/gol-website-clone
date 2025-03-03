import { Luggage, CheckSquare, Armchair, Award } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  link,
}: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-4 text-[#FF7020]">
        {icon === "luggage" && <Luggage size={32} />}
        {icon === "check-in" && <CheckSquare size={32} />}
        {icon === "seat" && <Armchair size={32} />}
        {icon === "miles" && <Award size={32} />}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {link && (
        <Link href={link}>
          <button className="mt-4 hover:cursor-pointer text-[#FF7020] font-medium hover:underline">
            Saiba mais
          </button>
        </Link>
      )}
    </div>
  );
}
