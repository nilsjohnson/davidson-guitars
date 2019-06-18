# bin/bash

echo "sending pw.."
scp -i /home/nils/.ssh/owen.pem -r /home/nils/davidson-guitars/password.txt ubuntu@ec2-3-212-125-115.compute-1.amazonaws.com:~