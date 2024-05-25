// src/components/Sidebar.tsx
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar w-64 min-h-screen bg-blue-500 text-white">
      <nav>
        <ul className="space-y-2 p-4">
          <li>
            <Link to="/contacts" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">
              Contacts
            </Link>
          </li>
          <li>
            <Link to="/charts-and-maps" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">
              Charts and Maps
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
