import React from 'react'
import styles from './MainWidgets.module.css'
export default function MainWidgets() {
  return (
    <div className={styles.education_process} >
      <div className={styles.title_text}>
        <h3>교육 과정</h3>
        <img src='../../public/title-line.png' className={styles.title_line} />
      </div>
      <div className={styles.promotions}>
        <div>
          <img src='../../public/conBox1.jpeg' alt='firstSilde' />
          <div className={styles.yellowBackground}>
            <h4>연간교육 계획</h4>
            <span>오산대학교 부설유치원 교육계획을 <br />한 뉸에 볼 수 있습니다</span>
          </div>
        </div>
        <div>
          <img src='../../public/conBox2.jpeg' alt='firstSilde' />
          <div className={styles.redBackground}>
            <h4>연간교육 계획</h4>
            <span>오산대학교 부설유치원 교육계획을 <br />한 뉸에 볼 수 있습니다</span>
          </div>
        </div>
        <div>
          <img src='../../public/conBox03.jpeg' alt='firstSilde' />
          <div className={styles.yellowBackground}>
            <h4>연간교육 계획</h4>
            <span>오산대학교 부설유치원 교육계획을 <br />한 뉸에 볼 수 있습니다</span>
          </div>
        </div>
        <div>
          <img src='../../public/conBox4.jpeg' alt='firstSilde' />
          <div className={styles.redBackground}>
            <h4>연간교육 계획</h4>
            <span>오산대학교 부설유치원 교육계획을 <br />한 뉸에 볼 수 있습니다</span>
          </div>
        </div>
      </div>
    </div>
  )
}
