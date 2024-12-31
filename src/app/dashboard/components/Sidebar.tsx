import {
  HomeIcon,
  UserCircleIcon,
  CogIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";

export default function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white w-64 h-screen">
      <div className="p-6 font-bold text-lg">Caantin AI Dashboard</div>
      <nav className="mt-6 space-y-4">
        <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-700">
          <HomeIcon className="h-5 w-5 mr-3" />
          Home
        </a>
        <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-700">
          <UserCircleIcon className="h-5 w-5 mr-3" />
          Profile
        </a>
        <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-700">
          <CogIcon className="h-5 w-5 mr-3" />
          Settings
        </a>
        <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-700">
          <QuestionMarkCircleIcon className="h-5 w-5 mr-3" />
          Help
        </a>
      </nav>
    </aside>
  );
}
