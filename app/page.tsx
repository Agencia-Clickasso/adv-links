import Image from "next/image"
import Link from "next/link"

export default function LinktreeProfile() {
  return (
    <div className="min-h-screen" style={{ background: "#090B0F" }}>
      <div className="max-w-sm mx-auto px-6 py-8">
        {/* Profile Section */}
        <div className="text-center mb-6">
          <div className="relative w-20 h-20 mx-auto mb-4">
            <div className="absolute inset-0 rounded-full p-1" style={{ background: "#CEA886" }}>
              <Image
                src="/profile-photo.png"
                alt="Lucimeire Xavier Advocacia"
                width={72}
                height={72}
                className="rounded-full object-cover w-full h-full"
              />
            </div>
          </div>
          <h1 className="text-xl font-semibold mb-1" style={{ color: "#FFFBD7" }}>Lucimeire Xavier</h1>
          <p className="text-sm mb-1" style={{ color: "#FFFBD7" }}>Advogada Tributarista</p>
          <p className="text-xs" style={{ color: "#FFFBD7" }}>@dra.lucimeirexavier</p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mb-6">
          <div className="flex">
            <button className="text-sm px-4 py-1 border-b-2" style={{ color: "#FFFBD7", borderColor: "#FFFBD7" }}>Links Úteis</button>
            <button className="text-sm px-4 py-1 ml-6" style={{ color: "#FFFBD7" }}>Sobre</button>
          </div>
        </div>

        {/* Official Site */}
        <Link href="https://www.lucimeirexavieradvocacia.adv.br/" className="block">
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-3 flex items-center justify-between hover:bg-slate-700/40 transition-colors cursor-pointer mb-4">
            <div className="flex items-center gap-3 flex-1">
              <span className="text-white text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: "#B80618" }}>LINK</span>
              <span className="text-sm font-medium" style={{ color: "#FFFBD7" }}>Acesse Site Oficial</span>
            </div>
          </div>
        </Link>

        {/* Social Media */}
        <div className="space-y-3 mb-8">
          <Link href="https://api.whatsapp.com/send/?phone=551111967586911&text&type=phone_number&app_absent=0" className="block">
            <div className="bg-[#1A212B] backdrop-blur-sm rounded-2xl p-4 flex items-center justify-between hover:bg-[#232A34] transition-all duration-300 border border-slate-500/30 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="bg-[#161F24] p-3 rounded-full border-2 border-[#CEA886] flex items-center justify-center shadow-inner">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#CEA886">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div>
                  <div className="text-base font-normal" style={{ color: "#CEA886" }}>WhatsApp</div>
                </div>
              </div>
              <div style={{ color: "#B80618" }}>
                <svg width="12" height="20" viewBox="0 0 12 20" fill="currentColor">
                  <path
                    d="M2 18L10 10L2 2"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </Link>

          <Link href="https://www.instagram.com/dra.lucimeirexavier" className="block">
            <div className="bg-[#1A212B] backdrop-blur-sm rounded-2xl p-4 flex items-center justify-between hover:bg-[#232A34] transition-all duration-300 border border-slate-500/30 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="bg-[#161F24] p-3 rounded-full border-2 border-[#CEA886] flex items-center justify-center shadow-inner">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#CEA886" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <div>
                  <div className="text-base font-normal" style={{ color: "#CEA886" }}>Instagram</div>
                </div>
              </div>
              <div style={{ color: "#B80618" }}>
                <svg width="12" height="20" viewBox="0 0 12 20" fill="currentColor">
                  <path
                    d="M2 18L10 10L2 2"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </Link>

          <Link href="https://www.linkedin.com/in/lucimeire-xavier-b8b18aa0/" className="block">
            <div className="bg-[#1A212B] backdrop-blur-sm rounded-2xl p-4 flex items-center justify-between hover:bg-[#232A34] transition-all duration-300 border border-slate-500/30 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="bg-[#161F24] p-3 rounded-full border-2 border-[#CEA886] flex items-center justify-center shadow-inner">
                  <svg width="16" height="16" viewBox="0 0 382 382" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path
                      d="M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472V330.654z"
                      fill="#CEA886"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-base font-normal" style={{ color: "#CEA886" }}>LinkedIn</div>
                </div>
              </div>
              <div style={{ color: "#B80618" }}>
                <svg width="12" height="20" viewBox="0 0 12 20" fill="currentColor">
                  <path
                    d="M2 18L10 10L2 2"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </Link>

          <Link href="#" className="block">
            <div className="bg-[#1A212B] backdrop-blur-sm rounded-2xl p-4 flex items-center justify-between hover:bg-[#232A34] transition-all duration-300 border border-slate-500/30 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="bg-[#161F24] p-3 rounded-full border-2 border-[#CEA886] flex items-center justify-center shadow-inner">
                  <svg width="16" height="16" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#CEA886">
                    <title>youtube</title>
                    <path d="M12.932 20.459v-8.917l7.839 4.459zM30.368 8.735c-0.354-1.301-1.354-2.307-2.625-2.663l-0.027-0.006c-3.193-0.406-6.886-0.638-10.634-0.638-0.381 0-0.761 0.002-1.14 0.007l0.058-0.001c-0.322-0.004-0.701-0.007-1.082-0.007-3.748 0-7.443 0.232-11.070 0.681l0.434-0.044c-1.297 0.363-2.297 1.368-2.644 2.643l-0.006 0.026c-0.4 2.109-0.628 4.536-0.628 7.016 0 0.088 0 0.176 0.001 0.263l-0-0.014c-0 0.074-0.001 0.162-0.001 0.25 0 2.48 0.229 4.906 0.666 7.259l-0.038-0.244c0.354 1.301 1.354 2.307 2.625 2.663l0.027 0.006c3.193 0.406 6.886 0.638 10.634 0.638 0.38 0 0.76-0.002 1.14-0.007l-0.058 0.001c0.322 0.004 0.702 0.007 1.082 0.007 3.749 0 7.443-0.232 11.070-0.681l-0.434 0.044c1.298-0.362 2.298-1.368 2.646-2.643l0.006-0.026c0.399-2.109 0.627-4.536 0.627-7.015 0-0.088-0-0.176-0.001-0.263l0 0.013c0-0.074 0.001-0.162 0.001-0.25 0-2.48-0.229-4.906-0.666-7.259l0.038 0.244z"></path>
                  </svg>
                </div>
                <div>
                  <div className="text-base font-normal" style={{ color: "#CEA886" }}>YouTube</div>
                </div>
              </div>
              <div style={{ color: "#B80618" }}>
                <svg width="12" height="20" viewBox="0 0 12 20" fill="currentColor">
                  <path
                    d="M2 18L10 10L2 2"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        {/* Footer Signature */}
        <div className="text-center mb-6">
          <div className="mb-2">
            <Image
              src="/lucimeire-logo.png"
              alt="Lucimeire Xavier Advocacia"
              width={100}
              height={30}
              className="mx-auto object-contain"
            />
          </div>
          <div className="h-px bg-gray-600 mb-4"></div>
        </div>

        {/* Copyright */}
        <div className="text-center text-[10px] leading-tight" style={{ color: "#FFFBD7" }}>
          © {new Date().getFullYear()} Todos os Direitos Reservados |<br />
          Política de Privacidade
        </div>
      </div>
    </div>
  )
}
