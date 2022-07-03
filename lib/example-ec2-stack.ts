import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { SecurityGroup, Subnet, SubnetType } from '@aws-cdk/aws-ec2';
import { PropagatedTagSource } from 'aws-cdk-lib/aws-ecs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';




export class ExampleEc2Stack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const newvpc = new ec2.Vpc(this, 'my-cdk-vpc', {
      enableDnsHostnames: true,
      enableDnsSupport: true,
      cidr: '10.0.0.0/16',
      natGateways: 1,
      maxAzs: 3,
      
      subnetConfiguration: [
        {
          name: 'private-subnet-1',
          subnetType: ec2.SubnetType.PRIVATE_WITH_NAT,
          cidrMask: 24,
        },
        {
          name: 'public-subnet-1',
          subnetType: ec2.SubnetType.PUBLIC,
          cidrMask: 24,
        },
        {
          name: 'isolated-subnet-1',
          subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
          cidrMask: 28,
        },
      ],
  
    });
  

    const ExampleSG = new ec2.SecurityGroup(this, 'SecurityGroup', {
      vpc: newvpc,
      description: 'CDK-example demo secuirty group',
      securityGroupName: 'Example-Demo',
      allowAllOutbound: true   

  });



  let IP= ['0.0.0.0/8','10.10.10.0/18','196.168.2.0/24',  ];

  for (var val of IP) {
    ExampleSG.addIngressRule(ec2.Peer.ipv4(val), ec2.Port.tcp(22), 'allow ssh access')
   }


   for (var val of IP) {
    ExampleSG.addIngressRule(ec2.Peer.ipv4(val), ec2.Port.tcp(80), 'allow http access')
   }


   for (var val of IP) {
    ExampleSG.addIngressRule(ec2.Peer.ipv4(val), ec2.Port.tcp(8080), 'allow ssh access')
   }



   const machineImage = ec2.MachineImage.genericLinux({
    'us-east-1': 'ami-03368e982f317ae48',

  });



  

  for (var i = 1; i <= 2; i++){
    const ec2Instance = new ec2.Instance(this,'ec2Instance' + i, {
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO),
      machineImage: machineImage,
      vpc: newvpc,
      vpcSubnets: {
        subnetType: ec2.SubnetType.PUBLIC,
      },
      securityGroup: ExampleSG,
      instanceName: "mycdk-instance",
      blockDevices: [
        {
          deviceName: '/dev/xvdb',
          volume: ec2.BlockDeviceVolume.ebs(25),
        },
      ]
    });

  }

  
  }
}
