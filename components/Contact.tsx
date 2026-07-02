import { MapPin, Mail, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "5514910149072";
const EMAIL = "eduarda.accarvalho@adv.oabsp.org.br";

export default function Contact() {
  return (
    <section id="contato" className="py-24"
      style={{ background: "linear-gradient(135deg, #2E2E2E 0%, #555555 50%, #757575 100%)" }}
    >
      {/* Top wave */}
      <div className="overflow-hidden leading-none -mt-24 mb-0">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,0 C360,60 1080,0 1440,40 L1440,0 Z" fill="#F2F2F2" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "#C9A96E" }}>
            Contato
          </span>
          <h2
            className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4 text-white"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Vamos conversar sobre
            <br />o seu caso?
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            Entre em contato agora mesmo. O primeiro passo para defender seus direitos começa com uma conversa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá%2C+Dra.+Eduarda!+Gostaria+de+agendar+uma+consulta.`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center p-8 rounded-3xl transition-all duration-200 hover:scale-105"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
              style={{ background: "linear-gradient(135deg, #C9A96E, #E8D5A3)" }}>
              <svg viewBox="0 0 24 24" width="30" height="30" fill="#2E2E2E">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.133.558 4.133 1.535 5.875L0 24l6.336-1.508A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.016-1.378l-.36-.214-3.727.977.996-3.634-.234-.373A9.817 9.817 0 012.182 12C2.182 6.565 6.565 2.182 12 2.182S21.818 6.565 21.818 12 17.435 21.818 12 21.818z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-white mb-1">WhatsApp</h3>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              Atendimento rápido e direto
            </p>
            <span className="mt-3 text-xs font-medium" style={{ color: "#C9A96E" }}>
              (14) 9 9999-9999
            </span>
          </a>

          {/* E-mail */}
          <a
            href={`mailto:${EMAIL}`}
            className="group flex flex-col items-center text-center p-8 rounded-3xl transition-all duration-200 hover:scale-105"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
              style={{ background: "linear-gradient(135deg, #C9A96E, #E8D5A3)" }}
            >
              <Mail size={28} style={{ color: "#2E2E2E" }} />
            </div>
            <h3 className="font-semibold text-white mb-1">E-mail</h3>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              Envie sua mensagem
            </p>
            <span className="mt-3 text-xs font-medium break-all" style={{ color: "#C9A96E" }}>
              {EMAIL}
            </span>
          </a>

          {/* Location */}
          <div
            className="flex flex-col items-center text-center p-8 rounded-3xl"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
              style={{ background: "linear-gradient(135deg, #C9A96E, #E8D5A3)" }}>
              <MapPin size={28} style={{ color: "#2E2E2E" }} />
            </div>
            <h3 className="font-semibold text-white mb-1">Localização</h3>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              Atendimento presencial
            </p>
            <span className="mt-3 text-xs font-medium" style={{ color: "#C9A96E" }}>
              Bauru · SP
            </span>
          </div>
        </div>

        {/* Info row */}
        <div
          className="flex flex-wrap justify-center gap-8 pt-10 border-t"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <div className="flex items-center gap-3">
            <Phone size={16} style={{ color: "#C9A96E" }} />
            <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>(14) 9 9999-9999</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={16} style={{ color: "#C9A96E" }} />
            <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>{EMAIL}</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={16} style={{ color: "#C9A96E" }} />
            <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>Bauru, São Paulo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
