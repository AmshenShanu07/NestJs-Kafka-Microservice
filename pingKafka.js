/* eslint-disable @typescript-eslint/no-var-requires */

const { Kafka } = require('kafkajs');
const ip = require('ip');

const host = ip.address();

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: [`${host}:9092`],
});

const run = async () => {
  const producer = kafka.producer();
  const consumer = kafka.consumer({ groupId: 'test-group' });

  await producer.connect();
  await producer.send({
    topic: 'bookmark-app',
    messages: [{ value: 'Hello KafkaJS user!' }],
  });

  await producer.disconnect();

  await consumer.connect();
  await consumer.subscribe({ topic: 'bookmark-app', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ message }) => {
      console.log({
        value: message.value.toString(),
      });
    },
  });
};

run();
