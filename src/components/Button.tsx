import "./Button.scss";
import { FaChildReaching } from "react-icons/fa6";

interface Props {
  icon: string;
  context: string | number;
}

const Button: React.FC<Props> = ({ icon, context }) => {
  return (
    <div className="button_container">
      <p>
        <FaChildReaching />
        {context}
      </p>
    </div>
  );
};

export default Button;
