// External dependencies
import React, { useEffect, useState } from "react";

// Internal dependencies
import RepositoryItem from "./RepositoryItem";

// Styling
import "../styles/repositories.scss";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("http://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="respository-list">
      <h1>Lista de Repositórios #1</h1>

      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
      </ul>
    </section>
  );
}

export default RepositoryList;
