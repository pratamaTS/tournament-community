package models

import "time"

type TableUser struct {
	ID        int       `json:"id"`
	Name      string    `json:"name"`
	Status    string    `json:"satus"`
	CreatedAt time.Time `json:"-"`
	UpdatedAt time.Time `json:"-"`
}
