import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableColumn, Progress } from '@backstage/core-components';
import Alert from '@material-ui/lab/Alert';
import useAsync from 'react-use/lib/useAsync';

const useStyles = makeStyles({
  avatar: {
    height: 32,
    width: 32,
    borderRadius: '50%',
  },
});

type Topic = {
  name: string; // "my-topic"
};

type DenseTableProps = {
  topics: Topic[];
};

export const DenseTable = ({ topics }: DenseTableProps) => {
  const columns: TableColumn[] = [
    { title: 'Topic', field: 'topic' }
  ];

  const data = topics.map(topic => {
    return {
      topic
    };
  });

  return (
    <Table
      title="All topics"
      options={{ search: false, paging: false }}
      columns={columns}
      data={data}
    />
  );
};

export const ExampleFetchComponent = () => {
  const { value, loading, error } = useAsync(async (): Promise<Topic[]> => {
    const response = await fetch('http://localhost:8082/topics');
    const data = await response.json();
    console.log(data);


    return data;
  }, []);

  if (loading) {
    return <Progress />;
  } else if (error) {
    return <Alert severity="error">{error.message}</Alert>;
  }

  return <DenseTable topics={value || []} />;
};
