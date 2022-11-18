"use strict";

const Player = (name, marker) => {
    let score = 0;
    let board = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
    ];
    return {name, marker, score, board}
}

const gameController = (() => {
    let playerOne;
    let playerTwo;

    const createPlayer = (formData) => {
        playerOne = Player(formData.get("firstPlayerName"), formData.get("marker"));
        playerTwo = Player(formData.get("secondPlayerName"), playerOne.marker === "O" ? "X" : "O");
    }

    const startGame = (formData) => {
        createPlayer(formData);
        domElement.createBoard();
    }

    return {startGame, playRound, currentPlayer}
})();

const domElement = (() => {
    const form = document.getElementById("form");
    const boardContainer = document.getElementById("board-container");
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        gameController.startGame(formData);
    })

    const createBoard = () => {
        let gameBoardHtml = ``;
        gameBoard.board.forEach((item, index) => {
            gameBoardHtml += `<div 
            data-array-index="${index}"
            onclick="gameController.playRound(this)"
            >${item}</div>`
        });
        boardContainer.innerHTML = gameBoardHtml;
    };

    return {form, boardContainer, createBoard}
})();

const gameBoard = (() => {
    let board = [
        "", "", "", 
        "", "", "",
        "", "", ""
    ];

    const winningCombo = [
        [
            1, 1, 1,
            0, 0, 0,
            0, 0, 0
        ], 
        [
            0, 0, 0,
            1, 1, 1,
            0, 0, 0
        ], 
        [
            0, 0, 0,
            0, 0, 0,
            1, 1, 1
        ],
        [
            1, 0, 0,
            1, 0, 0,
            1, 0, 0
        ],
        [
            0, 1, 0,
            0, 1, 0,
            0, 1, 0
        ],
        [
            0, 0, 1,
            0, 0, 1,
            0, 0, 1
        ],
        [
            1, 0, 0,
            0, 1, 0,
            0, 0, 1
        ],
        [
            0, 0, 1,
            0, 1, 0,
            1, 0, 0
        ]
    ];

    return {board, winningCombo}
})();