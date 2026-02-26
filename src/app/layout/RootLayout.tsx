import { NavLink, Outlet } from 'react-router-dom';

const nav = [
  ['/', 'Home'],
  ['/gallery', 'Gallery'],
  ['/book', 'Booking'],
] as const;

export function RootLayout() {
  return (
    <>
      <header className="sticky">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0' }}>
          <strong>🍕 Napoli Pizza Elite</strong>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            {nav.map(([to, label]) => (
              <NavLink key={to} to={to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <Outlet />
      <footer className="footer">
        <div className="container">© 2026 Napoli Pizza Elite · Feature-driven React Architecture</div>
      </footer>
    </>
  );
}
