import "./Card.scss";

interface Props {
  title: string;
  description: string;
}

const Card: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="card_container">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Card;
