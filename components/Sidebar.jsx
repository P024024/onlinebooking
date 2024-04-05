
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="bg-gray-200 p-4">
      <ul>
        <li className="mb-4">
          <Link href="/dashboard">
            <a className="text-lg">Dashboard</a>
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/orders">
            <a className="text-lg">Orders</a>
          </Link>
        </li>
        {/* Add more sidebar items as needed */}
      </ul>
    </aside>
  );
};

export default Sidebar;
