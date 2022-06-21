import styled from "@emotion/styled";

export const Positioner = styled.div`
    width: 252px;
    height: 100%;
    background-color: #F8F8F8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: fixed;
    top: 0;
`;

export const SidebarContainer = styled.div`
    width: 252px;
    height: 100%;
`;

export const LogoWrapper = styled.div`
    width: 100%;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SidebarListWrapper = styled.div`
    width: 100%;
    display: grid;
    justify-content: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 21px;
    a{
      width: 145px;
      height: 70px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      column-gap: 10px;
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
    .active{
      color: #2878F0;
      .SidebarIcon{
        fill: #2878F0;
      }
    }
`;