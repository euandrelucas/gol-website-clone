import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Sobre a GOL</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/nossa-historia" className="hover:text-[#FF7020]">
                  Nossa História
                </Link>
              </li>
              <li>
                <Link href="/nossa-frota" className="hover:text-[#FF7020]">
                  Nossa Frota
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.voegol.com.br/sobre-a-gol/anuncie-na-gol"
                  className="hover:text-[#FF7020]"
                >
                  Anuncie na GOL
                </Link>
              </li>
              <li>
                <Link href="/trabalhe-conosco" className="hover:text-[#FF7020]">
                  Carreiras
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.voegol.com.br/sobre-a-gol/compliance"
                  className="hover:text-[#FF7020]"
                >
                  Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="https://ri.voegol.com.br/?_gl=1*19c3258*_gcl_au*MjEyMTQzNDk5NC4xNzQwNTI2NTM1"
                  className="hover:text-[#FF7020]"
                >
                  Investidores
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.voegol.com.br/sobre-a-gol/imprensa"
                  className="hover:text-[#FF7020]"
                >
                  Imprensa
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.voegol.com.br/sobre-a-gol/sustentabilidade"
                  className="hover:text-[#FF7020]"
                >
                  Sustentabilidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://www.voegol.com.br/agencias"
                  className="hover:text-[#FF7020]"
                >
                  Agências
                </Link>
              </li>
              <li>
                <Link
                  href="/informacoes/formas-pagamento"
                  className="hover:text-[#FF7020]"
                >
                  Formas de Pagamento
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.voegol.com.br/servicos-gol/revista-gol"
                  className="hover:text-[#FF7020]"
                >
                  Revista GOL
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.voegol.com.br/empresas"
                  className="hover:text-[#FF7020]"
                >
                  Empresas
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.voegol.com.br/fretamento-e-eventos"
                  className="hover:text-[#FF7020]"
                >
                  Fretamento e Eventos
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.voegol.com.br/atendimento/lojas-e-quiosques-gol"
                  className="hover:text-[#FF7020]"
                >
                  Lojas e Quiosques GOL
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.voegol.com.br/sobre-a-gol/fornecedores"
                  className="hover:text-[#FF7020]"
                >
                  Fornecedores
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://www.voegol.com.br/atendimento/contatos-atendimento-online"
                  className="hover:text-[#FF7020]"
                >
                  Telefones
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.voegol.com.br/informacoes-legais"
                  className="hover:text-[#FF7020]"
                >
                  Informações Legais
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.voegol.com.br/premios-gol"
                  className="hover:text-[#FF7020]"
                >
                  Prêmios
                </Link>
              </li>
            </ul>

            <div className="mt-6">
              <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://www.facebook.com/voegol/"
                  className="hover:text-[#FF7020]"
                >
                  <Facebook size={20} />
                </Link>
                <Link
                  href="https://www.twitter.com/voegoloficial"
                  className="hover:text-[#FF7020]"
                >
                  <Twitter size={20} />
                </Link>
                <Link
                  href="https://www.instagram.com/voegoloficial/"
                  className="hover:text-[#FF7020]"
                >
                  <Instagram size={20} />
                </Link>
                <Link
                  href="https://www.youtube.com/user/gol"
                  className="hover:text-[#FF7020]"
                >
                  <Youtube size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-[#FF7020]/10 p-4 rounded-lg border border-[#FF7020]/20">
              <h3 className="text-lg font-bold mb-2 text-[#FF7020]">
                Aviso Importante
              </h3>
              <p className="text-sm">
                Este é um site NÃO OFICIAL da GOL Linhas Aéreas, criado
                exclusivamente para fins de estudo e demonstração de habilidades
                de desenvolvimento web.
              </p>
              <p className="text-sm mt-2">
                Não possui nenhuma afiliação com a GOL Linhas Aéreas S.A. e não
                deve ser utilizado para compras reais de passagens ou serviços.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} <Link href="https://andrepaiva.dev" className="hover:text-[#FF7020]">André Paiva</Link> - Não afiliado à
              GOL Linhas Aéreas
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="https://www.voegol.com.br/informacoes-legais/politica-de-privacidade-e-protecao-de-dados"
                className="text-sm text-gray-400 hover:text-[#FF7020]"
              >
                Política de Privacidade
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-[#FF7020]"
              >
                Personalizar Cookies
              </Link>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center md:text-left font-bold">
            ESTE SITE FOI CRIADO APENAS PARA FINS DE ESTUDO E NÃO REPRESENTA O
            SITE OFICIAL DA GOL LINHAS AÉREAS
          </p>
        </div>
      </div>
    </footer>
  );
}
