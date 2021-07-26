// External dependencies
import React from "react";

// Internal dependencies
import RepostoryItem from "./RepositoryItem";

const repository = {
  name: "unform",
  description: "Forms in React",
  link: "https://www.github.com/unform/unform",
};

function RepositoryList() {
  return (
    <section className="reposiory-list">
      <h1>Lista de Repositórios #1</h1>

      <ul>
        <RepostoryItem repository={repository} />
        <RepostoryItem repository={repository} />
        <RepostoryItem repository={repository} />
        <RepostoryItem repository={repository} />
      </ul>
    </section>
  );
}

export default RepositoryList;
