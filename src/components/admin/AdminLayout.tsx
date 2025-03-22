import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard,
  DollarSign,
  Users,
  Settings,
  LogOut,
  Calendar,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  
  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Donations', href: '/admin/donations', icon: DollarSign },
    { name: 'Team Members', href: '/admin/team', icon: Users },
    { name: 'Events', href: '/admin/events', icon: Calendar },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-white z-50 px-4 py-3 flex justify-between items-center border-b">
        <div className="font-playfair font-bold text-lg">Heartfelt Admin</div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-0 z-40 lg:z-auto ${sidebarOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 lg:hidden" onClick={() => setSidebarOpen(false)}></div>
        <div className="relative flex flex-col flex-1 min-h-screen w-64 max-w-xs bg-white border-r border-gray-200 pt-5 pb-4">
          <div className="flex items-center px-6 mb-8">
            <span className="font-playfair font-bold text-xl">Heartfelt Admin</span>
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto">
            <nav className="flex-1 px-4 space-y-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-primary text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon
                      className={`mr-3 h-5 w-5 ${
                        isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-600'
                      }`}
                    />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
            <div className="px-4 mt-6">
              <Link 
                to="/" 
                className="inline-flex items-center px-3 py-2 w-full text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
              >
                <LogOut className="mr-3 h-5 w-5 text-gray-500" />
                Back to Website
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="lg:pl-64">
        <main className="py-6 lg:py-10 px-4 lg:px-8 mt-12 lg:mt-0">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout; 