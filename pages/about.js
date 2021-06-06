import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import aboutStyles from "../styles/about.module.css";

import { DiGithubBadge } from "react-icons/di";
import { AiTwotoneMail } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

export default function About() {
  return (
    <Layout>
      <div className={utilStyles.heading2Xl}>한규현 KyuHyun Han</div>
      <div className={utilStyles.headingLg}>Front-end developer</div>
      <div className={aboutStyles.profileLinks}>
        <div className={aboutStyles.profileLink}>
          <DiGithubBadge size={30} />
        </div>
        <div className={aboutStyles.profileLink}>
          <AiFillFacebook size={30} />
        </div>
        <div className={aboutStyles.profileLink}>
          <AiTwotoneMail size={30} />
        </div>
      </div>

      <div className={aboutStyles.skills}>
        <div>
          <img src="images/JSlogo.svg" />
          JavaScript
        </div>
        <div>
          <img src="images/Reactlogo.svg" />
          React
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
