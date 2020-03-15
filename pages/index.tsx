import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import USERS_QUERY from '../graphql/users.query';

const Home = () => {
  // Create a query hook
  const { data, loading, error } = useQuery(USERS_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Users</h1>
      <ul>
        {data.allUsers.map(user => {
          return user.name ? <li key={`job__${user.id}`}>{user.name}</li> : null;
        })}
      </ul>
    </div>
  );
};

export default Home;