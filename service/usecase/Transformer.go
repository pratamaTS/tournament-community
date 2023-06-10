package usecase

import (
	"fmt"
	"log"
	"strconv"
	"strings"

	"github.com/tournament-community/entity"
	"github.com/tournament-community/service/repository"
)

func Transformer(dataTournament []entity.Tournament) (resp []map[string]any) {
	for _, v := range dataTournament {
		games, err := repository.FetchGameByID(converter(v.GamesID))
		if err != nil {
			log.Print("err get games, ", err.Error())
			return
		}

		teams, err := repository.FetchTeamByID(converter(v.TeamsID))
		if err != nil {
			log.Print("err get teams, ", err.Error())
			return
		}
		resp = append(resp, map[string]any{
			"tourney_id": v.ID,
			"name":       v.Name,
			"games":      games,
			"teams":      teams,
			"status":     v.Status,
		})
	}
	return
}

func converter(bytes []uint8) []int {
	aString := string(bytes)
	strSlice := strings.Split(aString, ",") // string representation of our array (of int)
	var intVal []int
	for _, x := range strSlice {
		fmt.Printf("At last, Int: %s \r\n", x)
		v, err := strconv.Atoi(x)
		if err != nil {
			fmt.Printf("Error: %s", err)
		}
		intVal = append(intVal, v)
		fmt.Printf("as int: %s \r\n", v)
	}
	return intVal
}
