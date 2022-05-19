import { useParams, useHistory } from "react-router-dom";

function Welcome() {
  const params = useParams();
  const history = useHistory();

  return (
    <div className="container">
      <div className="container-welcome">
        <h1> Bem-vindo, {params.id}! </h1>
        <button onClick={() => history.push("/")}>Voltar</button>
      </div>
    </div>
  );
}

export default Welcome;
