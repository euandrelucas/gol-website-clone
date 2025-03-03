import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Wifi,
  Smartphone,
  Headphones,
  Music,
  SofaIcon as Couch,
  Power,
} from "lucide-react";

const aircraftTypes = [
  {
    name: "Boeing 737-700",
    image: "/frota/b737.webp?height=300&width=600",
    stats: [
      { label: "Assentos", value: "138" },
      { label: "GOL+ Conforto (Nacional)", value: "36 assentos" },
      { label: "GOL+ Conforto (Internacional)", value: "06 assentos" },
      { label: "Premium Economy (Internacional)", value: "20 assentos" },
      { label: "Banheiros", value: "3" },
      { label: "Comprimento", value: "33,6 m" },
      { label: "Altura", value: "12,5 m" },
      {
        label: "Envergadura",
        value: "34,3 m (sem winglets) - 35,7 m (com winglets)",
      },
      { label: "Velocidade média de cruzeiro", value: "Mach 0,781" },
      { label: "Alcance máximo", value: "5.570 km" },
    ],
    features: ["GOL Online", "Música a bordo", "Tomada/USB"],
  },
  {
    name: "Boeing 737-800",
    image: "/frota/b738.webp?height=300&width=600",
    stats: [
      { label: "Assentos", value: "186" },
      { label: "GOL+ Conforto (Nacional)", value: "42 assentos" },
      { label: "GOL+ Conforto (Internacional)", value: "12 assentos" },
      { label: "Premium Economy (Internacional)", value: "20 assentos" },
      { label: "Banheiros", value: "3" },
      { label: "Comprimento", value: "39,5 m" },
      { label: "Altura", value: "12,5 m" },
      {
        label: "Envergadura",
        value: "34,3 m (sem winglets) - 35,7 m (com winglets)",
      },
      { label: "Velocidade média de cruzeiro", value: "Mach 0,789" },
      { label: "Alcance máximo", value: "5.440 km" },
    ],
    features: ["GOL Online", "Música a bordo", "Entrada USB"],
  },
  {
    name: "Boeing 737-8 MAX",
    image: "/frota/b73max.webp?height=300&width=600",
    stats: [
      { label: "Assentos", value: "186" },
      { label: "GOL+ Conforto (Nacional)", value: "42 assentos" },
      { label: "GOL+ Conforto (Internacional)", value: "12 assentos" },
      { label: "Premium Economy (Internacional)", value: "20 assentos" },
      { label: "Banheiros", value: "3" },
      { label: "Comprimento", value: "39,5 m" },
      { label: "Altura", value: "12,5 m" },
      { label: "Envergadura", value: "35,9 m" },
      { label: "Velocidade média de cruzeiro", value: "Mach 0,790" },
      { label: "Alcance máximo", value: "6.704 km" },
    ],
    features: ["GOL Online", "Música a bordo", "Tomada/USB"],
  },
  {
    name: "Boeing 737-800 BCF",
    image: "/frota/b737cargo.webp?height=300&width=600",
    stats: [
      { label: "Comprimento", value: "39,5 m" },
      { label: "Altura", value: "12,5 m" },
      { label: "Envergadura", value: "35,7 m" },
      { label: "Velocidade média de cruzeiro", value: "Mach 0,789" },
      { label: "Alcance máximo", value: "5.440 km" },
      { label: "Peso máximo de carga", value: "23,95 t" },
    ],
    features: [],
  },
];

const fleetFeatures = [
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Apoio de celular e tablet",
    description:
      "Suporte na poltrona para apoio do celular ou tablet, facilitando o uso do GOL Online.",
  },
  {
    icon: <Headphones className="h-6 w-6" />,
    title: "Apoio de cabeça",
    description:
      "Descanso móvel para a cabeça, que se ajusta perfeitamente para maior conforto e apoio.",
  },
  {
    icon: <Music className="h-6 w-6" />,
    title: "Música a bordo no embarque e desembarque",
    description:
      "Ambientação brasileira, climatizando sua entrada ou saída da aeronave ao som de MPB e Bossa Nova.",
  },
  {
    icon: <Couch className="h-6 w-6" />,
    title: "Aeronaves com assentos de couro",
    description:
      "Assentos de couro sintético para um voo ainda mais confortável e sofisticado para os passageiros.",
  },
  {
    icon: <Wifi className="h-6 w-6" />,
    title: "GOL Online: Internet e entretenimento a bordo",
    description:
      "Conecte-se ao portal GOL Online com seu dispositivo (smartphone, tablet ou notebook) e aproveite ainda mais o seu voo.",
  },
  {
    icon: <Power className="h-6 w-6" />,
    title: "Tomadas ou USB para carregar dispositivos",
    description:
      "Assentos equipados com tomadas ou USB para carregar aparelhos eletrônicos durante o voo.",
  },
];

export default function NossaFrota() {
  return (
    <main className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Nossa Frota
        </h1>

        <section className="mb-12">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-[#FF7020]">
                Experiência além do voo
              </h2>
              <p className="text-gray-700 mb-4">
                Atualmente, a GOL possui aeronaves dos modelos 737-700, 737-800,
                737-8 MAX e 737-800 BCF. Os aviões operam rotas no Brasil, na
                América do Sul, na América do Norte e no Caribe, levando o
                conforto do padrão GOL pelo continente.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Qualidade da Nossa Frota
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fleetFeatures.map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="text-[#FF7020] mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Tabs defaultValue={aircraftTypes[0].name} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            {aircraftTypes.map((aircraft) => (
              <TabsTrigger
                key={aircraft.name}
                value={aircraft.name}
                className="hover:cursor-pointer bg-white"
              >
                {aircraft.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {aircraftTypes.map((aircraft) => (
            <TabsContent key={aircraft.name} value={aircraft.name}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[#FF7020]">
                    {aircraft.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <Image
                        src={aircraft.image || "/placeholder.svg"}
                        alt={aircraft.name}
                        width={600}
                        height={300}
                        className="rounded-lg shadow-md"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">
                        Estatísticas
                      </h3>
                      <ul className="space-y-2">
                        {aircraft.stats.map((stat, index) => (
                          <li key={index} className="flex justify-between">
                            <span className="font-medium">{stat.label}:</span>
                            <span>{stat.value}</span>
                          </li>
                        ))}
                      </ul>
                      {aircraft.features.length > 0 && (
                        <>
                          <h3 className="text-xl font-semibold mt-6 mb-4">
                            Características
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {aircraft.features.map((feature, index) => (
                              <Badge key={index} variant="secondary">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#FF7020]">
              Observações
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Mach é um indicador da relação entre a velocidade da aeronave e
                a velocidade do som.
              </li>
              <li>
                As velocidades médias de cruzeiro estão associadas a uma
                altitude de 35.000 ft.
              </li>
              <li>
                Mach 0,79 ao nível do mar vale aproximadamente 968 km/h. Mach
                0,79 a 35.000 ft, vale aproximadamente 752 km/h.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
