import React from 'react';
import { Table, TableColumn, Progress } from '@backstage/core-components';
import Alert from '@material-ui/lab/Alert';
import useAsync from 'react-use/lib/useAsync';

type DenseTableProps = {
  topics: String[];
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

export const ExampleFetchComponent = ({ showInternalTopics }: { showInternalTopics: boolean }) => {
  const { value, loading, error } = useAsync(async (): Promise<String[]> => {
    const response = await fetch('http://localhost:8082/topics');
    const data = await response.json();
    return data;
  }, []);

  if (loading) {
    return <Progress />;
  } else if (error) {
    return <Alert severity="error">{error.message}</Alert>;
  }

  const filteredTopics = showInternalTopics
  ? value || [] // Added check to ensure value is defined before using .filter
  : (value || []).filter((topic) =>  !topic.startsWith("_")); // Added check for topic.name


  return <DenseTable topics={filteredTopics} />;
};
