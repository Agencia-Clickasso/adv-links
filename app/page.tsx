import Image from "next/image"
import Link from "next/link"

export default function LinktreeProfile() {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #1e3a5f 0%, #0f1419 100%)" }}>
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
          <h1 className="text-xl font-semibold text-white mb-1">Lucimeire Xavier Advocacia</h1>
          <p className="text-gray-300 text-sm mb-1">Advogada</p>
          <p className="text-gray-400 text-xs">@dra.lucimeirexavier</p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mb-6">
          <div className="flex">
            <button className="text-white text-sm px-4 py-1 border-b-2 border-white">Links Úteis</button>
            <button className="text-gray-400 text-sm px-4 py-1 ml-6">Sobre</button>
          </div>
        </div>

        {/* Official Site */}
        <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-3 flex items-center justify-between hover:bg-slate-700/40 transition-colors cursor-pointer mb-4">
          <div className="flex items-center gap-3 flex-1">
            <span className="bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded-full font-medium">LINK</span>
            <span className="text-white text-sm font-medium">Acesse Site Oficial</span>
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
                <div className="bg-slate-600/50 p-3 rounded-xl border border-slate-500/30">
                  <svg width="16" height="16" viewBox="0 0 382 382" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="382" height="382" rx="34.555" ry="34.555" fill="#374252" />
                    <path
                      d="M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472V330.654z"
                      fill="#C6AE67"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-400 text-[10px] uppercase tracking-widest font-medium">SOCIAL</div>
                  <div className="text-white text-base font-normal">LinkedIn</div>
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
                <div className="bg-slate-600/50 p-3 rounded-xl border border-slate-500/30">
                  <div className="text-yellow-400">
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
                      <path d="M15 1.8L9 6L15 10.2V1.8Z" />
                      <path d="M8 6L1 1V11L8 6Z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 text-[10px] uppercase tracking-widest font-medium">SOCIAL</div>
                  <div className="text-white text-base font-normal">YouTube</div>
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
                <div className="bg-slate-600/50 p-3 rounded-xl border border-slate-500/30">
                  <div className="text-yellow-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 text-[10px] uppercase tracking-widest font-medium">SOCIAL</div>
                  <div className="text-white text-base font-normal">Instagram</div>
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
          <div className="text-2xl text-gray-300 mb-2" style={{ fontFamily: "cursive" }}>
            Lucimeire Xavier Advocacia
          </div>
          <div className="h-px bg-gray-600 mb-4"></div>
        </div>

        {/* Copyright */}
        <div className="text-center text-[10px] text-gray-500 leading-tight">
          © {new Date().getFullYear()} Todos os Direitos Reservados |<br />
          Política de Privacidade
        </div>
      </div>
    </div>
  )
}
