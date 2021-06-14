import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import aboutStyles from "../styles/about.module.css";

import { DiGithubBadge } from "react-icons/di";
import { AiTwotoneMail } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

export default function About() {
  return (
    <Layout>
      <div className={`${utilStyles.heading2Xl} ${utilStyles.padding1px}`}>
        한규현 KyuHyun Han
      </div>
      <div className={utilStyles.headingLg}>Front-end developer</div>
      <div className={aboutStyles.profileLinks}>
        <div>
          <a
            className={aboutStyles.profileLink}
            href="https://github.com/kyuhyunhan"
            target="_blank"
          >
            <DiGithubBadge size={33} />
            <span className={aboutStyles.profileLinkText}>Github</span>
          </a>
        </div>
        <div>
          <a
            className={aboutStyles.profileLink}
            href="https://www.facebook.com/profile.php?id=100015816003239"
            target="_blank"
          >
            <AiFillFacebook size={30} />
            <span className={aboutStyles.profileLinkText}>Facebook</span>
          </a>
        </div>
        <div className={aboutStyles.profileLink}>
          <AiTwotoneMail size={30} />
          <span className={aboutStyles.profileLinkText}>
            kyuhyunhaan@gmail.com
          </span>
        </div>
      </div>

      <div className={aboutStyles.skills}>
        <div className={aboutStyles.skill}>
          <img className={aboutStyles.skillImg} src="images/JSlogo.svg" />
          <div>JavaScript</div>
        </div>
        <div className={aboutStyles.skill}>
          <img
            className={`${aboutStyles.skillImg} ${aboutStyles.reactImg}`}
            src="images/Reactlogo.svg"
          />
          <div>React</div>
        </div>
      </div>
      <div>CSS를 멋지게 다루는 기술과 방법론을 생각합니다.</div>
      <div>
        <strong>MacOS</strong>에서 <strong>VSCode</strong>로 개발합니다.
      </div>

      <div>
        <div className={utilStyles.headingMd}>경력</div> 2021.02 - (주)핫셀러
        Hotseller
      </div>
      <div>
        <div className={utilStyles.headingMd}>학력</div> 2020.02 인천대학교
        영어영문학사
      </div>
    </Layout>
  );
}
