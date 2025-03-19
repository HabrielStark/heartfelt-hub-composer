
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Filter 
} from 'lucide-react';

interface Donation {
  id: string;
  donor: string;
  email: string;
  amount: number;
  date: string;
  campaign: string;
  status: 'completed' | 'pending' | 'failed';
}

interface DonationTableProps {
  donations: Donation[];
}

const DonationTable: React.FC<DonationTableProps> = ({ donations }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<keyof Donation>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  
  const handleSort = (field: keyof Donation) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  const getSortIcon = (field: keyof Donation) => {
    if (field !== sortField) return null;
    return sortDirection === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />;
  };
  
  const filteredDonations = donations.filter(donation => 
    donation.donor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    donation.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    donation.campaign.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const sortedDonations = [...filteredDonations].sort((a, b) => {
    if (sortField === 'amount' || sortField === 'date') {
      const aValue = sortField === 'amount' ? a.amount : new Date(a.date).getTime();
      const bValue = sortField === 'amount' ? b.amount : new Date(b.date).getTime();
      
      return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
    }
    
    const aValue = a[sortField].toString().toLowerCase();
    const bValue = b[sortField].toString().toLowerCase();
    
    if (sortDirection === 'asc') {
      return aValue.localeCompare(bValue);
    } else {
      return bValue.localeCompare(aValue);
    }
  });
  
  const getStatusClass = (status: Donation['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="relative w-full md:w-auto flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Search donations..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex items-center space-x-2 w-full md:w-auto">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
          <Button className="bg-primary hover:bg-primary-600">
            Export Data
          </Button>
        </div>
      </div>
      
      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead 
                className="cursor-pointer"
                onClick={() => handleSort('donor')}
              >
                <div className="flex items-center space-x-1">
                  <span>Donor</span>
                  {getSortIcon('donor')}
                </div>
              </TableHead>
              <TableHead 
                className="cursor-pointer"
                onClick={() => handleSort('amount')}
              >
                <div className="flex items-center space-x-1">
                  <span>Amount</span>
                  {getSortIcon('amount')}
                </div>
              </TableHead>
              <TableHead 
                className="cursor-pointer"
                onClick={() => handleSort('date')}
              >
                <div className="flex items-center space-x-1">
                  <span>Date</span>
                  {getSortIcon('date')}
                </div>
              </TableHead>
              <TableHead 
                className="cursor-pointer"
                onClick={() => handleSort('campaign')}
              >
                <div className="flex items-center space-x-1">
                  <span>Campaign</span>
                  {getSortIcon('campaign')}
                </div>
              </TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedDonations.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                  No donations found
                </TableCell>
              </TableRow>
            ) : (
              sortedDonations.map((donation) => (
                <TableRow key={donation.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{donation.donor}</p>
                      <p className="text-sm text-gray-500">{donation.email}</p>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">
                    ${donation.amount.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    {new Date(donation.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{donation.campaign}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(donation.status)}`}>
                      {donation.status.charAt(0).toUpperCase() + donation.status.slice(1)}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DonationTable;
