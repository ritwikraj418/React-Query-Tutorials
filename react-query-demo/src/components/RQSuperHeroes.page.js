import { useQuery } from 'react-query'
import axios from 'axios'

export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error } = useQuery(
    'super-heroes',
    () => {
      return axios.get('http://localhost:4000/superheroes')
    },
    {
      cacheTime: 5000,
      staleTime: 10000
    }
  )

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {data?.data.map(hero => {
        return <div key={hero.name}>{hero.name}</div>
      })}
    </>
  )
}
