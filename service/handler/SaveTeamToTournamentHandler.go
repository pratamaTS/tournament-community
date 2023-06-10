package handler

import (
	"encoding/json"
	"io/ioutil"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/tournament-community/entity"
	"github.com/tournament-community/service/repository"
)

func SaveTeamToTournamentHandler(c *gin.Context) {
	resp := map[string]any{
		"error":   false,
		"message": "",
		"data":    []entity.Tournament{},
	}

	jsonPayload, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		resp["error"] = true
		resp["message"] = err.Error()
		c.IndentedJSON(http.StatusInternalServerError, resp)
		return
	}

	reqPayload := repository.Payload{}
	err = json.Unmarshal(jsonPayload, &reqPayload)
	if err != nil {
		resp["error"] = true
		resp["message"] = err.Error()
		c.IndentedJSON(http.StatusInternalServerError, resp)
		return
	}

	payload := entity.GroupTourTeam{
		IDTeam:       reqPayload.TeamID,
		IDTournament: reqPayload.TournamentID,
	}

	callback, err := repository.Save(payload)
	if err != nil {
		resp["error"] = true
		resp["message"] = err.Error()
		c.IndentedJSON(http.StatusInternalServerError, resp)
		return
	}
	resp["data"] = callback
	resp["message"] = "Success save data"
	c.IndentedJSON(http.StatusOK, resp)
}
