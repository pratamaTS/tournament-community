package repository

import (
	"github.com/tournament-community/entity"
	"github.com/tournament-community/mysql"
)

func FetchRecommendationTournament(id int) (tournament []entity.Tournament, err error) {
	db, err := mysql.GetDB()
	if err != nil {
		return
	}

	err = db.Debug().Model(entity.Tournament{}).Select("table_tournament.id, table_tournament.name, GROUP_CONCAT(DISTINCT(g.id)) as games_id, GROUP_CONCAT(t.id) as teams_id, table_tournament.status").Joins("JOIN table_team_to_tournament tt on table_tournament.id = tt.id_tournament").Joins("JOIN table_team t on tt.id_team = t.id").Joins("JOIN table_user u on t.created_by = u.id").Joins("JOIN table_games g on table_tournament.id_games = g.id").Where("u.id = ?", id).Where("t.status = 'active'").Where("table_tournament.status = 'regis_open'").Group("table_tournament.id").Find(&tournament).Error
	return
}
