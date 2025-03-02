import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FlightDeals() {
  // Sample flight deals data
  const deals = [
    {
      id: 1,
      destination: "Rio de Janeiro",
      image: "/placeholder.svg?height=200&width=300",
      price: "R$399",
      from: "São Paulo",
    },
    {
      id: 2,
      destination: "Recife",
      image: "/placeholder.svg?height=200&width=300",
      price: "R$499",
      from: "Brasília",
    },
    {
      id: 3,
      destination: "Fortaleza",
      image: "/placeholder.svg?height=200&width=300",
      price: "R$459",
      from: "Rio de Janeiro",
    },
    {
      id: 4,
      destination: "Manaus",
      image: "/placeholder.svg?height=200&width=300",
      price: "R$599",
      from: "São Paulo",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Flight Deals</h2>
          <Link href="#" className="text-primary font-medium hover:underline">
            View all deals
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={deal.image || "/placeholder.svg"}
                  alt={`Flight to ${deal.destination}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">
                  {deal.destination}
                </h3>
                <p className="text-gray-600 text-sm mb-3">From {deal.from}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-500">Starting from</p>
                    <p className="text-primary font-bold text-xl">
                      {deal.price}
                    </p>
                  </div>
                  <Button size="sm" variant="outline">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
