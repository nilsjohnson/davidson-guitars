#bin/bash

echo "sending build directory..."
scp -i /home/nils/.ssh/owen.pem -r /home/nils/davidson-guitars/build ubuntu@ec2-3-212-125-115.compute-1.amazonaws.com:~

