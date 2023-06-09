package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

func initRoutes() {
	router := gin.Default()

	router.GET("/health", func(c *gin.Context) {
		resp := map[string]any{
			"error":   false,
			"message": "OK",
		}
		c.IndentedJSON(http.StatusOK, resp)
	})

	log.Print("Starting service")
	router.Run(":" + os.Getenv("PORT"))
}
