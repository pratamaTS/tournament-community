package entity

import "time"

type Game struct {
	GameID    int       `json:"game_id"`
	GameName  string    `json:"game_name"`
	CreatedAt time.Time `json:"-"`
	UpdatedAt time.Time `json:"-"`
}

func (Game) TableName() string {
	return "table_games"
}
