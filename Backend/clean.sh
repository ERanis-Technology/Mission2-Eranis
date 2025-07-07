
rm -rf authentication/migrations/*
rm db.sqlite3

python manage.py makemigrations authentication
python manage.py migrate

python3 manage.py runserver