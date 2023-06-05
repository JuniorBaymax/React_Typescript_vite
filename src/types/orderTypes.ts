export type orderDetailsType = {
  ticketID: string;
  SCREENTYPE: string;
};

export type orderDetailsResponse = {
  data: [
    {
      id: number;
      ticket_serialNo: string;
      ticket_latitude: string;
      ticket_createdAt: string;
      ticket_issueDesc: string;
      current_work_group_name: string;
      current_owner_name: string;
      ticket_serviceType: string;
      issuecategory: string;
      subcategory: string;
      ticket_source: string;
      ticket_priority: string;
      ticket_isVIP: string;
      ticket_adld: string;
      ticket_ew: string;
      ticket_stand_by: string;
      ticketState: string;
      ticket_severity: string;
      ticket_chain_name: string;
      ticket_userName: string;
      assingee_role_id: string;
      assingee_department_id: string;
      param_ticket_courtsey: string;
      ticket_status: string;
    }
  ];
};
