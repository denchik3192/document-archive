export interface IArchive {
    documentDate: Date;
    documentNumber: string;
    documentType: string;
    organizationName: string;
    taxPeriod: string;
    status: 'NEW' | 'IN_PROCESS' | 'FINISHED' | 'REJECTED'
}
