const AWS = require("aws-sdk");

// Configure the AWS SDK with your credentials and region
AWS.config.update({
  accessKeyId: "YOUR_ACCESS_KEY",
  secretAccessKey: "YOUR_SECRET_KEY",
  region: "us-east-1", // Change to your desired region
});

// Create an SQS instance
const sqs = new AWS.SQS();

// Define the parameters for sending a message to an SQS queue
const queueUrl = "YOUR_QUEUE_URL"; // Replace with your SQS queue URL
const messageObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

const params = {
  MessageBody: JSON.stringify(messageObject),
  QueueUrl: queueUrl,
};

// Send the message to the SQS queue
sqs.sendMessage(params, (err, data) => {
  if (err) {
    console.error("Error sending message to SQS:", err);
  } else {
    console.log("Message sent to SQS:", data.MessageId);
  }
});

//Lambda1 is tigger on add message in sqs
const AWS = require("aws-sdk");
const lambda = new AWS.Lambda();

exports.handler = async (event) => {
  try {
    const params = {
      FunctionName: "FunctionB", // Replace with the name or ARN of FunctionB
      InvocationType: "Event", // Use 'Event' to trigger asynchronously
    };

    await lambda.invoke(params).promise();
    return "FunctionB triggered successfully";
  } catch (error) {
    console.error("Error triggering FunctionB:", error);
    throw error;
  }
};




// Lambda2


const AWS = require('aws-sdk');

// Configure the AWS SDK with your credentials and region
AWS.config.update({
  accessKeyId: 'YOUR_ACCESS_KEY',
  secretAccessKey: 'YOUR_SECRET_KEY',
  region: 'us-east-1', // Change to your desired region
});

// Create an SQS instance
const sqs = new AWS.SQS();

// Define the parameters for receiving messages from an SQS queue
const queueUrl = 'YOUR_QUEUE_URL'; // Replace with your SQS queue URL

const params = {
  QueueUrl: queueUrl,
  MaxNumberOfMessages: 1, // Adjust as needed to retrieve multiple messages at once
  WaitTimeSeconds: 1, // Adjust as needed for polling interval
};

// Receive messages from the SQS queue
sqs.receiveMessage(params, (err, data) => {
  if (err) {
    console.error('Error receiving messages from SQS:', err);
  } else if (data.Messages) {
    console.log('Received messages:');
    data.Messages.forEach((message) => {
      console.log('Message Body:', message.Body);
      
      // Process the message as needed
      
      // Delete the message from the queue after processing
      deleteMessage(message.ReceiptHandle);
    });
  } else {
    console.log('No messages available in the queue.');
  }
});

// Function to delete a message from the SQS queue
function deleteMessage(receiptHandle) {
  const deleteParams = {
    QueueUrl: queueUrl,
    ReceiptHandle: receiptHandle,
  };

  sqs.deleteMessage(deleteParams, (err) => {
    if (err) {
      console.error('Error deleting message from SQS:', err);
    } else {
      console.log('Message deleted from SQS.');
    }
  });
}
