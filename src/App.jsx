const EggIcon = ({ className = "w-7 h-7" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    className={className}
  >
    <path d="M12 2C8 2 5.5 8.2 5.5 13.5A6.5 6.5 0 0 0 12 20a6.5 6.5 0 0 0 6.5-6.5C18.5 8.2 16 2 12 2Z" />
  </svg>
)

const BirdIcon = ({ className = "w-7 h-7" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    className={className}
  >
    <path d="M7 15c-2.5 0-4-1.8-4-4 0-2.7 2.2-4.7 5.2-4.7.8-2.5 3-4.3 5.7-4.3 3 0 5.2 2 5.9 4.7L22 8l-2.2 1.3c-.4 4.2-3.4 7.4-7.7 7.4H9.6" />
    <path d="M10 16.5 8.5 22M14 16.5 15.5 22" />
  </svg>
)

const LocationIcon = ({ className = "w-7 h-7" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className={className}
  >
    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 32 32" fill="currentColor" className={className}>
    <path d="M16.04 3C9.39 3 4 8.28 4 14.8c0 2.31.69 4.56 1.99 6.48L4 29l7.98-2.05a12.2 12.2 0 0 0 4.06.69C22.69 27.64 28 22.35 28 15.82 28 9.3 22.69 3 16.04 3Zm0 22.55c-1.23 0-2.44-.23-3.58-.67l-.51-.2-4.73 1.22 1.26-4.51-.33-.52a10.46 10.46 0 0 1-1.65-5.62c0-5.42 4.32-9.82 9.64-9.82 5.31 0 9.64 4.4 9.64 9.82s-4.43 10.3-9.74 10.3Z" />
    <path d="M21.58 18.15c-.3-.15-1.78-.86-2.06-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.45-2.38-1.43a9.02 9.02 0 0 1-1.65-2.03c-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.58-.92-2.16-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1-1.04 2.43s1.07 2.82 1.22 3.01c.15.2 2.1 3.12 5.09 4.37.71.3 1.26.48 1.7.62.71.22 1.36.19 1.87.11.57-.08 1.78-.71 2.03-1.4.25-.7.25-1.3.17-1.43-.07-.12-.27-.2-.57-.34Z" />
  </svg>
)

const products = [
  {
    title: "Huevos de codorniz",
    description:
      "Huevos frescos de producción local, disponibles para pedidos según disponibilidad.",
    image: "/images/huevos.jpg",
    icon: <EggIcon />,
  },
  {
    title: "Codornices en pie",
    description:
      "Codornices disponibles con diferentes edades de crianza según las necesidades del cliente.",
    image: "/images/Codornices.jpg",
    icon: <BirdIcon />,
  },
]

function App() {
  const whatsappNumber = "57312345678"

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hola, estoy interesado en los productos de Incullano S.A.S."
  )}`

  return (
    <div className="bg-white text-zinc-800 overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-[76px] flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="/logo-incullano.jpg"
              alt="Incullano S.A.S."
              className="w-14 h-14 object-contain"
            />

            <div className="hidden sm:block leading-tight">
              <div className="text-[18px] font-bold tracking-wide">
                INCULLANO
              </div>
              <div className="text-xs tracking-[0.24em] text-zinc-500">
                S.A.S.
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-10 text-sm font-semibold">
            <a
              href="#inicio"
              className="text-yellow-500 border-b-2 border-yellow-400 py-6"
            >
              Inicio
            </a>
            <a href="#productos" className="hover:text-yellow-500 transition">
              Productos
            </a>
            <a href="#nosotros" className="hover:text-yellow-500 transition">
              Nosotros
            </a>
            <a href="#contacto" className="hover:text-yellow-500 transition">
              Contacto
            </a>
          </nav>

          <a
            href="#contacto"
            className="bg-yellow-400 hover:bg-yellow-500 text-zinc-900 font-semibold rounded-full px-6 py-3 transition"
          >
            Contáctanos
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section
          id="inicio"
          className="pt-[76px] bg-white border-b border-zinc-100"
        >
          <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 lg:py-16 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="uppercase tracking-[0.3em] text-yellow-500 font-bold text-sm mb-5">
                Yopal, Casanare
              </p>

              <h1 className="text-[50px] sm:text-6xl lg:text-[68px] leading-[0.98] font-black tracking-tight">
                Calidad desde
                <span className="block text-yellow-400">el origen.</span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-zinc-600 max-w-lg">
                Crianza y comercialización de codornices y huevos de codorniz
                con atención directa desde Yopal, Casanare.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#productos"
                  className="inline-flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-500 px-7 py-3.5 rounded-full font-semibold transition"
                >
                  <WhatsAppIcon />
                  Conocer productos
                </a>

                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-3 border border-zinc-300 hover:border-zinc-500 px-7 py-3.5 rounded-full font-semibold transition"
                >
                  <WhatsAppIcon />
                  Escríbenos
                </a>
              </div>
            </div>

            <div className="relative h-[420px] md:h-[470px]">
              <div className="absolute inset-0 overflow-hidden rounded-[32px]">
                <img
                  src="/images/hero-codorniz.jpg"
                  alt="Codorniz y huevos de codorniz"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="absolute bottom-5 left-5 bg-white/95 rounded-2xl shadow-lg p-4">
                <img
                  src="/logo-incullano.jpg"
                  alt="Incullano"
                  className="w-36 object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTOS */}
        <section id="productos" className="py-20 bg-[#fdfdfc]">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-12 items-start">
              <div>
                <p className="text-yellow-500 uppercase tracking-[0.28em] text-xs font-bold mb-4">
                  Nuestros productos
                </p>

                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                  Lo que tenemos
                  <br />
                  para ti
                </h2>

                <p className="text-zinc-500 leading-7 mt-5 max-w-sm">
                  Consulta disponibilidad directamente con nosotros y encuentra
                  la opción adecuada para tu pedido.
                </p>

                <div className="hidden lg:flex mt-12 w-48 h-64 rounded-[50%] border border-yellow-200 items-center justify-center">
                  <BirdIcon className="w-24 h-24 text-yellow-200" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-7">
                {products.map((product) => (
                  <article
                    key={product.title}
                    className="group bg-white rounded-2xl overflow-hidden border border-zinc-100 shadow-[0_8px_28px_rgba(0,0,0,.06)] hover:-translate-y-1 transition duration-300"
                  >
                    <div className="relative h-[230px] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />

                      <div className="absolute -bottom-6 left-6 w-14 h-14 rounded-full bg-yellow-400 border-4 border-white flex items-center justify-center text-white">
                        {product.icon}
                      </div>
                    </div>

                    <div className="px-6 pt-10 pb-7">
                      <h3 className="text-2xl font-bold">{product.title}</h3>

                      <p className="mt-3 text-zinc-500 leading-7">
                        {product.description}
                      </p>

                      <a
                        href="#contacto"
                        className="inline-flex mt-5 text-yellow-500 font-semibold hover:text-yellow-600"
                      >
                        Consultar disponibilidad →
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* NUESTRA CRIANZA */}
        <section id="nosotros" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-14 items-center">
              
              {/* IMAGEN CORREGIDA */}
              <div className="relative">
                <div className="w-full h-[320px] sm:h-[370px] lg:h-[400px] rounded-[28px] overflow-hidden shadow-sm">
                  <img
                    src="/images/crianza.jpg"
                    alt="Crianza de codornices Incullano"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              <div>
                <p className="uppercase tracking-[0.28em] text-xs font-bold text-yellow-500 mb-4">
                  Nuestra crianza
                </p>

                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                  Cercanía, cuidado y producción local
                </h2>

                <p className="mt-5 text-zinc-600 leading-7">
                  En Incullano S.A.S. trabajamos en la crianza de codornices y
                  la comercialización de sus productos desde Yopal, Casanare.
                </p>

                <p className="mt-4 text-zinc-600 leading-7">
                  Nuestro objetivo es ofrecer atención directa y mantener un
                  proceso organizado que permita entregar productos de calidad
                  según la disponibilidad de nuestra producción.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-9 border-t border-zinc-100 pt-8">
                  <div className="text-center">
                    <LocationIcon className="w-8 h-8 mx-auto text-yellow-500" />
                    <p className="mt-3 text-sm">
                      Producción
                      <strong className="block">local</strong>
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-8 h-8 mx-auto text-yellow-500 text-2xl">
                      ☎
                    </div>
                    <p className="mt-3 text-sm">
                      Atención
                      <strong className="block">directa</strong>
                    </p>
                  </div>

                  <div className="text-center">
                    <EggIcon className="w-8 h-8 mx-auto text-yellow-500" />
                    <p className="mt-3 text-sm">
                      Huevos
                      <strong className="block">frescos</strong>
                    </p>
                  </div>

                  <div className="text-center">
                    <BirdIcon className="w-8 h-8 mx-auto text-yellow-500" />
                    <p className="mt-3 text-sm">
                      Codornices
                      <strong className="block">por edad</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FRANJA OSCURA */}
        <section className="bg-zinc-900 text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-5 md:border-r border-zinc-700">
              <LocationIcon className="w-10 h-10 text-yellow-400 shrink-0" />

              <div>
                <p className="text-xl font-bold">Yopal, Casanare</p>
                <p className="text-sm text-zinc-400 mt-1">
                  Casanare, Colombia
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 md:border-r border-zinc-700">
              <div className="text-yellow-400 text-4xl">⌁</div>

              <div>
                <p className="text-xl font-bold">Local</p>
                <p className="text-sm text-zinc-400 mt-1">
                  Producción y atención directa
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="text-yellow-400 text-4xl">♡</div>

              <div>
                <p className="text-xl font-bold">Fresco</p>
                <p className="text-sm text-zinc-400 mt-1">
                  Productos según disponibilidad
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section
          id="contacto"
          className="relative py-16 bg-gradient-to-r from-[#fffdf9] via-white to-[#fff8e6] overflow-hidden"
        >
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="uppercase tracking-[0.3em] text-xs font-bold text-yellow-500">
              Contacto
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold">
              ¿Quieres conocer disponibilidad?
            </h2>

            <p className="mt-5 text-zinc-600 leading-7">
              Escríbenos para consultar huevos de codorniz, codornices en pie,
              edades disponibles y pedidos.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 mt-7 bg-yellow-400 hover:bg-yellow-500 text-zinc-900 font-semibold px-8 py-4 rounded-full transition"
            >
              <WhatsAppIcon />
              Hablar por WhatsApp
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 grid md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-3">
            <img
              src="/logo-incullano.jpg"
              alt="Incullano"
              className="w-14 h-14 object-contain rounded-full"
            />

            <div>
              <p className="font-bold tracking-wide">INCULLANO</p>
              <p className="text-xs tracking-[0.2em] text-zinc-400">
                S.A.S.
              </p>
            </div>
          </div>

          <div className="text-sm text-zinc-400 md:text-center">
            <p>© 2026 Incullano S.A.S.</p>
            <p>Todos los derechos reservados.</p>
          </div>

          <div className="flex md:justify-end items-center gap-2 text-sm text-zinc-400">
            <LocationIcon className="w-5 h-5" />
            Yopal, Casanare, Colombia
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOTANTE */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
      >
        <WhatsAppIcon className="w-9 h-9" />
      </a>
    </div>
  )
}

export default App