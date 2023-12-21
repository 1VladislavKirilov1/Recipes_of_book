<h1>Проект с рецептами блюд на DRF + OpenApi + Swagger + react-router</h1>
<hr>
Для того, чтобы запустить проект нужно клонировать репозиторий.<br>
Затем перейти в директорию recipe_project и выполнить команду: <br>
pip install -r requirements.txt.<br><br>
Затем перейти в директорию recipe_frontend и выполнить команду<br>
npm install -g yarn, если не установлен менеджер пакетов yarn<br>
yarn install для установки необходимых пакетов<br>
Далее выполните в одном терминале команду:<br>
python manage.py runserver,<br>
а в другом:<br>
yarn start<br>
<br>
Приложение будет доступно по URL:<br>
127.0.0.1:8000/swagger/<br>
127.0.0.1:8000/redoc/<br>
127.0.0.1:8000/api/categories/<br>
127.0.0.1:8000/api/recipes/1<br>
127.0.0.1:8000/api/recipes/2<br>
127.0.0.1:8000/api/recipes/3 и т.д.<br>
127.0.0.1:8000/api/categories/1<br>
127.0.0.1:8000/api/categories/2<br>
127.0.0.1:8000/api/categories/3 и т.д.<br>
