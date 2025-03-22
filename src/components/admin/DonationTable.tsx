import React, { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  MoreVertical, 
  Download, 
  Search, 
  Filter, 
  ChevronDown 
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";

export type DonationStatus = 'pending' | 'completed' | 'failed';

interface Donation {
  id: string;
  donor: string;
  email: string;
  amount: number;
  date: string;
  campaign: string;
  status: DonationStatus;
}

interface DonationTableProps {
  donations: Donation[];
}

const DonationTable: React.FC<DonationTableProps> = ({ donations }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState<Donation | null>(null);
  
  // Filter donations based on search term
  const filteredDonations = donations.filter(donation => 
    donation.donor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    donation.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    donation.campaign.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const statusColors = {
    pending: 'bg-amber-100 text-amber-800',
    completed: 'bg-green-100 text-green-800',
    failed: 'bg-red-100 text-red-800'
  };
  
  const handleViewDetails = (donation: Donation) => {
    setSelectedDonation(donation);
    setIsDetailsOpen(true);
  };
  
  return (
    <>
      <div className="mb-4 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search donations by donor, email, or campaign"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button variant="outline" className="flex items-center gap-1">
          <Filter className="h-4 w-4" />
          Filter
          <ChevronDown className="h-4 w-4 ml-1" />
        </Button>
        <Button variant="outline" className="flex items-center gap-1">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Donor</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Campaign</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDonations.length > 0 ? (
              filteredDonations.map((donation) => (
                <TableRow key={donation.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{donation.donor}</div>
                      <div className="text-sm text-gray-500">{donation.email}</div>
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
                    <Badge className={statusColors[donation.status]} variant="outline">
                      {donation.status.charAt(0).toUpperCase() + donation.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleViewDetails(donation)}>
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>Send Receipt</DropdownMenuItem>
                        <DropdownMenuItem>Send Thank You Email</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center h-24 text-gray-500">
                  No donations found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Donation Details</DialogTitle>
          </DialogHeader>
          
          {selectedDonation && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Donor</p>
                  <p className="font-medium">{selectedDonation.donor}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Amount</p>
                  <p className="font-medium">${selectedDonation.amount.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="font-medium">{selectedDonation.email}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Date</p>
                  <p className="font-medium">
                    {new Date(selectedDonation.date).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Campaign</p>
                  <p className="font-medium">{selectedDonation.campaign}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Status</p>
                  <Badge className={statusColors[selectedDonation.status]} variant="outline">
                    {selectedDonation.status.charAt(0).toUpperCase() + selectedDonation.status.slice(1)}
                  </Badge>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <p className="text-sm font-medium text-gray-500 mb-2">Actions</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Send Receipt</Button>
                  <Button variant="outline" size="sm">Send Thank You</Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DonationTable; 