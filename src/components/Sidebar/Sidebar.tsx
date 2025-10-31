function Sidebar() {
  const menu = [
    { name: "Dashboard", active: true },
    { name: "Analytics" },
    { name: "Sales" },
    { name: "Users" },
  ];

  return (
    <aside>
      <h1>Lexa</h1>
      <nav>
        {menu.map((item) => (
          <a key={item.name} href="#">
            {item.name}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
