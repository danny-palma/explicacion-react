import React from "react";
import "./home.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";

export default function Home() {
  return (
    <div className="page_home">
      <div className="pagehome_container_left">
        <img src={img1} alt="" className="pagehome_container_left_img" />
        <img src={img2} alt="" className="pagehome_container_left_img" />
      </div>
      <div className="pagehome_container_rigth">
        <p className="pagehome_container_rigth_text">
          El software en la nube, también conocido como software como servicio
          (SaaS), es una forma de distribución de aplicaciones donde los
          programas se alojan en servidores remotos y son accesibles a través de
          internet. Este modelo ha revolucionado la manera en que las empresas y
          los individuos utilizan y acceden a las aplicaciones, eliminando la
          necesidad de instalaciones locales y permitiendo el uso de software
          desde cualquier dispositivo con conexión a internet. La nube ofrece
          una flexibilidad sin precedentes, permitiendo a los usuarios escalar
          recursos según sus necesidades, lo que es particularmente beneficioso
          para empresas que experimentan fluctuaciones en la demanda de sus
          servicios.
        </p>
        <p className="pagehome_container_rigth_text">
          Una de las principales ventajas del software en la nube es su
          capacidad de actualización automática y constante. Los proveedores de
          SaaS pueden implementar mejoras, parches de seguridad y nuevas
          características sin que el usuario tenga que preocuparse por la
          instalación manual de actualizaciones. Esto no solo garantiza que los
          usuarios siempre tengan acceso a la versión más reciente del software,
          sino que también reduce los riesgos asociados con vulnerabilidades de
          seguridad, ya que las actualizaciones se aplican de manera
          centralizada y uniforme para todos los usuarios.
        </p>
        <p className="pagehome_container_rigth_text">
          Además, el software en la nube facilita la colaboración y el trabajo
          remoto. Al estar basado en la web, permite a múltiples usuarios
          acceder y trabajar en los mismos documentos y proyectos en tiempo
          real, desde diferentes ubicaciones. Esto es especialmente útil en el
          contexto empresarial, donde equipos dispersos geográficamente pueden
          colaborar de manera eficiente y efectiva. La integración con otras
          aplicaciones y servicios en la nube también es un punto fuerte,
          permitiendo una mayor interoperabilidad y facilitando flujos de
          trabajo más ágiles y conectados.
        </p>
      </div>
    </div>
  );
}
