const items = [
  {
    name: 'Dashboard',
    isActive: true
  },
  {
    name: 'Passbook',
    isActive: false
  }
];

export default function Menu() {
  const menuItems = items.map(item => <MenuItem item={item}/>);
  return (
    <div className="menu">
      {menuItems}
    </div>
  );
}

function MenuItem({item}) {
  return (
    <div className={`menu-item ${(item.isActive ? 'active' : '' )}`}>
      <p>{item.name}</p>
    </div>
  );
}
