import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import {
  FiChevronLeft,
  FiChevronRight,
  FiStar,
  FiShuffle,
} from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface Repository {
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}

interface Issue {
  title: string;
  id: number;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { pathname } = useLocation();
  const sanitizePathName = pathname.split('/repository/').slice(-1).join();

  const [loading, setLoading] = useState(false);
  const [repo, setRepo] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  async function loadData(): Promise<void> {
    // const response = await Promise.all([
    //   api.get(`repos/${sanitizePathName}`),
    //   api.get(`repos/${sanitizePathName}/issues`),
    // ]);
    const response = await api.get(`repos/${sanitizePathName}`);
    const response2 = await api.get(`repos/${sanitizePathName}/issues`);
    setRepo(response.data);
    setIssues(response2.data);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    loadData();
  }, [sanitizePathName]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github" />
        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      </Header>

      {repo && (
        <RepositoryInfo>
          <header>
            <img src={repo?.owner.avatar_url} alt={repo?.owner.login} />
            <div>
              <strong>{repo?.owner.login}</strong>
              <p>{repo?.full_name}</p>
            </div>
          </header>

          <ul>
            <li>
              <strong>{repo?.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repo?.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repo.open_issues_count}</strong>
              <span>Issues</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      {loading && <h3>Carregando..</h3>}

      {issues &&
        loading === false &&
        issues.map(issue => (
          <Issues key={issue.id}>
            <ul>
              <li>
                <FiStar size={20} />
                <span>{issue.title}</span>
              </li>
            </ul>

            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>

            <FiChevronRight size={20} />
          </Issues>
        ))}
    </>
  );
};

export default Repository;
