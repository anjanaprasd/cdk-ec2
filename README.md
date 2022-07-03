# Build AWS VPC stack and multiple ec2 instances using AWS-CDK


#### About this project.
In this tutorial, you will learn how to build a complete vpc stack and ec2 instance, a security group with few rules using CDK. Also could learn CDK installation and the basic commands of AWS CDK.feel free to modify this project base on your requirements. In this project, the author has used level-02 CDK constructs. If you want to learn more about AWS-CDK, 
I recommend AWS official documentation.


### Prerequisite:
- An AWS Account 
- AWS CDK package
- AWS-CLI

### How to install aws-CDK in windows 

#### Step 01.
Install nodejs in your local system.

#### Step 02.
open your windows command prompt and run npm install -g aws-CDK (install the latest version)
To install a specific version. npm install -g aws-cdk@XX

#### Step 03.
Verify cdk installed in your system by executing  CDK --version. 



### Install aws-CDK in Linux.

#### Step 01.
Install nodejs in your Linux system.

#### Step 02
Run npm install -g aws-cdk to install cdk in your Linux system.

#### Step 03.
Verify that cdk installed in your system by executing the cdk --version. 


### Getting started with CDK

1. create project directory mkdir myexample-cdkdemo and run cd myexample-cdkdemo.
2. Now, initialize the app using the cdk init command and this example author has used the basic cdk app constructs.
3. cdk init app --language typescript. Once you execute, it will download relevant configuration files into the project folder.


### How to install the required CDK module.

- npm install @aws-cdk/aws-ec2@1.134.0 
  import * as ec2 from 'aws-cdk-lib/aws-ec2';

- npm install aws-cdk-lib (Main AWS CDK package)
  import 'aws-cdk-lib' as cdk;


### How to execute this project.

1. Verify aws-cdk has installed in your local system running the cdk --version command.
2. CDK require bootstraps installed in your system. Using bootstrap cdk will convert your code into a cloud formation template. 
  - cdk bootstrap
3. Run cdk synth it to be translated into an AWS CloudFormation template.
4. cdk deploy command to deploy stack in AWs. Once you execute the deploy command, it will create a cloud formation template in AWS and deploy the resources.
5. cdk destroy command to destroy stack.


### In the process, we also learned a bunch of related concepts such as:

- How to install AWS CDK.
- How to use it to define a VPC stack, subnets.
- How to reference an AMI.
- How to add security groups and multiple rules.
- Basic commands in cdk.


## Useful commands

  * npx aws-cdk init --list: This lists available option in CDK.
  * cdk diff: Using the cdk diff command can check the difference between the cdk code and the already deployed environment.cdk ls
  * cdk ls : list cdk stacks.
 


 ### Please note : In this tutorial, I've exclude couple of files and folders(cdk.out file node-module folder). Therefore, I would like to recommend follow above mentioned steps in your computer and create your own cdk project folder and change the values in the /lib/*.ts file configurations.
