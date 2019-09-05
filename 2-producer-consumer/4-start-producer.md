# Exersice #1 - Producing and Consuming Messages

> [!TIP]
> You will run a producer and a consumer in your MSK Cluster and dump the messages in the console of Cloud9

## 1. Start the Producer

Copy and execute the following script. It will start publishig messages to the metrics topic.

```shell
cd ~/environment/msk-workshop-apps/
node producer $CLUSTER metrics
```
You should start seeing messages being printed in the console like this. 

![screenshot](img/launch-producer-1.png)