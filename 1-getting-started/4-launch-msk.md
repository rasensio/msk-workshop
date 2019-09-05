# Launch MSK cluster

## 1. Create cluster

Get to the MSK console [here](https://eu-west-1.console.aws.amazon.com/msk/home?region=eu-west-1#/home)

There are many options to fill. Let's start by the name
* Give it a name <code>mskcluster</code> and select the version 2.2.x

![logo](img/launch-msk-1.png)

By default, all the availability zones will be selected. Just keep going.

![logo](img/launch-msk-2.png)

Select the M5 Large server and only 1 broker per Availability Zone


![logo](img/launch-msk-3.png)

Set the store per broker to be 100 GiB

![logo](img/launch-msk-4.png)

Now press <code>Create Cluster</code>

## 2. Wait for the cluster creation

> [!TIP]
> Now go grab a :coffee: since a typical cluster takes up to 15 minutes to create.

![logo](img/launch-msk-5.png)