import React, { useState } from 'react';
import { Layout, Menu } from 'antd';

const { Header: AntHeader, Sider } = Layout

function Header() {
    const [collapsed, setCollapsed] = useState(true);

    let onCollapse = (): void => {
        setCollapsed(!collapsed)
    }

    return (
        <>
            <AntHeader style={{ minWidth: '100vw'}}>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3" onClick={onCollapse}>nav 3</Menu.Item>
                </Menu>
            </AntHeader>
            <Sider collapsed={collapsed} collapsedWidth={0} width={'100%'} onCollapse={onCollapse} style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: '8rem'
            }}>
                <Menu defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        Option 1
                </Menu.Item>
                </Menu>
            </Sider>
        </>
    )
}

export default Header