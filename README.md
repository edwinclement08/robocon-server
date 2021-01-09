 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/roboconcrce.org/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/roboconcrce.org/privkey.pem
   Your certificate will expire on 2021-04-09. To obtain a new or
   tweaked version of this certificate in the future, simply run
   certbot again.

# for creating the ssl
sudo certbot certonly --manual --cert-name ' roboconcrce.org,*.roboconcrce.org'

# for starting the server for dns verification
serve -l 80 .
