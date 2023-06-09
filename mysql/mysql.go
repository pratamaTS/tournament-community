package mysql

import (
	"errors"
	"fmt"
	"log"
	"os"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

var initializeDB = false

var (
	db  *gorm.DB
	err error
)

func InitMySQL() {
	InitDB(os.Getenv("DATABASE_HOST"), os.Getenv("DATABASE_PORT"), os.Getenv("DATABASE_USER"), os.Getenv("DATABASE_PASS"), os.Getenv("DATABASE_NAME"))
}

func InitDB(host, port, user, password, database string) {
	if !initializeDB {
		dbConnection := fmt.Sprintf("%[4]s:%[5]s@tcp(%[1]s:%[3]s)/%[2]s?charset=utf8mb4&parseTime=True&loc=Local", host, database, port, user, password)

		db, err = gorm.Open("mysql", dbConnection)
		if err != nil {
			log.Println("Failed connect to Database", err)
		}

		db.DB().SetMaxIdleConns(2)
		db.DB().SetMaxOpenConns(100)

		initializeDB = true
	}
}

// GetDB is
func GetDB() (*gorm.DB, error) {
	if initializeDB == false || db == nil {
		return nil, errors.New("Failed to initialize DB")
	}
	return db, nil
}
