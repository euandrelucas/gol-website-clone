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
                <Link href="#" className="hover:text-[#FF7020]">
                  Nossa História
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#FF7020]">
                  Frota
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#FF7020]">
                  Destinos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#FF7020]">
                  Trabalhe Conosco
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#FF7020]">
                  Relação com Investidores
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Informações</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-[#FF7020]">
                  Horários de Voos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#FF7020]">
                  Bagagem
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#FF7020]">
                  Check-in
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#FF7020]">
                  Documentação
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#FF7020]">
                  Direitos do Passageiro
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-[#FF7020]">
                  GOL Premium
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#FF7020]">
                  Programa Smiles
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#FF7020]">
                  Cartão de Crédito GOL
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#FF7020]">
                  Serviços Especiais
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#FF7020]">
                  GOL+ Conforto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Atendimento</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-[#FF7020]">
                  Central de Vendas
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#FF7020]">
                  Fale Conosco
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#FF7020]">
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#FF7020]">
                  Reembolso
                </Link>
              </li>
            </ul>

            <div className="mt-6">
              <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-[#FF7020]">
                  <Facebook size={20} />
                </Link>
                <Link href="#" className="hover:text-[#FF7020]">
                  <Twitter size={20} />
                </Link>
                <Link href="#" className="hover:text-[#FF7020]">
                  <Instagram size={20} />
                </Link>
                <Link href="#" className="hover:text-[#FF7020]">
                  <Youtube size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} GOL Linhas Aéreas. Todos os direitos
              reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-[#FF7020]"
              >
                Política de Privacidade
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-[#FF7020]"
              >
                Termos de Uso
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-[#FF7020]"
              >
                Cookies
              </Link>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center md:text-left">
            Este é um site não oficial, criado apenas para fins de demonstração
            de portfólio.
          </p>
        </div>
      </div>
    </footer>
  );
}
