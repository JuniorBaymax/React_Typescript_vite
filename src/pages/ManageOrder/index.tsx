import { useState } from 'react';

import ComponentSkeleton from '../components-overview/ComponentSkeleton';
import { Button, Card, Descriptions } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { useOrderDetailsQuery } from '~/queries/orderQueries';

const ManageOrder: React.FC<any> = () => {
  const { pathname, state } = useLocation();
  const orderDetails = useOrderDetailsQuery({ ticketID: state, SCREENTYPE: 'VIEW' });
  const [activeTabKey1, setActiveTabKey1] = useState<string>('tab1');
  const navigate = useNavigate();

  const onTab1Change = (key: string) => {
    setActiveTabKey1(key);
  };
  const tabList = [
    {
      key: 'tab1',
      tab: `Invoice Details`,
    },
    {
      key: 'tab2',
      tab: `Tab 2`,
    },
    {
      key: 'tab3',
      tab: `Other Tab`,
    },
  ];
  console.log('ORDER DETAILS', orderDetails);
  const contentList: Record<string, React.ReactNode> = {
    tab1: (
      <Descriptions
        size='middle'
        bordered
        style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}
      >
        <Descriptions.Item label='Ticket Serial No'>
          {orderDetails.data?.data[0].ticket_serialNo}
        </Descriptions.Item>
        <Descriptions.Item label='Created Date & Time'>
          {orderDetails.data?.data[0]?.ticket_createdAt}
        </Descriptions.Item>
        <Descriptions.Item label='Request Type'>
          {orderDetails.data?.data[0]?.ticket_serviceType}
        </Descriptions.Item>
        <Descriptions.Item label='Issue Category Reported by User'>
          {orderDetails.data?.data[0]?.subcategory}
        </Descriptions.Item>
        <Descriptions.Item label='Issue Subcategory'>
          {orderDetails.data?.data[0]?.subcategory}
        </Descriptions.Item>
        <Descriptions.Item label='Current Workgroup'>
          {orderDetails.data?.data[0]?.current_work_group_name}
        </Descriptions.Item>
        <Descriptions.Item label='Current Owner'>
          {orderDetails.data?.data[0]?.current_owner_name}
        </Descriptions.Item>
        <Descriptions.Item label='State'>
          {orderDetails.data?.data[0]?.ticketState}
        </Descriptions.Item>
        <Descriptions.Item label='Call Type' span={4}>
          {orderDetails.data?.data[0]?.param_ticket_courtsey}
        </Descriptions.Item>
        <Descriptions.Item label='Chain Name'>
          {orderDetails.data?.data[0]?.ticket_chain_name}
        </Descriptions.Item>
        <Descriptions.Item label='Priority'>
          {orderDetails.data?.data[0]?.ticket_priority}
        </Descriptions.Item>
        <Descriptions.Item label='Source'>
          {orderDetails.data?.data[0]?.ticket_source}
        </Descriptions.Item>
        <Descriptions.Item label='Severity'>
          {orderDetails.data?.data[0]?.ticket_severity}
        </Descriptions.Item>
        <Descriptions.Item label='Issue description'>
          {orderDetails.data?.data[0]?.ticket_issueDesc}
        </Descriptions.Item>
      </Descriptions>
    ),
    tab2: <Card></Card>,
  };
  return (
    <ComponentSkeleton>
      <Card
        style={{ width: '100%' }}
        title={`${orderDetails.data?.data[0].ticket_serialNo} Current Status`}
        extra={
          <Button
            icon={<LeftOutlined />}
            type='primary'
            shape='round'
            onClick={() => navigate(-1, { replace: true })}
          >
            Back
          </Button>
        }
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={onTab1Change}
        loading={orderDetails.isLoading}
      >
        {contentList[activeTabKey1]}
      </Card>
    </ComponentSkeleton>
  );
};

export default ManageOrder;
