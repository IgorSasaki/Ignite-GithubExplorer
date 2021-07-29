// External dependencies
import React from "react";

function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url}>Acessar Repositório</a>
    </li>
  );
}

export default RepositoryItem;
