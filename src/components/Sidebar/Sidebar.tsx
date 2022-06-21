import React from 'react';
import * as S from './style';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as I from '../../assets/index';

const SideBar = () => {
    const router = useRouter();
    return (
        <>
            <S.Positioner>
                <S.LogoWrapper><I.Logo /></S.LogoWrapper>
                <S.SidebarListWrapper>
                    <Link href="/"><a className={router.pathname === "/" ? 'active' : ''}><I.Dashboard/>Dashboard</a></Link>
                    <Link href="/research"><a className={router.pathname === "/research" ? 'active' : ''}><I.Research/>Research</a></Link>
                    <Link href="/members"><a className={router.pathname === "/members" ? 'active' : ''}><I.Members/>Members</a></Link>
                    <Link href="/insight"><a className={router.pathname === "/insight" ? 'active' : ''}><I.Insight/>Insight</a></Link>
                    <Link href="/calender"><a className={router.pathname === "/calender" ? 'active' : ''}><I.Calender/>Calender</a></Link>
                </S.SidebarListWrapper>
            </S.Positioner>
            <S.SidebarContainer />
        </>
    )
}

export default SideBar;