import React, {useState, useEffect} from 'react'
import { Button, Menu, Typography, Avatar} from 'antd';
import {Link} from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined} from '@ant-design/icons';
import icon from '../images/logo.png'

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);
  
    useEffect(() => {
      const handleResize = () => setScreenSize(window.innerWidth);
  
      window.addEventListener("resize", handleResize);
  
      handleResize();
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    useEffect(() => {
      if (screenSize && screenSize < 801) {
        setActiveMenu(false);
      } else {
        setActiveMenu(true);
      }
    }, [screenSize]);
  
    return (
      <nav className="nav-container">
        <div className="logo-container">
          <Avatar src={icon} size="large" />
          <Typography.Title level={2} className="logo">
            <Link to={"/"}>CryptoWorld</Link>
          </Typography.Title>
          <Button
            className="menu-control-container"
            onClick={() => setActiveMenu((prevState) => !prevState)}
          >
            <MenuOutlined />
          </Button>
        </div>
        {activeMenu && (
          <Menu theme="dark">
            <Menu.Item key={"home"} icon={<HomeOutlined />}>
              <Link to={"/"}>Home</Link>
            </Menu.Item>
            <Menu.Item key={"cryptocurr"} icon={<FundOutlined />}>
              <Link to={"/cryptocurrencies"}>Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined />}>
              <a href ='https://mykryptlive.netlify.app/' target='blank'>MyKrypt</a>
            </Menu.Item>
            <Menu.Item key={"new"} icon={<BulbOutlined />}>
              <Link to={"/news"}>News</Link>
            </Menu.Item>
          </Menu>
        )}
      </nav>
    );
  };
  
  export default Navbar;