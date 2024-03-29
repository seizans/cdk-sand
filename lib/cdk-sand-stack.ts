import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkSandStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new cdk.aws_s3.Bucket(this, 'MyFirstBucket', {versioned: true});

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkSandQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
