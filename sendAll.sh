#bin/bash

echo "sending build directory..."
scp -i ~/.ssh/owen.pem -r /home/nils/davidson-guitars/build ubuntu@ec2-18-205-159-70.compute-1.amazonaws.com:~
echo "sending password directory..."
scp -i ~/.ssh/owen.pem -r /home/nils/davidson-guitars/password.txt ubuntu@ec2-18-205-159-70.compute-1.amazonaws.com:~
echo "sending build server.js..."
scp -i ~/.ssh/owen.pem -r /home/nils/davidson-guitars/server.js ubuntu@ec2-18-205-159-70.compute-1.amazonaws.com:~
echo "sending strings..."
scp -i ~/.ssh/owen.pem -r /home/nils/davidson-guitars/strings.json ubuntu@ec2-18-205-159-70.compute-1.amazonaws.com:~
