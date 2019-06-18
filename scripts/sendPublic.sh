# bin/bash

echo "sending public directory.."
scp -i /home/nils/.ssh/owen.pem -r /home/nils/davidson-guitars/public/index.html ubuntu@ec2-3-212-125-115.compute-1.amazonaws.com:~