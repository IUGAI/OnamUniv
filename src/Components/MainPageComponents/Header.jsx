import React from 'react'
import styles from './Header.module.css'

export default function Header() {
    return (
        <div className={styles.header} >
        <div className={styles.inner}>
            <div className='logo'>
                <img src='../../public/logo.png' alt="headerlogo" />
            </div>
            <div className='main-menu'>
                <ul className={styles.menu}>
                    <li>
                    <a href=''>유치원소개</a>
                    </li>
                    <li>
                    <a href=''>교육과정</a>
                    </li>
                    <li>
                    <a href=''>보뮤마당</a>
                    </li>
                    <li>
                    <a href=''>프토갤러리</a>
                    </li>
                    <li>
                    <a href=''>입학안내</a>
                    </li>
                </ul>
            </div>
            <div className={styles.login}>
                <div className={styles.loginitem}>
                   <img src='../../header-login.png'/>
                   <span>로그인</span>
                </div>
                <div className={styles.loginitem}>
                   <img src='../../header-join.png'/>
                   <span>회원가입</span>
                </div>
                <div className={styles.loginitem}>
                   <img src='../../header-notice.png'/>
                   <span>공지사항</span>
                </div>
            </div>
        </div>
        </div>
    )
}
