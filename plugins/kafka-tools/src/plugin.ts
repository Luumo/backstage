import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const kafkaToolsPlugin = createPlugin({
  id: 'kafka-tools',
  routes: {
    root: rootRouteRef,
  },
});

export const KafkaToolsPage = kafkaToolsPlugin.provide(
  createRoutableExtension({
    name: 'KafkaToolsPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
