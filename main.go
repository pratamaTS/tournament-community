package main

import (
	"github.com/joho/godotenv"
	"github.com/tournament-community/mysql"
)

func main() {
	godotenv.Load()

	go mysql.InitMySQL()
	initRoutes()
}
