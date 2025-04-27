import LinkButton from "./LinkButton";
import { faDiagramProject, faEnvelope, faHome, faIdCard, faLaptopCode, faScaleBalanced } from '@fortawesome/free-solid-svg-icons';

const HeaderNav = () => {
  return (
    <header className="bg-gray-800 text-white p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">NW.dev</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <LinkButton path="/" text="Home" icon={faHome} />
            </li>
            <li>
              <LinkButton path="/about" text="About" icon={faIdCard} />
            </li>
            <li>
              <LinkButton path="/projects" text="Projects" icon={faDiagramProject} />
            </li>
            <li>
              <LinkButton path="/principles" text="Principles" icon={faScaleBalanced} />
            </li>
            <li>
              <LinkButton path="/contact" text="Contact" icon={faEnvelope} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNav;
