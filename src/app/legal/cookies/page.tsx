export default function CookiesPolicy() {
  const cookieTypes = [
    {
      cookie: "__cfduid (notin.es)",
      duration: "Sesión",
      description: "Publicidad",
    },
    {
      cookie: "personalization_id (twitter.com)",
      duration: "Sesión",
      description: "Twitter",
    },
    {
      cookie: "Facebook",
      duration: "Publicidad, estadísticas y mediciones",
      description: "Coloca Cookies en el ordenador o dispositivo y recibe la información almacenada en ellas cuando utilizas o visitas servicios prestados por otras empresas que utilizan los servicios de Facebook.",
    },
    {
      cookie: "_ga (Google)",
      duration: "2 años",
      description: "Se usa para distinguir a los usuarios.",
    },
    {
      cookie: "_gid (Google)",
      duration: "24 horas",
      description: "Se usa para distinguir a los usuarios.",
    },
    {
      cookie: "_gat (Google)",
      duration: "1 minuto",
      description: "Se usa para limitar el porcentaje de solicitudes. Si has implementado Google Analytics mediante Google Tag Manager, esta cookie se llamará _dc_gtm_.",
    },
    {
      cookie: "_gali (Google)",
      duration: "30s",
      description: "Atribución de enlace mejorada.",
    },
    {
      cookie: "_unam (SHARETHIS)",
      duration: "Persistente",
      description: "Su finalidad es cuantificar el número de Usuarios que comparten un determinado contenido y cuántas páginas web son visitadas a raíz de esa acción.",
    },
    {
      cookie: "WordPress",
      duration: "2 años",
      description: "Utilizado para el correcto funcionamiento del gestor de contenido WordPress.",
    },
  ];

  const browsers = [
    { name: "Firefox", url: "#" },
    { name: "Chrome", url: "#" },
    { name: "Internet Explorer", url: "#" },
    { name: "Safari", url: "#" },
    { name: "Opera", url: "#" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl bg-blue-1">
      <h1 className="text-3xl font-bold mb-8">Política de Cookies</h1>

      <section className="mb-8">
        <p className="text-gray-700 mb-4">
          Las cookies son pequeñas cantidades de información que se almacenan en el
          navegador utilizado por cada usuario para que el servidor recuerde cierta
          información que posteriormente pueda utilizar.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Tipos de Cookies que Utilizamos
        </h2>
        <p className="text-gray-700 mb-4">
          Esta página web utiliza cookies de terceros que son aquellas que se
          envían a tu ordenador o terminal desde un dominio o una página web que no
          es gestionada por nosotros, sino por otra entidad que trata los datos
          obtenidos a través de las cookies.
        </p>
        <p className="text-gray-700 mb-8">
          En este caso las Cookies son utilizadas con fines estadísticos
          relacionados con las visitas que recibe y las páginas que se consultan,
          quedando aceptado su uso al navegar por ella.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-2 text-left">Cookie</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Duración</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Descripción</th>
              </tr>
            </thead>
            <tbody>
              {cookieTypes.map((cookie, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">{cookie.cookie}</td>
                  <td className="border border-gray-200 px-4 py-2">{cookie.duration}</td>
                  <td className="border border-gray-200 px-4 py-2">{cookie.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <p className="text-gray-700 mb-4">
          Si desea más información más sobre los tipos de cookies de seguimiento y
          análisis de datos de Google{" "}
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            haga clic aquí
          </a>
          .
        </p>
      </section>

      <section>
        <p className="text-gray-700 mb-4">
          Para informarse sobre cómo eliminar las cookies de su explorador:
        </p>
        <ul className="list-none space-y-2">
          {browsers.map((browser, index) => (
            <li key={index}>
              <a
                href={browser.url}
                className="text-blue-600 hover:text-blue-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {browser.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}