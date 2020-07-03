import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { requestMars } from "../services/ducks/mars";
import "./styles.css";

export function Lista() {
  const [user, setUser] = React.useState("");
  const [page, setPage] = React.useState(1);
  const mars = useSelector((state) => state.mars);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(requestMars(user, page));
  }

  React.useEffect(() => {
    if (user) {
      handleClick();
    }
  }, [page]);

  return (
    <>
      <input onChange={(e) => setUser(e.target.value)} value={user} />{" "}
      <button onClick={handleClick}>Pesquisar</button>
      <br />
      {mars.loading && <p>Carregando...</p>}
      {!!mars.data.length && (
        <>
          <p>Página {page}</p>
          <ul>
            {mars.data.map((repo) => (
              <li key={repo.id}>{repo.name}</li>
            ))}
          </ul>
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            Anterior
          </button>{" "}
          <button
            disabled={mars.data.length !== 30}
            onClick={() => setPage(page + 1)}
          >
            Próxima
          </button>
        </>
      )}
      {mars.error && <span>Cóe deu erro!</span>}
    </>
  );
}
