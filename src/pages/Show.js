import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { APIGet } from '../misc/config';
const Show = () => {
  const { id } = useParams();
  console.log(id);
  const [show, setShow] = useState(null);
  useEffect(() => {
    APIGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results => {
      setShow(results);
    });
  }, [id]);

  console.log(show);
  return <div>This is show page</div>;
};

export default Show;
