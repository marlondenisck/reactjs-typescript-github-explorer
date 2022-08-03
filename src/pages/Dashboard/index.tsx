/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories, AlertError } from './styles';

interface Repository {
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
}

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const localStoraged = localStorage.getItem('@Githubexplorer:repositories');

    if (localStoraged) {
      return JSON.parse(localStoraged);
    }
    return [];
  });

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!inputValue) {
      setInputError('Digite um repositório!');
      return;
    }

    try {
      setLoading(true);
      const response = await api.get<Repository>(`repos/${inputValue}`);
      const newRepository = response.data;

      setRepositories([...repositories, newRepository]);
      setInputValue('');
      setInputError('');
      setLoading(false);
    } catch (error) {
      setInputError('Repositório não encontrado.');
    }
  }

  useEffect(() => {
    localStorage.setItem(
      '@Githubexplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore os usuários do Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          type="text"
          placeholder="Digite o nome de um repositório"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </Form>

      {inputError && <AlertError>{inputError}</AlertError>}
      {loading && <h3>Carregando..</h3>}

      <Repositories>
        {repositories &&
          !loading &&
          repositories.map(repository => (
            <Link
              key={repository.full_name}
              to={`/repository/${repository.owner.login}`}
            >
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
              <FiChevronRight title="Ver detalhes" size={20} />
            </Link>
          ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
