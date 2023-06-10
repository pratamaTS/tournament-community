package entity

import (
	"time"
)

type Tournament struct {
	ID        int       `json:"id"`
	Name      string    `json:"name"`
	Status    string    `json:"status"`
	MaxSlot   int       `json:"-"`
	TeamsID   []uint8   `json:"teams_id"`
	GamesID   []uint8   `json:"games_id"`
	CreatedAt time.Time `json:"-"`
	UpdatedAt time.Time `json:"-"`
}

func (Tournament) TableName() string {
	return "table_tournament"
}
