#!/bin/sh
DATE=$(date -I)
mkdir -p ./backup/${DATE}/mysql 

# mysql(wordpress)
docker run --rm --volumes-from apps_db_1 -v $(pwd)/backup/${DATE}/mysql:/backup ubuntu tar cvf /backup/backup.tar /var/lib/mysql
