#bin/bash

echo "sending server.js..."
scp -i ~/.ssh/owen.pem -r /home/nils/davidson-guitars/server.js ubuntu@ec2-3-212-125-115.compute-1.amazonaws.com:~