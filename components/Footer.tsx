import { Scale } from "lucide-react";

const WHATSAPP_NUMBER = "5514999999999";

export default function Footer() {
  return (
    <footer style={{ background: "#555555" }} className="pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #555555, #8A8A8A)" }}
            >
              <Scale size={16} color="white" />
            </div>
            <div>
              <div className="font-bold text-white text-sm" style={{ fontFamily: "Arial, sans-serif" }}>
                Dra. Eduarda Carvalho
              </div>
              <div className="text-xs" style={{ color: "#C9A96E" }}>Advogada · OAB/SP 523.051</div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá%2C+Dra.+Eduarda!+Gostaria+de+agendar+uma+consulta.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
            style={{ background: "#25D366" }}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.133.558 4.133 1.535 5.875L0 24l6.336-1.508A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.016-1.378l-.36-.214-3.727.977.996-3.634-.234-.373A9.817 9.817 0 012.182 12C2.182 6.565 6.565 2.182 12 2.182S21.818 6.565 21.818 12 17.435 21.818 12 21.818z"/>
            </svg>
            Falar no WhatsApp
          </a>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.35)" }}>
            © {new Date().getFullYear()} Dra. Eduarda Carvalho · Advogada. Todos os direitos reservados.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            Este site não constitui consultoria jurídica. OAB/SP.
          </p>
        </div>
      </div>
    </footer>
  );
}
