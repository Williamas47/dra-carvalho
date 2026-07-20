import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="py-24" style={{ background: "#F2F2F2" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="relative w-full max-w-sm mx-auto h-[520px] rounded-3xl overflow-hidden">
                <Image
                  src="/adv-1.jpeg"
                  alt="Dra. Eduarda Carvalho"
                  fill
                  sizes="(min-width: 1024px) 384px, 100vw"
                  className="object-cover object-top"
                />
              </div>

              <div
                className="absolute -bottom-5 -right-5 w-36 h-36 rounded-2xl -z-10"
                style={{ background: "linear-gradient(135deg, #C9A96E, #E8D5A3)" }}
              />
              <div
                className="absolute -top-5 -left-5 w-24 h-24 rounded-2xl -z-10"
                style={{ background: "linear-gradient(135deg, #555555, #8A8A8A)" }}
              />
            </div>
          </div>

          {/* Text content */}
          <div className="order-1 lg:order-2">
            <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "#C9A96E" }}>
              Sobre
            </span>

            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-2 leading-tight"
              style={{ fontFamily: "Arial, sans-serif", color: "#555555" }}
            >
              Dra. Eduarda Carvalho
            </h2>

            <div className="section-divider mb-6" />

            <p className="text-base leading-relaxed mb-4" style={{ color: "#666666" }}>
              Advogada especialista em <strong style={{ color: "#555555" }}>Direito Trabalhista</strong>,
              com ênfase em <strong style={{ color: "#555555" }}>Causas Femininas</strong>.
            </p>

            <p className="text-base leading-relaxed mb-8" style={{ color: "#666666" }}>
              Pós-graduada em Direito e Processo do Trabalho, com especializações em{" "}
              <strong style={{ color: "#555555" }}>Direito da Mulher</strong> · OAB/SP 523.051.
            </p>

            <a
              href="https://wa.me/5514910149061?text=Olá%2C+Dra.+Eduarda!+Gostaria+de+agendar+uma+consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #555555, #8A8A8A)" }}
            >
              Agendar consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
