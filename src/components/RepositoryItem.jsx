// External dependencies
import React from "react";

function RepostoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name ?? "Default"}</strong>
      <p>{props.repository.description ?? "Default"}</p>

      <a href={props.repository.link ?? ""}>Acessar Repositório</a>
    </li>
  );
}

export default RepostoryItem;
