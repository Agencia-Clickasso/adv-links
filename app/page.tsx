import Image from "next/image"
import Link from "next/link"

export default function LinktreeProfile() {
  return (
    <div className="min-h-screen" style={{ background: "#161F24" }}>
      <div className="max-w-sm mx-auto px-6 py-8">
        {/* Profile Section */}
        <div className="text-center mb-6">
          <div className="relative w-20 h-20 mx-auto mb-4">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 p-1">
              <Image
                src="/profile-photo.png"
                alt="Lucimeire Xavier Advocacia"
                width={72}
                height={72}
                className="rounded-full object-cover w-full h-full"
              />
            </div>
          </div>
          <h1 className="text-xl font-semibold mb-1" style={{ color: "#FFFBD7" }}>Lucimeire Xavier Advocacia</h1>
          <p className="text-sm mb-1" style={{ color: "#FFFBD7" }}>Advogada</p>
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
        <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-3 flex items-center justify-between hover:bg-slate-700/40 transition-colors cursor-pointer mb-4">
          <div className="flex items-center gap-3 flex-1">
            <span className="bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded-full font-medium">LINK</span>
            <span className="text-sm font-medium" style={{ color: "#FFFBD7" }}>Acesse Site Oficial</span>
          </div>
          <Image
            src="/placeholder.svg?height=60&width=80&text=Website"
            alt="Site Oficial"
            width={80}
            height={60}
            className="rounded object-cover ml-2"
          />
        </div>

        {/* Social Media */}
        <div className="space-y-3 mb-8">
          <Link href="#" className="block">
            <div className="bg-slate-700/30 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-between hover:bg-slate-600/30 transition-colors border border-slate-600/20">
              <div className="flex items-center gap-4">
                <div className="bg-slate-600/50 p-3 rounded-full border border-slate-500/30">
                  <div className="text-yellow-400">
                    <svg width="16" height="16" viewBox="0 0 382 382" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472V330.654z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-medium" style={{ color: "#FFFBD7" }}>SOCIAL</div>
                  <div className="text-base font-normal" style={{ color: "#FFFBD7" }}>LinkedIn</div>
                </div>
              </div>
              <div className="text-orange-500">
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
            <div className="bg-slate-700/30 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-between hover:bg-slate-600/30 transition-colors border border-slate-600/20">
              <div className="flex items-center gap-4">
                <div className="bg-slate-600/50 p-3 rounded-full border border-slate-500/30">
                  <div className="text-yellow-400">
                    <svg width="16" height="16" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                      <title>youtube</title>
                      <path d="M12.932 20.459v-8.917l7.839 4.459zM30.368 8.735c-0.354-1.301-1.354-2.307-2.625-2.663l-0.027-0.006c-3.193-0.406-6.886-0.638-10.634-0.638-0.381 0-0.761 0.002-1.14 0.007l0.058-0.001c-0.322-0.004-0.701-0.007-1.082-0.007-3.748 0-7.443 0.232-11.070 0.681l0.434-0.044c-1.297 0.363-2.297 1.368-2.644 2.643l-0.006 0.026c-0.4 2.109-0.628 4.536-0.628 7.016 0 0.088 0 0.176 0.001 0.263l-0-0.014c-0 0.074-0.001 0.162-0.001 0.25 0 2.48 0.229 4.906 0.666 7.259l-0.038-0.244c0.354 1.301 1.354 2.307 2.625 2.663l0.027 0.006c3.193 0.406 6.886 0.638 10.634 0.638 0.38 0 0.76-0.002 1.14-0.007l-0.058 0.001c0.322 0.004 0.702 0.007 1.082 0.007 3.749 0 7.443-0.232 11.070-0.681l-0.434 0.044c1.298-0.362 2.298-1.368 2.646-2.643l0.006-0.026c0.399-2.109 0.627-4.536 0.627-7.015 0-0.088-0-0.176-0.001-0.263l0 0.013c0-0.074 0.001-0.162 0.001-0.25 0-2.48-0.229-4.906-0.666-7.259l0.038 0.244z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-medium" style={{ color: "#FFFBD7" }}>SOCIAL</div>
                  <div className="text-base font-normal" style={{ color: "#FFFBD7" }}>YouTube</div>
                </div>
              </div>
              <div className="text-orange-500">
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
            <div className="bg-slate-700/30 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-between hover:bg-slate-600/30 transition-colors border border-slate-600/20">
              <div className="flex items-center gap-4">
                <div className="bg-slate-600/50 p-3 rounded-full border border-slate-500/30">
                  <div className="text-yellow-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-medium" style={{ color: "#FFFBD7" }}>SOCIAL</div>
                  <div className="text-base font-normal" style={{ color: "#FFFBD7" }}>Instagram</div>
                </div>
              </div>
              <div className="text-orange-500">
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
          <div className="text-2xl mb-2" style={{ fontFamily: "cursive", color: "#FFFBD7" }}>
            Lucimeire Xavier Advocacia
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
