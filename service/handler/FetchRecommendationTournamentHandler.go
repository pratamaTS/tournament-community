package handler

import (
	"errors"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/tournament-community/entity"
	"github.com/tournament-community/service/repository"
	"github.com/tournament-community/service/usecase"
)

func FetchRecommendationTournamentHandler(c *gin.Context) {
	resp := map[string]any{
		"error":   false,
		"message": "",
		"data":    []entity.Tournament{},
	}

	userid := c.Param("userid")
	if userid == "" {
		resp["error"] = true
		resp["message"] = errors.New("user id is required")
		c.IndentedJSON(http.StatusBadRequest, resp)
		return
	}

	userIDInt, err := strconv.Atoi(userid)
	if err != nil {
		resp["error"] = true
		resp["message"] = err.Error()
		c.IndentedJSON(http.StatusInternalServerError, resp)
		return
	}

	tournament, err := repository.FetchRecommendationTournament(userIDInt)
	if err != nil {
		resp["error"] = true
		resp["message"] = err.Error()
		c.IndentedJSON(http.StatusInternalServerError, resp)
		return
	}
	resp["data"] = usecase.Transformer(tournament)
	resp["message"] = "Success get data"
	c.IndentedJSON(http.StatusOK, resp)
}
