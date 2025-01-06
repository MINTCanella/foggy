# foggy

### Start project

- [установите клиент](https://www.mongodb.com/try/download/community) для MongoDB;
- установите Node.js `v20.14.0` или выше;
- установите менеджер пакетов pnpm: `npm install -g pnpm` 

  *(он будет установлен глобально с флагом `-g`);*
- запустите в корневой директории следующие команды:

    `pnpm install`, чтобы установить зависимости;
    
    `pnpm dev`, чтобы запустить проект для разработки;
    
    `pnpm start`, чтобы запустить build проекта.
#### Зависимости
Наш проект использует три workspace для установки зависимостей:
- `package.json` - глобальный:

  *содержит dev-зависимости, lock-файл, а также управляет двумя локальными workspace;*
- `backend/package.json` - backend:

  *содержит как dev, так и production-зависимости бэкенда;*
- `frontend/package.json` - frontend:

  *содержит как dev, так и production-зависимости фронтенда; связан с внешним файлом `.npmrc`, который позволяет 
установить библиотеку компонентов NextUI в root-папку `node_modules`.*

Workspaces контролируются файлом `pnpm-workspaces.yaml`, а lock-файл `pnpm-lock.yaml` содержит полную информацию обо 
всех зависимостях для каждого workspace.
#### Flow model
Мы придерживаемся модели GitFlow:
- `develop` - самая актуальная версия проекта;
- `master` - состояние проекта на момент последнего релиза;
- `FOGGY-n` - features из `develop`, сливаемые после окончания разработки с ней же;
- `release-n.a.b` - ветки релизов из `develop`, сливаемые после исправления мелочей с `master`.
### Deploy
##### Docker
Docker использует переменные окружения, отличные от переменных окружения development. 
Это необходимо для корректного подключения контейнера бэкенда к контейнеру базы данных; при поднятии контейнеров 
`NODE_ENV` меняется на `production` (в файле docker-compose), и вводится новая переменная окружения - `MONGO_URI_DOCKER`, 
которая используется бэкендом для подключения к базе данных при `NODE_ENV='production'`.

При этом файл `.env` отсутствует, и переменные окружения изменяются исключительно через Docker.

**Важно:** так как окружение меняется на `production`, dev-зависимости не будут работать в контейнерах.

Check