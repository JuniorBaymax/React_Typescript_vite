import { Button, Table } from 'antd';
import ComponentSkeleton from '../components-overview/ComponentSkeleton';
import MainCard from '~/components/MainCard';

import { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';
import useOrdersQuery from '~/queries/orderQueries';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const OrderTable = () => {
  const navigate = useNavigate();

  const payload = {
    page: 1,
    pageSize: 50,
    active: 1,
    user_id: 30,
    user_role: 8,
    ticket_type: 'OPEN',
    createdBy: 30,
    filterParams: [],
  };
  const orderMutation = useOrdersQuery(payload);

  const columns: ColumnsType<DataType> = [
    {
      title: 'Ticket Id',
      width: 100,
      dataIndex: 'ticket_serialNo',
      key: '1',
      fixed: 'left',
    },
    {
      title: 'State',
      width: 100,
      dataIndex: 'ticketState',
      key: '2',
      fixed: 'left',
      sorter: true,
    },
    { title: 'City', dataIndex: 'ticketCity', key: '3' },
    { title: 'Customer Name', dataIndex: 'ticket_customerName', key: '4' },
    { title: 'Asset ID', dataIndex: 'ticket_assetId', key: '5' },
    { title: 'Status', dataIndex: 'statusValue', key: '6' },
    { title: 'Current Workgroup', dataIndex: 'ticket_user_role', key: '8' },
    { title: 'Current Owner', dataIndex: 'ticket_currentOwner', key: '9' },
    { title: 'Created By', dataIndex: 'ticketCreatedBy', key: '10' },
    { title: 'Created At', dataIndex: 'ticket_createdAt', key: '11' },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: params => {
        return (
          <Button
            type='primary'
            shape='round'
            size='middle'
            onClick={() => {
              navigate(`/orders/manage/${params.ticket_serialNo}`, {
                state: params.ticket_serialNo,
              });
            }}
          >
            Action
          </Button>
        );
      },
    },
  ];

  return (
    <ComponentSkeleton>
      <MainCard title='Order Table' sx={{ maxWidth: '80vw' }}>
        <Table
          columns={columns}
          dataSource={orderMutation.data?.data}
          scroll={{ x: 1500, y: 350 }}
          size='middle'
          loading={orderMutation.isLoading}
        />
      </MainCard>
    </ComponentSkeleton>
  );
};

export default OrderTable;
