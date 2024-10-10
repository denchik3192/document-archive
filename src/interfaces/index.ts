export interface IArchive {
    documentDate: Date;
    documentNumber: string;
    documentType: string;
    organizationName: string;
    taxPeriod: string;
    status: 'NEW' | 'IN_PROCESS' | 'FINISHED' | 'REJECTED'
}

export interface File {
    file_name: string;
    file_presentation: string;
}

export interface IArchiveRecord {
    request_guid: string;
    document_date: string;
    document_number: string;
    document_presentation: string;
    document_presentation_guid: string;
    document_type: string;
    record_date: string;
    record_status: string;
    record_status_comment: string;
    record_comment: string;
    organization_name: string;
    organization_guid: string;
    tax_period: string;
    tax_period_end_date: string;
    files: File[];
}
