package entity

import "time"

type Team struct {
	TeamID    int       `json:"team_id"`
	TeamName  string    `json:"team_name"`
	CreatedAt time.Time `json:"-"`
	UpdatedAt time.Time `json:"-"`
}

func (Team) TableName() string {
	return "table_team"
}
