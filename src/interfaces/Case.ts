export interface Case {
  id: string;
  guid: string;
  number: string;
  dateCreated: Date;
  dateClosed: Date | null;
  repId: string;
  repGuid: string;
  customerId: string;
  customerGuid: string;
  status: string;
}
