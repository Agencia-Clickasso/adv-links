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
                  <svg width="16" height="16" viewBox="0 0 382 382" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="382" height="382" rx="34.555" ry="34.555" fill="#374252" />
                    <path
                      d="M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472V330.654z"
                      fill="#C6AE67"
                    />
                  </svg>
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
                                        <svg viewBox="0 -3 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                      <g id="SVGRepo_iconCarrier">
                        <title>youtube [#168]</title>
                        <desc>Created with Sketch.</desc>
                        <defs></defs>
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7442.000000)" fill="currentColor">
                            <g id="icons" transform="translate(56.000000, 160.000000)">
                              <path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 
                                   C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 
                                   M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 
                                   C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 
                                   C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 
                                   C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 
                                   C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 
                                   C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 
                                   C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 
                                   C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 
                                   C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"
                                id="youtube-[#168]"/>
                            </g>
                          </g>
                        </g>
                      </g>
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
