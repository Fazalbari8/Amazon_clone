import React, { useState } from 'react';
// import { PiArrowSquareRightFill } from "react-icons/pi";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-[350px] mb-8  ">
            <Image
              src="/image.png" // Add your hero image here
              layout="fill"
              objectFit="cover"
              objectPosition="top"  // Ensure top part of the image is visible
              alt="Hero"
              className="rounded-lg"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 p-4 rounded-md shadow-lg hidden sm:block">
              <p className="text-sm sm:text-base text-gray-800 text-center">
                You are on Amazon.com. You can also shop on Amazon Pakistan for millions of products with fast local delivery.
                <a href="https://www.amazon.in/" className="text-blue-600 underline ml-1">Click here to go to Amazon.in</a>
              </p>
            </div>
          </div>



          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Category 1 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-md flex flex-col items-center justify-between">
              <Image
                src="/box1_image.jpg" // Image for Category 1
                width={200}
                height={150}
                alt="Category 1"
                className="mb-4" // No more circular images
              />
              <h3 className="text-center text-lg font-semibold">Clothes</h3>
              <p className="text-[#007185] text-sm hover:underline cursor-pointer">See More 
              </p>
            </div>

            {/* Category 2 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-md flex flex-col items-center justify-between">
              <Image
                src="/box2_image.jpg" // Image for Category 2
                width={200}
                height={150}
                alt="Category 2"
                className="mb-4"
              />
              <h3 className="text-center text-lg font-semibold">Health & Personal Care</h3>
              <p className="text-[#007185] text-sm hover:underline cursor-pointer">See More 
              </p>
            </div>

            {/* Category 3 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-md flex flex-col items-center justify-between">
              <Image
                src="/box3_image.jpg" // Image for Category 3
                width={200}
                height={150}
                alt="Category 3"
                className="mb-4"
              />
              <h3 className="text-center text-lg font-semibold">Ferniture</h3>
              <p className="text-[#007185] text-sm hover:underline cursor-pointer">See More 
              </p>
            </div>

            {/* Category 4 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-md flex flex-col items-center justify-between">
              <Image
                src="/box4_image.jpg" // Image for Category 4
                width={200}
                height={150}
                alt="Category 4"
                className="mb-4"
              />
              <h3 className="text-center text-lg font-semibold">Mobiles</h3>
              <p className="text-[#007185] text-sm hover:underline cursor-pointer">See More
              </p>
            </div>

            {/* Category 5 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-md flex flex-col items-center justify-between">
              <Image
                src="/box5_image.jpg" // Image for Category 5
                width={200}
                height={150}
                alt="Category 5"
                className="mb-4"
              />
              <h3 className="text-center text-lg font-semibold">Beauty Pics</h3>
              <p className="text-[#007185] text-sm hover:underline cursor-pointer">See More 
              </p>
            </div>

            {/* Category 6 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-md flex flex-col items-center justify-between">
              <Image
                src="/box6_image.jpg" // Image for Category 6
                width={200}
                height={150}
                alt="Category 6"
                className="mb-4"
              />
              <h3 className="text-center text-lg font-semibold">Pet Care</h3>
              <p className="text-[#007185] text-sm hover:underline cursor-pointer">See More 
              </p>
            </div>

            {/* Category 7 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-md flex flex-col items-center justify-between">
              <Image
                src="/box7_image.jpg" // Image for Category 7
                width={200}
                height={150}
                alt="Category 7"
                className="mb-4"
              />
              <h3 className="text-center text-lg font-semibold">New Arrival in Toys</h3>
              <p className="text-[#007185] text-sm hover:underline cursor-pointer">See More 
              </p>
            </div>

            {/* Category 8 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-md flex flex-col items-center justify-between">
              <Image
                src="/box8_image.jpg" // Image for Category 8
                width={200}
                height={150}
                alt="Category 8"
                className="mb-4"
              />
              <h3 className="text-center text-lg font-semibold">Discover Fashion Trends</h3>
              <p className="text-[#007185] text-sm hover:underline cursor-pointer">See More 
              </p>
            </div>
          </div>
          <BackToTop />
          <Dashboard />
        {/* </div> */}
      </Content>
    </Layout>
    </Layout >
  );
};
export default Dashboard;