import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Link } from 'react-router-dom';

import '../styles/Home.css';

export default function HomePage() {
  return (
    <section id="home" className="home">
      <h1 className="home_title">
        <span className="home_typing_wrapper">
          <span className="home_typing">
            hi,&nbsp;<span className="accent">meghana</span>&nbsp;here.
          </span>
        </span>
      </h1>
      <p className="home_paragraph">
        I build things that turn big ideas into meaningful impacts. I’m a
        Software Development Engineer who enjoys creating intuitive systems and
        experiences.
      </p>
      <Link to="/contactme" className="home_contactBtn">
        <EmailOutlinedIcon className="home_contactBtnIcon" />
        <span>Say Hello!</span>
      </Link>
    </section>
  );
}
