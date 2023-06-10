package repository

import (
	"github.com/tournament-community/entity"
	"github.com/tournament-community/mysql"
)

type Payload struct {
	TeamID       int `json:"team_id"`
	TournamentID int `json:"tournament_id"`
}

func Save(payload entity.GroupTourTeam) (resp *entity.GroupTourTeam, err error) {
	db, err := mysql.GetDB()
	if err != nil {
		return nil, err
	}

	count := int64(0)
	err = db.Debug().Model(entity.GroupTourTeam{}).Where("id_team = ?", payload.IDTeam).Count(&count).Error
	if err != nil {
		return nil, err
	}

	payload.StatusDaftar = "waiting"

	if count != 0 {
		err = db.Debug().Model(entity.GroupTourTeam{}).Where("id_team = ?", payload.IDTeam).Save(&payload).Error
		if err != nil {
			return nil, err
		}
		resp = &payload
		return
	}

	err = db.Debug().Model(entity.GroupTourTeam{}).Save(&payload).Error
	if err != nil {
		return nil, err
	}
	resp = &payload
	return
}
