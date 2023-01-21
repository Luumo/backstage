import { kafkaToolsPlugin } from './plugin';

describe('kafka-tools', () => {
  it('should export plugin', () => {
    expect(kafkaToolsPlugin).toBeDefined();
  });
});
