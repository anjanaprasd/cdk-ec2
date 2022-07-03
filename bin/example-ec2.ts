#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ExampleEc2Stack } from '../lib/example-ec2-stack';
import { Regions } from 'cdktf-sms';

const app = new cdk.App();
new ExampleEc2Stack(app, 'ExampleEc2Stack', {
  
  env: { account: '894452424502', region: 'us-east-1' },

  tags: {
    App: 'Demo',
    enviroment: 'Dev',
    Created_By: 'AWS-CDK',
  },


});


// Under stack configuration you can define  tags and enviroment variables in this case region and accountId.
