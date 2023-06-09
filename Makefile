dep:
	go mod tidy
	go mod vendor

migrate:
	npx sequelize db:migrate

refresh:
	npx sequelize db:migrate:undo:all
	npx sequelize db:migrate

init:
	npx sequelize-cli init

seed:
	npx sequelize-cli db:seed:all

seed-undo:
	npx sequelize-cli db:seed:undo:all