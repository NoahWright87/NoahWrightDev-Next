import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHomeLg } from "@fortawesome/free-solid-svg-icons";

interface LinkButtonProps {
  path: string;
  text: string;
  icon?: IconDefinition;
}

const LinkButton: React.FC<LinkButtonProps> = ({ path, text, icon }) => {
  return (
    <Link href={path} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
      {icon && <FontAwesomeIcon icon={icon} className="mr-1" style={{ height: '1em' }} />}
      {text}
    </Link>
  );
};

export default LinkButton;