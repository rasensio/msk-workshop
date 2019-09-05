# Exersice #1 - Producing and Consuming Messages

## 1. Get the cluster url and save it

You will use the AWS CLI to get information about the cluster and save it in your environment variables.

```bash
export ARN=$(aws kafka list-clusters | jq -r '.ClusterInfoList[0].ClusterArn')
aws kafka get-bootstrap-brokers --cluster-arn $ARN | jq
export CLUSTER=$(aws kafka get-bootstrap-brokers --cluster-arn $ARN | jq -r '.BootstrapBrokerStringTls')
echo "export CLUSTER=${CLUSTER}" >> ~/.bash_profile
```

``aws kafka list-clusters`` show your cluster's ARN and ``aws kafka get-bootstrap-brokers --cluster-arn`` returns the URL connection string for the cluster.

## 2. Allow Cloud9 to interact with MSK

You will discover the associated security group for Cloud9 and allow all ports in the MSK security group.

```bash
export INSTANCE_ID=$(curl -s 169.254.169.254/latest/dynamic/instance-identity/document | jq -r '.instanceId')
export IDE_SEC_GROUP=$(aws ec2 describe-instances --instance-ids $INSTANCE_ID | jq -r '.Reservations[0].Instances[0].SecurityGroups[0].GroupId')
export MSK_SEC_GROUP=$(aws kafka list-clusters | jq -r '.ClusterInfoList[0].BrokerNodeGroupInfo.SecurityGroups[0]')
```

Now allow the MSK security group access from the Cloud9 security group

```bash
aws ec2 authorize-security-group-ingress \
    --group-id $MSK_SEC_GROUP \
    --protocol tcp \
    --port 9094 \
    --source-group $IDE_SEC_GROUP
```