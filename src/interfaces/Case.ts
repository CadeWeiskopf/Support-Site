export interface Case {
  id: string;
  guid: string;
  dateCreated: Date;
  dateClosed: Date | null;
  repId: string;
  repGuid: string;
  customerId: string;
  customerGuid: string;
}
