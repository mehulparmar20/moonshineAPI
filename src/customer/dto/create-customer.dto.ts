export class CreateCustomerDto {
    customer_id: number;
    user_id: number;
    company_detail_id: number;
    bank_id: number;
    customer_name: string;
    customer_email: string;
    group_cos: number;
    postbox: string;
    address1: string;
    address2: string;
    area: string;
    landmark: string;
    country: number;
    state: number;
    city: number;
    address_type: number;
    phone_no: number;
    fax: number;
    location_email: string;
    website: string;
    ref_by: string;
    trade_activity: string;
    status: number;
    facility_location: string;
    create_at: Date;
}
