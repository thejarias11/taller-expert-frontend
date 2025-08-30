// Menu.jsx
// Menú de navegación simple (ejemplo sin router para que sea fácil de probar)

export default function Menu() {
  return (
    <nav style={{ padding: "0.8rem", backgroundColor: "#b88484ff" }}>
      <ul style={{ listStyle: "none", display: "flex", gap: "1rem", margin: 0 }}>
        {/* Los links son simples anchors; si más adelante añades react-router, los reemplazamos por <Link> */}
        <li><a href="#" onClick={(e)=>e.preventDefault()}>Inicio</a></li>
        <li><a href="#" onClick={(e)=>e.preventDefault()}>Clientes</a></li>
        <li><a href="#" onClick={(e)=>e.preventDefault()}>Vehículos</a></li>
        <li><a href="#" onClick={(e)=>e.preventDefault()}>Órdenes</a></li>
      </ul>
    </nav>
  );
}
