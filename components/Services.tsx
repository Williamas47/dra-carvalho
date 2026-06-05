import { Home, Baby, FileText, Banknote, Briefcase } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Reconhecimento de Vínculo de Empregada Doméstica",
    description:
      "Ajuizamento de ação trabalhista para a regularização legal do trabalho doméstico exercido sem o devido registro. Pleiteamos em juízo que o tempo de serviço seja validado por lei e que todos os direitos retroativos e reflexos sejam integralmente quitados.",
  },
  {
    icon: Baby,
    title: "Estabilidade da Gestante",
    description:
      "Atuação judicial especializada na defesa da trabalhadora gestante contra demissões indevidas. Ingressamos com a ação cabível para exigir judicialmente a reintegração ao emprego ou o recebimento de todas as indenizações substitutivas correspondentes ao período de estabilidade.",
  },
  {
    icon: FileText,
    title: "Descumprimento de Direitos e Benefícios da Categoria",
    description:
      "Cobrança judicial do cumprimento de benefícios obrigatórios previstos em Convenção Coletiva de Trabalho (CCT). Caso a empresa tenha omitido o pagamento de cláusulas específicas, como auxílio-creche e auxílio-natalidade, buscamos a condenação da empresa ao pagamento imediato desses valores por via judicial.",
  },
  {
    icon: Banknote,
    title: "Irregularidades no FGTS e Seguro-Desemprego",
    description:
      "Ação judicial para a regularização de contas vinculadas com depósitos de FGTS ausentes, bem como o pedido de liberação das guias ou a condenação da empresa ao pagamento da indenização substitutiva do seguro-desemprego diretamente em juízo.",
  },
  {
    icon: Briefcase,
    title: "Verbas Rescisórias e Rescisão Contratual",
    description:
      "Cobrança judicial dos valores devidos e não pagos ao término do contrato de trabalho, cumulada com o pedido de obrigação de fazer para que o empregador envie a correta notificação de encerramento do vínculo aos órgãos oficiais.",
  },
];

export default function Services() {
  return (
    <section id="areas" style={{ background: "#F2F2F2" }} className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "#C9A96E" }}>
            Nossos Serviços
          </span>
          <h2
            className="font-display text-3xl md:text-4xl font-bold mt-3 mb-6"
            style={{ fontFamily: "Arial, sans-serif", color: "#555555" }}
          >
            Como podemos apoiar você
          </h2>
          <div className="section-divider mx-auto mb-8" />
          <p className="text-base leading-relaxed max-w-2xl mx-auto mb-3" style={{ color: "#666666" }}>
            Reconhecemos que compreender a singularidade de cada caso é fundamental para proteger os seus direitos.
            Valorizamos a importância do seu caso e buscamos entender suas necessidades específicas para trazer
            a tranquilidade jurídica que você precisa e merece.
          </p>
          <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "#666666" }}>
            Conheça nossas áreas de atuação e veja como podemos apoiar você no seu caso trabalhista:
          </p>
        </div>

        {/* Services list */}
        <div className="mt-12 space-y-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-3xl p-7 flex gap-6 items-start card-hover"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #555555, #8A8A8A)" }}
                >
                  <Icon size={24} color="white" />
                </div>
                <div>
                  <h3
                    className="font-display text-lg font-bold mb-2"
                    style={{ fontFamily: "Arial, sans-serif", color: "#555555" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div
          className="mt-10 text-center py-6 px-8 rounded-2xl"
          style={{ background: "rgba(85,85,85,0.07)", border: "1px solid rgba(85,85,85,0.12)" }}
        >
          <p className="text-sm font-semibold" style={{ color: "#555555" }}>
            Todos os nossos atendimentos para as áreas acima são realizados de forma online ou presencial em Bauru (SP).
          </p>
        </div>
      </div>
    </section>
  );
}
