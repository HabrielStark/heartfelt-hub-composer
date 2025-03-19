
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  DollarSign, 
  FileText, 
  FileEdit, 
  Settings, 
  LogOut, 
  Menu,
  X,
  Heart
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const location = useLocation();
  const { toast } = useToast();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const navItems = [
    {
      label: 'Dashboard',
      icon: <LayoutDashboard className="h-5 w-5" />,
      href: '/admin',
    },
    {
      label: 'Donations',
      icon: <DollarSign className="h-5 w-5" />,
      href: '/admin/donations',
    },
    {
      label: 'Reports',
      icon: <FileText className="h-5 w-5" />,
      href: '/admin/reports',
    },
    {
      label: 'Content',
      icon: <FileEdit className="h-5 w-5" />,
      href: '/admin/content',
    },
    {
      label: 'Settings',
      icon: <Settings className="h-5 w-5" />,
      href: '/admin/settings',
    },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    // In a real app, would redirect to login or home
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Mobile Sidebar Toggle */}
      <div className="md:hidden p-4 bg-white shadow-sm flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Heart className="h-6 w-6 text-primary" />
          <span className="font-playfair font-bold text-xl">Admin</span>
        </div>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside 
        className={`w-full md:w-64 bg-white shadow-md md:flex flex-col justify-between transition-all duration-300 ${
          isSidebarOpen ? 'flex absolute inset-0 z-40' : 'hidden'
        } md:sticky md:top-0 md:h-screen`}
      >
        <div>
          {/* Logo */}
          <div className="p-6 border-b border-gray-200">
            <Link to="/admin" className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="font-playfair font-bold text-xl">HeartfeltHome</span>
            </Link>
          </div>

          {/* Nav Menu */}
          <nav className="p-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-3 p-3 rounded-md transition-colors ${
                      isActive(item.href)
                        ? 'bg-primary text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Logout Button */}
        <div className="p-4 border-t border-gray-200 mt-auto">
          <Button
            variant="outline"
            className="w-full flex items-center justify-center space-x-2"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </Button>
          <Link to="/" className="mt-4 text-sm text-center block text-gray-600 hover:text-primary">
            Return to Website
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
