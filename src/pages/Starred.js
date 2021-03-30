import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { APIGet } from '../misc/config';
import { useShows } from '../misc/custom-hooks';
import ShowGrid from '../components/show/ShowGrid';

const Starred = () => {
  const [starred] = useShows();
  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.length) {
      const promises = starred.map(showId => APIGet(`/shows/${showId}`));
      Promises.all(promises)
        .then(apiData => apiData.map(show => ({ show })))
        .then(results => {
          setShows(results);
          setIsLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [starred]);

  return (
    <MainPageLayout>
      {isLoading && <div>Shows are still Loading</div>}{' '}
      {error && <div>Error Occured : {error}</div>}
      {!isLoading && !shows && <div>No Shows were Added</div>}
      {!isLoading && !error && shows && <ShowGrid data={shows} />}
    </MainPageLayout>
  );
};

export default Starred;
