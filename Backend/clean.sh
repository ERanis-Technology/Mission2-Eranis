
rm -rf authentication/migrations/*
rm -rf Souscription/migrations/*
rm db.sqlite3

python manage.py makemigrations authentication Souscription
python manage.py migrate

python3 manage.py runserver