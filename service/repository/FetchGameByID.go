package repository

import (
	"github.com/tournament-community/entity"
	"github.com/tournament-community/mysql"
)

func FetchGameByID(ids []int) (games []entity.Game, err error) {
	db, err := mysql.GetDB()
	if err != nil {
		return
	}

	err = db.Debug().Model(entity.Game{}).Select("table_games.id as game_id, table_games.name as game_name").Where("id IN (?)", ids).Find(&games).Error
	return
}
