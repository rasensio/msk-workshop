# Setup your IDE

## 2. Configure security group

* Go to the [EC2 service in the AWS console](https://eu-west-1.console.aws.amazon.com/ec2/v2/home?region=eu-west-1#Instances:sort=instanceState). You'll find your Cloud9 instance. Click on it and go to the security group details.

![screenshot](img/setup-ide-new-cloud9-2.png)

Now copy the security group ID as shown in the screenshot below.

![screenshot](img/setup-ide-new-cloud9-3.png)

TODO TODO 
* Now go to the default security group and allow all traffic from your IDE security group to your default VPC security group. This will allow communciation from your IDE to your MSK Cluster
