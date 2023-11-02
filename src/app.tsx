/* eslint-disable react/no-unstable-nested-components */
import {
  ConfigProvider,
  theme,
  App as AntdApp,
  Button,
  Layout,
  Menu,
  Card,
  Flex,
} from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
import "dayjs/locale/zh-cn";
import zhCN from "antd/locale/zh_CN";

import { FC, useCallback, useMemo, useState } from "react";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import { LuSun, LuMoon } from "react-icons/lu";
import Icon from "@ant-design/icons/lib/components/Icon";

const { Header, Sider, Content } = Layout;

const App: FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const toggleDark = useCallback(() => setIsDark((state) => !state), []);

  // 是否启用antd的dark算法
  const algorithm = useMemo(() => {
    const result = [theme.compactAlgorithm];
    if (isDark) result.push(theme.darkAlgorithm);
    return result;
  }, [isDark]);

  // 顶部颜色
  const headerBg = isDark ? "#141414" : "#ffff";
  const siderBg = isDark ? "#141414" : "#ffff";

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        algorithm,
        token: {},
        components: {
          Layout: {
            headerBg,
            siderBg,
          },
        },
      }}
    >
      <StyleProvider hashPriority="high">
        <AntdApp>
          <Layout style={{ minHeight: "100vh", padding: 0, margin: 0 }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
              <Card bordered={false}>
                <Button type="text">ERPUI</Button>
              </Card>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                items={[
                  {
                    key: "1",
                    icon: <UserOutlined />,
                    label: "nav 1",
                  },
                  {
                    key: "2",
                    icon: <VideoCameraOutlined />,
                    label: "nav 2",
                  },
                  {
                    key: "3",
                    icon: <UploadOutlined />,
                    label: "nav 3",
                  },
                ]}
                style={{ border: 0 }}
              />
            </Sider>
            <Layout>
              <Header
                style={{
                  paddingLeft: 0,
                  paddingRight: 0,
                }}
              >
                <Flex
                  vertical={false}
                  align="center"
                  justify="space-between"
                  style={{ minHeight: "60px" }}
                >
                  <Flex vertical align="center">
                    <Button
                      onClick={() => setCollapsed(!collapsed)}
                      style={{ marginLeft: -20 }}
                      type="text"
                      size="large"
                    >
                      {collapsed ? (
                        <MenuUnfoldOutlined />
                      ) : (
                        <MenuFoldOutlined />
                      )}
                    </Button>
                  </Flex>
                  <Flex
                    justify="end"
                    vertical
                    align="center"
                    style={{ paddingRight: "20px" }}
                  >
                    <Button onClick={toggleDark} title="切换主题" size="large">
                      <Icon>{isDark ? <LuSun /> : <LuMoon />}</Icon>
                    </Button>
                  </Flex>
                </Flex>
              </Header>
              <Content />
            </Layout>
          </Layout>
        </AntdApp>
      </StyleProvider>
    </ConfigProvider>
  );
};
export default App;
