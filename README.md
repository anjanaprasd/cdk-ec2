#### *Build AWS VPC stack and multiple ec2 instances using AWS-CDK*


About this project:
This project demonstrates how to build a complete VPC stack and EC2 instances, along with a security group and rules, using AWS CDK. This project uses Level-02 CDK constructs. If you want to learn more about AWS CDK, please refer to the AWS official documentation.

Prerequisites:

    An AWS account
    AWS CDK package
    AWS CLI

How to install AWS CDK on Windows:
Step 1:
Install Node.js on your local system.

Step 2:
Open your Windows command prompt and run "npm install -g aws-cdk" to install the latest version. To install a specific version, use "npm install -g aws-cdk@XX".

Step 3:
Verify that CDK is installed on your system by executing "cdk --version".

How to install AWS CDK on Linux:
Step 1:
Install Node.js on your Linux system.

Step 2:
Run "npm install -g aws-cdk" to install CDK on your Linux system.

Step 3:
Verify that CDK is installed on your system by executing "cdk --version".

Getting started with CDK:
Create a project directory using "mkdir myexample-cdkdemo" and navigate to the directory using "cd myexample-cdkdemo".

Now, initialize the app using the "cdk init" command. In this example, the author has used the basic CDK app constructs by executing "cdk init app --language typescript". Once you execute this command, relevant configuration files will be downloaded into the project folder.

How to install the required CDK modules:

    To install the "@aws-cdk/aws-ec2@1.134.0" module, run "npm install @aws-cdk/aws-ec2@1.134.0" and import the module using "* as ec2 from 'aws-cdk-lib/aws-ec2'".
    To install the main AWS CDK package, run "npm install aws-cdk-lib" and import it using "import 'aws-cdk-lib' as cdk".

How to execute this project:
Before executing this project, verify that AWS CDK is installed on your local system by running the "cdk --version" command.

CDK requires bootstraps installed in your system. Using bootstrap, CDK will convert your code into a CloudFormation template. To bootstrap, run "cdk bootstrap".

Run "cdk synth" to translate your code into an AWS CloudFormation template.

Run "cdk deploy" to deploy the stack in AWS. Once you execute this command, a CloudFormation template will be created in AWS and the resources will be deployed.

Run "cdk destroy" to destroy the stack.

In the process, we also learned a bunch of related concepts such as:

    How to install AWS CDK
    How to use it to define a VPC stack, subnets
    How to reference an AMI
    How to add security groups and multiple rules
    Basic commands in CDK

Useful commands:

    "npx aws-cdk init --list": This lists the available options in CDK.
    "cdk diff": Use the "cdk diff" command to check the difference between the CDK code and the already deployed environment.
    "cdk ls": This lists the CDK stacks.

Please note: In this tutorial, a few files and folders (cdk.out file, node-module folder) have been excluded. Therefore, it is recommended to follow the above-mentioned steps on your computer, create your own CDK project folder, and change the values in the "/lib/*.ts" file.
