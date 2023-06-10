package entity

import (
	"time"
)

type GroupTourTeam struct {
	ID           int       `json:"id"`
	IDTeam       int       `json:"id_team"`
	IDTournament int       `json:"id_tournament"`
	StatusDaftar string    `json:"status_daftar"`
	CreatedAt    time.Time `json:"-"`
	UpdatedAt    time.Time `json:"-"`
}

func (GroupTourTeam) TableName() string {
	return "table_team_to_tournament"
}
