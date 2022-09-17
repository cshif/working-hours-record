const items = [
  {
    key: 'dashboard',
    name: 'Dashboard',
    isActive: true
  },
  {
    key: 'passbook',
    name: 'Passbook',
    isActive: false
  }
];

export default function Menu() {
  const menuItems = items.map(item => <MenuItem item={item} key={item.key}/>);
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
