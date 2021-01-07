# for creating the ssl
sudo certbot certonly --manual --cert-name 'edwinclement08.com,*.edwinclement08.com,*.inlets.edwinclement08.com'

# for starting the server for dns verification
sudo ~/.npm-global/bin/serve -l 80 .
