import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  FileText,
  Accessibility,
  Eye,
  Ear,
  FerrisWheelIcon as WheelchairIcon,
  Brain,
  PersonStanding,
  Stethoscope,
  Syringe,
  BedIcon,
  Pill,
  AirVentIcon as Lung,
  BadgeHelp,
  HeartPulse,
  Calendar,
  Baby,
  Dog,
  AlertTriangle,
} from "lucide-react";

export default function AssistenciaEspecial() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Assistência especial em aeroporto"
          layout="fill"
          objectFit="cover"
          className="object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#FF7020]/90 flex flex-col justify-center">
          <div className="container mx-auto px-4">
            <Link
              href="/informacoes"
              className="inline-flex items-center text-white mb-6 hover:opacity-80"
            >
              <ArrowLeft className="mr-2" />
              Voltar para Informações
            </Link>
            <h1 className="text-5xl font-bold text-white mb-4">
              Assistência Especial
            </h1>
            <p className="text-xl text-white max-w-2xl">
              Tudo sobre o embarque de gestantes, pessoas com deficiência,
              idosos, enfermos e muito mais.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Documentação Médica */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Documentação Médica
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <FileText className="h-8 w-8 text-[#FF7020]" />
                  <CardTitle className="text-xl font-bold">
                    Atestado Médico MEDIF
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="mb-6">
                  Para Clientes que necessitam de atenção médica ou equipamentos
                  especiais durante o voo, é necessário o preenchimento do
                  formulário MEDIF, que deve ser preenchido pelo médico do
                  passageiro e enviado à GOL entre 15 dias e 72 horas antes do
                  embarque. Após a análise criteriosa do formulário, nossa
                  equipe emite um parecer que certifica a aptidão ou não do
                  Cliente em fazer a viagem aérea. Se existir alguma dúvida
                  sobre o preenchimento do MEDIF ou a necessidade de exames
                  adicionais, é possível fazer a solicitação sem ônus para a
                  GOL.
                </p>
                <Link href="https://www.voegol.com.br/informacoes/assistencia-especial/atestado-medico-medif">
                  <Button className="w-full hover:cursor-pointer bg-[#FF7020] hover:bg-[#E56218] text-white">
                    ACESSAR INFORMAÇÕES SOBRE O ATESTADO MEDIF
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <FileText className="h-8 w-8 text-[#FF7020]" />
                  <CardTitle className="text-xl font-bold">
                    Cartão Médico FREMEC
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="mb-6">
                  O FREMEC (Frequent Traveller Medical Card) é um documento para
                  os Clientes que precisam de assistência especial. Com ele, não
                  é mais necessário apresentar atestado médico em todas as
                  viagens, bastando usar um documento pessoal no momento do
                  embarque. No entanto, o cadastro FREMEC é elegível apenas para
                  Clientes cuja condição médica seja de caráter permanente e
                  estável, sem comorbidades.
                </p>
                <Link href="https://www.voegol.com.br/informacoes/fremec">
                  <Button className="w-full hover:cursor-pointer bg-[#FF7020] hover:bg-[#E56218] text-white">
                    ACESSAR INFORMAÇÕES SOBRE O CARTÃO FREMEC
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 bg-white">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Desconto para o acompanhante em voos com companhias parceiras
              </h3>
              <p>
                Quando a reserva envolver trechos internacionais operados por
                outras companhias, os documentos MEDIF ou FREMEC devem ser
                encaminhados no prazo de até 7 dias antes do embarque.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Tipos de Assistência */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Tipos de Assistência
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Eye className="h-8 w-8" />,
                title: "Pessoa com deficiência visual (cego)",
                description:
                  "Confira a documentação necessária para o embarque com cão-guia.",
                link: "https://www.voegol.com.br/informacoes/assistencia-especial/pessoa-com-deficiencia-visual",
                buttonText: "ACESSAR PESSOA COM DEFICIÊNCIA VISUAL (CEGO)",
              },
              {
                icon: <Ear className="h-8 w-8" />,
                title: "Pessoa com deficiência auditiva (surdo)",
                description:
                  "Precisa viajar com cão-ouvinte? Saibam mais sobre o atendimento e transporte.",
                link: "https://www.voegol.com.br/informacoes/assistencia-especial/pessoa-com-deficiencia-auditiva-surdo",
                buttonText: "ACESSAR PESSOA COM DEFICIÊNCIA AUDITIVA (SURDO)",
              },
              {
                icon: <WheelchairIcon className="h-8 w-8" />,
                title: "Pessoa com deficiência física ou motora permanente",
                description:
                  "Conheça o nosso atendimento e saiba como viajar com cadeira de rodas ou muletas",
                link: "https://www.voegol.com.br/informacoes/assistencia-especial/pessoa-com-deficiencia-fisica-ou-motora",
                buttonText: "ACESSAR INFORMAÇÕES",
              },
              {
                icon: <Brain className="h-8 w-8" />,
                title: "Pessoa com deficiência intelectual ou mental",
                description:
                  "Confira informações sobre procedimentos de embarque e demais informações sobre o serviço.",
                link: "https://www.voegol.com.br/informacoes/assistencia-especial/pessoa-com-deficiencia-intelectual-ou-mental",
                buttonText: "ACESSAR INFORMAÇÕES",
              },
              {
                icon: <PersonStanding className="h-8 w-8" />,
                title: "Pessoa com mobilidade reduzida temporária",
                description:
                  "Se o Cliente está com a capacidade de locomoção reduzida temporariamente por motivos médicos (imobilização, cirurgias etc.) e precisa de assistência, peça o auxílio no momento da compra da passagem ou no Atendimento Online da GOL com até 72 horas de antecedência. Chegando ao aeroporto, identifique-se para um de nossos Colaboradores.",
                link: null,
                buttonText: null,
              },
              {
                icon: <Baby className="h-8 w-8" />,
                title: "Gestantes",
                description:
                  "Informações sobre atendimento preferencial, documentos para embarque e muito mais.",
                link: "https://www.voegol.com.br/informacoes/assistencia-especial/gestantes",
                buttonText: "ACESSAR GESTANTES",
              },
              {
                icon: <Calendar className="h-8 w-8" />,
                title: "Pessoa com 60 anos ou mais",
                description:
                  "Regras para o embarque de idosos com ou sem problemas de saúde.",
                link: "https://www.voegol.com.br/informacoes/pessoa-com-60-anos-ou-mais",
                buttonText: "ACESSAR PESSOA COM 60 ANOS OU MAIS",
              },
              {
                icon: <PersonStanding className="h-8 w-8" />,
                title: "Pessoa com obesidade",
                description:
                  "Descubra como a GOL pode fazer sua viagem ser ainda mais confortável.",
                link: "https://www.voegol.com.br/informacoes/assistencia-especial/pessoa-com-obesidade",
                buttonText: "ACESSAR PESSOA COM OBESIDADE",
              },
              {
                icon: <HeartPulse className="h-8 w-8" />,
                title: "Assistência emergencial",
                description:
                  "Conheça o serviço que oferece desconto na tarifa em caso de falecimento familiar.",
                link: "https://www.voegol.com.br/informacoes/assistencia-especial/assistencia-emergencial",
                buttonText: "ACESSAR ASSISTENCIA EMERGENCIAL",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-[#FF7020] text-white p-2 rounded-full">
                      {item.icon}
                    </div>
                    <CardTitle className="text-lg font-bold">
                      {item.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="mb-6">{item.description}</p>
                  {item.buttonText && (
                    <Link href={item.link || "#"}>
                      <Button className="w-full hover:cursor-pointer bg-[#FF7020] hover:bg-[#E56218] text-white text-xs">
                        {item.buttonText}
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Condições Médicas */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Condições Médicas
          </h2>

          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Stethoscope className="h-6 w-6 text-[#FF7020]" />
                <CardTitle className="text-xl font-bold">
                  Doenças e condições que pedem autorização
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4">
                Doenças agudas (cardiorrespiratórias, AVC, entre outras),
                cirurgias, lesões provocadas por acidentes ou condições crônicas
                exigem uma autorização prévia da equipe médica da GOL para
                viajar. Por isso, orientamos que o Cliente entre em contato com
                o nosso atendimento para saber quais documentos e formulários
                devem ser providenciados antes do embarque.
              </p>
              <div className="bg-gray-100 p-4 rounded">
                <p>
                  <span className="font-bold">GAL</span> - Para informações
                  sobre a aquisição desse serviço, fale com o nosso atendimento
                  on-line acessando ícone da GAL localizado no canto inferior da
                  página.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Stethoscope className="h-6 w-6 text-[#FF7020]" />
                <CardTitle className="text-xl font-bold">
                  Cirurgias recentes
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4">
                Se o Cliente realizar uma cirurgia a menos de 30 dias antes da
                data do embarque, precisa preencher e enviar o MEDIF (entre 15
                dias e 72 horas antes do voo) para análise da equipe médica da
                GOL
              </p>
              <Link href="https://www.voegol.com.br/informacoes/assistencia-especial/atestado-medico-medif">
                <Button className="w-full hover:cursor-pointer bg-[#FF7020] hover:bg-[#E56218] text-white">
                  ACESSAR INFORMAÇÕES SOBRE O ATESTADO MEDIF
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <HeartPulse className="h-6 w-6 text-[#FF7020]" />
                <CardTitle className="text-xl font-bold">Marca-passo</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p>
                Clientes que utilizam marca-passo não podem ser submetidos à
                inspeção por detector de metais, OU seja, não passam pelo raio X
                no momento do embarque. É utilizado um procedimento alternativo
                que não interfere no funcionamento do dispositivo. Para isso, no
                momento do check-in, é necessário que o passageiro apresente um
                laudo médico.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Brain className="h-6 w-6 text-[#FF7020]" />
                <CardTitle className="text-xl font-bold">
                  Doenças neurodegenerativas
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4">
                A GOL se preocupa com o bem-estar dos seus Clientes e, para lhes
                proporcionar uma viagem tranquila e segura, passageiros com
                doenças neurodegenerativas (Alzheimer, Esclerose Múltipla, entre
                outras) que causem dificuldades cognitivas, devem nos enviar o
                MEDIF em até 48 horas antes da viagem (viajando desacompanhado
                ou acompanhado).
              </p>
              <p>
                Nessas situações, o acompanhante deve ser maior de 18 anos e
                capaz de oferecer assistência ao passageiro com necessidade
                especial durante todo o voo. O desconto será aplicado somente
                após o preenchimento e a aprovação dos formulários MEDIF ou
                FREMEC.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <AlertTriangle className="h-6 w-6 text-[#FF7020]" />
                <CardTitle className="text-xl font-bold">
                  Pessoa com quadro alérgico
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p>
                Para clientes que possuem algum tipo de alergia respiratória,
                cutânea, ocular, alimentar, medicamentosa, a insetos e pelos de
                animais, a GOL não realiza nenhum tipo de adequação de seus
                procedimentos operacionais, assim como não oferecemos um serviço
                de bordo especial. Os produtos oferecidos podem conter nuts,
                leite de vaca e soja, dentre outros alérgenos. Recomendamos que
                os clientes busquem orientação médica e nutricional e possuam
                seus medicamentos utilizados em crises alérgicas em fácil acesso
                na bagagem, bem como a informação sobre o produto a qual é
                alérgico. Em caso de alergias extremas, a tripulação deverá ser
                comunicada durante o embarque. Não é possível garantir uma
                viagem isenta de um determinado alérgeno.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <AlertTriangle className="h-6 w-6 text-[#FF7020]" />
                <CardTitle className="text-xl font-bold">
                  Passageiros com Covid-19
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <h3 className="font-bold mb-2">
                Flexibilização de remarcação de passagens para passageiros com
                Covid-19
              </h3>
              <p className="mb-4">
                Clientes com sintomas ou diagnosticados com o coronavírus devem
                contatar nossos Canais de Atendimento - com antecedência ao
                embarque - para solicitar a análise de alteração da viagem sem
                custos*, para até 30 dias após a data de embarque original. A
                recomendação é que a nova viagem aconteça após 10 dias do
                diagnóstico positivo ou do início dos sintomas, entretanto caso
                exista necessidade de embarque num prazo inferior, a remarcação
                será concluída apenas após a apresentação do exame RT-PCR (nariz
                e garganta) negativo, no prazo de 72hs antes da data do seu novo
                embarque.
              </p>
              <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                <h4 className="font-bold mb-2">Importante:</h4>
                <p>
                  Alterações fora das condições descritas abaixo, reembolsos e
                  não comparecimentos estão sujeitos a aplicação de taxas e
                  multas de acordo com a regra da tarifa adquirida.
                </p>
              </div>
              <ul className="mt-4 space-y-2">
                <li>• Alteração sem custos ou isenção de taxas</li>
                <li>• Voos vendidos pela GOL operados por Cias Parceiras</li>
                <li>
                  • Reservas de Agências de Viagem, Programa Smiles ou outras
                  Cias Aéreas
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Equipamentos Médicos e Medicamentos */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Equipamentos Médicos e Medicamentos
          </h2>

          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Syringe className="h-6 w-6 text-[#FF7020]" />
                <CardTitle className="text-xl font-bold">
                  Equipamentos médicos
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p>
                Alguns equipamentos médicos têm autorização de embarque como
                bagagem de mão, mas sua utilização a bordo está proibida, como
                nebulizadores e inaladores. Porém, equipamentos de uso
                imprescindível, como marca-passos e bombas de infusão de
                medicamentos contínuos, são permitidos.
              </p>
              <p className="mt-4">
                No caso de agulhas e seringas, o transporte aéreo é autorizado,
                desde que o Cliente tenha consigo medicamentos com etiquetas
                impressas por profissionais que identifiquem o remédio, o
                fabricante ou a indústria farmacêutica. A medicação também
                necessita de receita médica.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <BedIcon className="h-6 w-6 text-[#FF7020]" />
                <CardTitle className="text-xl font-bold">
                  Maca a bordo
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4">
                Se a condição de saúde do Cliente não permite viajar sentado ou
                com o encosto na posição vertical, a GOL oferece um serviço de
                transporte em maca. Para solicitá-lo, é preciso enviar o
                formulário MEDIF em até 72 horas antes do voo. O pedido será
                avaliado pela nossa equipe médica.
              </p>
              <Link href="https://www.voegol.com.br/informacoes/assistencia-especial/atestado-medico-medif">
                <Button className="w-full hover:cursor-pointer bg-[#FF7020] hover:bg-[#E56218] text-white mb-4">
                  ACESSAR INFORMAÇÕES SOBRE O ATESTADO MEDIF
                </Button>
              </Link>
              <div className="bg-gray-100 p-4 rounded">
                <p>
                  <span className="font-bold">GAL</span> - Para informações
                  sobre a aquisição desse serviço, fale com o nosso atendimento
                  on-line acessando ícone da GAL localizado no canto inferior da
                  página.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Pill className="h-6 w-6 text-[#FF7020]" />
                <CardTitle className="text-xl font-bold">
                  Medicamentos
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p>
                Medicamentos podem ser levados na bagagem de mão, desde que
                tenham receita médica. Recomendamos que o Cliente peça ao seu
                médico uma receita adicional e, se necessário, providencie
                também uma no idioma do país de destino (para viagens
                internacionais). É recomendado possuir relatório do seu médico
                para apresentar às autoridades de segurança aeroportuárias. É
                importante considerar que alguns medicamentos, como a insulina,
                precisam de transporte adequado. Por isso, entre em contato com
                o laboratório do fabricante para se informar a respeito do
                acondicionamento adequado durante o voo. Se for necessário usar
                gelo seco para conservar o medicamento, lembre-se que é possível
                transportar somente até 2,5 kg de gelo seco como bagagem de mão
                e despachada.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Lung className="h-6 w-6 text-[#FF7020]" />
                <CardTitle className="text-xl font-bold">
                  Oxigênio a bordo
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4">
                Clientes com problemas cardíacos e/ou respiratórios e que
                necessitam de oxigênio suplementar a bordo devem nos enviar o
                formulário MEDIF até 72 horas antes da viagem. Baixe o
                formulário MEDIF e acesse outras informações importantes sobre
                esse atestado médico.
              </p>
              <p className="mb-4">
                Informamos que o serviço de oxigênio GOL é para uso restrito
                dentro das aeronaves. Se houver necessidade de uso do oxigênio
                na sala de embarque, conexões e desembarque, deverá ser
                providenciado pelo passageiro ou seus responsáveis.
              </p>
              <p className="mb-4">
                Para informações sobre a condição de aquisição desse serviço,
                entre em contato com a Central de Atendimento 24h - 0800 704
                0465.
              </p>
              <p className="font-bold">
                Importante: para uso de oxigênio a bordo são necessários exames
                de gasometria e hemograma recente.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Lung className="h-6 w-6 text-[#FF7020]" />
                <CardTitle className="text-xl font-bold">
                  Embarque com Concentrador Portátil de Oxigênio (CPO)
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4">
                Se o Cliente precisar embarcar com um Concentrador Portátil de
                Oxigênio (CPO), entre em contato antecipadamente com a nossa
                Central de Relacionamento, pelo 0800 704 0465, para que possamos
                nos preparar e autorizar o embarque. Recomendamos que o contato
                seja realizado com 15 dias de antecedência, respeitando o prazo
                máximo de 72 horas antes do voo.
              </p>
              <p className="mb-4">
                O equipamento pode ser embarcado como bagagem de mão, sem
                cobrança de taxas ou excesso de bagagem, desde que as condições
                de transporte desse equipamento sejam cumpridas.
              </p>
              <ul className="space-y-2">
                <li>
                  • Condições para uso e transporte de CPO como bagagem de mão
                </li>
                <li>
                  • Condições para transporte de fonte de energia adicional
                  (baterias) para CPO
                </li>
                <li>
                  • Confira os modelos de aparelhos que são homologados e
                  aprovados para o embarque com a GOL
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Acompanhantes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Acompanhantes
          </h2>

          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Accessibility className="h-6 w-6 text-[#FF7020]" />
                <CardTitle className="text-xl font-bold">
                  Passageiros com problemas de saúde que precisam de
                  acompanhante
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4">
                Nestas situações, a GOL oferece ao acompanhante desconto de 80%
                na passagem aérea.
              </p>
              <p className="mb-4">
                O acompanhante deve ser maior de 18 anos e capaz de oferecer
                assistência ao passageiro com necessidade especial durante todo
                o voo. O desconto será aplicado somente após o preenchimento e
                aprovação dos formulários MEDIF ou FREMEC.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://www.voegol.com.br/informacoes/assistencia-especial/atestado-medico-medif">
                  <Button className="bg-[#FF7020] hover:cursor-pointer hover:bg-[#E56218] text-white flex-1">
                    ACESSAR INFORMAÇÕES SOBRE O ATESTADO MEDIF
                  </Button>
                </Link>
                <Link href="https://www.voegol.com.br/informacoes/fremec">
                  <Button className="bg-[#FF7020] hover:cursor-pointer hover:bg-[#E56218] text-white flex-1">
                    ACESSAR INFORMAÇÕES SOBRE O CARTÃO FREMEC
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <BadgeHelp className="h-6 w-6 text-[#FF7020]" />
                <CardTitle className="text-xl font-bold">
                  Reserva emitida por agências e Smiles
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p>
                Caso a reserva do passageiro com necessidades especiais tenha
                sido emitida através da Smiles ou agências, informamos que a
                reserva do acompanhante deve ser emitida diretamente com a GOL.
                Poderá ser realizada através de nossos canais de atendimento:
                0300 115 2121 ou 0800 704 0465. Neste caso, o desconto de 80% do
                acompanhante será com base na menor tarifa disponível no momento
                da criação da reserva.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Animais de Assistência */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Animais de Assistência
          </h2>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Dog className="h-6 w-6 text-[#FF7020]" />
                <CardTitle className="text-xl font-bold">
                  Passageiros que viajam com animais de assistência emocional
                  (ESAN)
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4">
                Animais de suporte emocional atendem pessoas que, por condições
                emocionais ou psicológicas, podem possuir laudo indicando
                terapia através da adoção de animais.
              </p>
              <p className="mb-4 font-bold">
                Atualmente, a GOL não realiza esse serviço.
              </p>
              <p>
                Você pode transportar seu animal de estimação através dos nossos
                serviços de Dog&Cat Cabine, Dog&Cat + Espaço ou GOLLOG Animais.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <Card className="bg-[#FF7020] text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Precisa de assistência especial?
            </h2>
            <p className="text-lg mb-6">
              Entre em contato com nosso atendimento para solicitar os serviços
              especiais com antecedência.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-[#FF7020] hover:bg-gray-100"
              >
                Central de Atendimento: 0800 704 0465
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-[#FF7020] hover:bg-gray-100"
              >
                Fale Conosco Online
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
