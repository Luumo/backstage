import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { kafkaToolsPlugin, KafkaToolsPage } from '../src/plugin';

createDevApp()
  .registerPlugin(kafkaToolsPlugin)
  .addPage({
    element: <KafkaToolsPage />,
    title: 'Kafka Tools',
    path: '/kafka-tools'
  })
  .render();
