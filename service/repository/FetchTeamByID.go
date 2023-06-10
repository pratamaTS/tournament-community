package repository

import (
	"github.com/tournament-community/entity"
	"github.com/tournament-community/mysql"
)

func FetchTeamByID(ids []int) (teams []entity.Team, err error) {
	db, err := mysql.GetDB()
	if err != nil {
		return
	}

	err = db.Debug().Model(entity.Team{}).Select("table_team.id as team_id, table_team.name as team_name").Where("id IN (?)", ids).Find(&teams).Error
	return
}
