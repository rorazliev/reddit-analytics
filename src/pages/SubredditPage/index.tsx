import React, { ReactElement, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Error from '../../components/Error';
import HeatMap from '../../components/HeatMap';
import Loader from '../../components/Loader';
import { fetch, reset } from '../../redux/dataReducer';
import { Dispatch, useSelector } from '../../redux/store';
import { Container, Heading } from './styles';

const SubredditPage: React.FC = (): ReactElement => {
  // Get a subreddit name
  const { name } = useParams<{ name: string }>();

  const isFetching = useSelector((state) => state.data.isFetching);
  const isError = useSelector((state) => state.data.isError);

  // Get a reference to the dispatch function
  const dispatch: Dispatch = useDispatch();

  // Fetch data on component will mount
  useEffect(() => {
    dispatch(fetch(name as string));
    // Reset the state on component will unmount
    return () => {
      dispatch(reset());
    };
  }, [dispatch, name]);

  // Render error message, if an error occurs
  if (isError) return <Error />;

  // Render loader on fetching
  if (isFetching) return <Loader />;

  // Render
  return (
    <>
      <Helmet>
        <title>{`React Analytics • ${name}`}</title>
      </Helmet>
      <Container>
        <Heading>{`/ ${name}`}</Heading>
        <HeatMap />
      </Container>
    </>
  );
};

export default SubredditPage;
