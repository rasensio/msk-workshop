# Install Kafka Tools

## 1. Setup Java on the Cloud9 environment

The latest version of Kafka utilities works with Java 8. By default Cloud9 has Java 7 installed. We will remove Java 7 and install Java 8.

```shell
sudo yum remove java-1.7.0 -y
sudo yum install java-1.8.0 -y
```

## 2. Download Kafka Tools

You'll now download the Kafka tools (actually a distribution of Kafka) and uncompress it in your Cloud9 environment.

```shell
wget https://archive.apache.org/dist/kafka/2.2.1/kafka_2.12-2.2.1.tgz
tar -xzf kafka_2.12-2.2.1.tgz
```

You should now have a directory named **kafka_2.12-2.2.1/**


## 3. Download and install Kafka Manager

```shell
git clone https://github.com/yahoo/kafka-manager
```

Build it