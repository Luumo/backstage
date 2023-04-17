import React, { useState } from 'react';
import { Typography, Grid, FormGroup, FormControlLabel, Switch } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from '@backstage/core-components';
import { ExampleFetchComponent } from '../ExampleFetchComponent';

export const ExampleComponent = () => {
  const [showInternalTopics, setShowInternalTopics] = useState(false);

  const handleShowInternalTopicsChange = () => {
    setShowInternalTopics(!showInternalTopics);
  };

  return (
    <Page themeId="tool">
      <Header title="Welcome to kafka-tools!" subtitle="Where topics are created :)">
        <HeaderLabel label="Owner" value="Team Lumo" />
        <HeaderLabel label="Lifecycle" value="Alpha" />
      </Header>
      <Content>
        <ContentHeader title="Plugin title">
          <SupportButton>A description of your plugin goes here.</SupportButton>
        </ContentHeader>
        <Grid container spacing={3} direction="column">
          <Grid item>
            <FormGroup>
              <FormControlLabel
                control={<Switch checked={showInternalTopics} onChange={handleShowInternalTopicsChange} />}
                label="Show Internal Topics"
              />
            </FormGroup>
            <ExampleFetchComponent showInternalTopics={showInternalTopics} />
          </Grid>
        </Grid>
      </Content>
    </Page>
  );
};