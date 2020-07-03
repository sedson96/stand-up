import React from 'react';
import { Layout, Input, Space } from "antd";
import Header from '../header/header';

const { Search } = Input;

function StandUp() {


    return (
        <>
            <Layout >
                <Header></Header>
            </Layout>
            <Layout>
                <Layout.Content>
                    <Search
                        placeholder="input search text"
                        enterButton="Search"
                        size="large"
                        onSearch={value => console.log(value)}
                    />
                </Layout.Content>
            </Layout>
        </>

    );
}

export default StandUp;