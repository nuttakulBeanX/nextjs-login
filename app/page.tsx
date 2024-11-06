'use client';

import { useState } from 'react';
import { Form, Input, Button, Typography, message } from 'antd';
import { UserOutlined, LockOutlined, MobileOutlined, LaptopOutlined, TabletOutlined } from '@ant-design/icons';
import Image from 'next/image';

const { Title, Text } = Typography;

export default function Home() {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      message.success('Login successful!');
    } catch (error) {
      message.error('Login failed!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <Image
          src="/hospital-logo.png"
          alt="Hospital Logo"
          width={120}
          height={120}
          className="hospital-logo"
        />
        <Title level={2} style={{ color: 'white', margin: 0 }}>
          CHULARAT HOSPITAL GROUP
        </Title>
        <div className="device-icons">
          <MobileOutlined />
          <LaptopOutlined />
          <TabletOutlined />
        </div>
        <Text style={{ color: 'white' }}>
          Powered by MEDcury Co., Ltd.
        </Text>
        <Text style={{ color: 'white', marginTop: '1rem' }}>
          95 Mobicom 4 Building, 3rd Floor, Soi Phra Pinit,
          <br />
          Tungmahamek, Sathorn, Bangkok 10120
        </Text>
      </div>

      <div className="login-right">
        <div className="login-form">
          <Title level={2} style={{ marginBottom: '1.5rem' }}>
            Sign In
          </Title>
          <Text style={{ display: 'block', marginBottom: '2rem', color: '#666' }}>
            Sign in to your account.
          </Text>

          <Form
            name="login"
            onFinish={onFinish}
            layout="vertical"
            size="large"
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Username"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                style={{
                  width: '100%',
                  height: '40px',
                  backgroundColor: 'var(--primary-color)',
                }}
              >
                SIGN IN
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}