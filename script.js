"use strict"

const Player = (name, marker, isTheirTurn) => {
    let score = 0;
    let board = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
    ];

    const changeTurn = () => {
        isTheirTurn = !isTheirTurn;
    };

    const getName = () => name;
    const getMarker = () => marker;
    const getScore = () => score;
    const getBoard = () => board;
    const getTurn = () => isTheirTurn;

    return {getName, getMarker, getScore, getBoard, board, getTurn, changeTurn}
};

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

const gameController = (() => {

    let playerOne = {};
    let playerTwo = {};
    let currentPlayer;

    const createPlayer = (formData) => {
        playerOne = Player(formData.get("firstPlayerName"), formData.get("marker"), true);
        playerTwo = Player(formData.get("secondPlayerName"), playerOne.marker === "O" ? "X" : "O", !playerOne.getTurn());
    }

    const startGame = (formData) => {
        createPlayer(formData);
        domElement.createBoard();
    }

    const getCurrentPlayer = () => {
        if (playerOne.getTurn() === true) {
            currentPlayer = playerOne
        } else {
            currentPlayer = playerTwo
        }
    };

    const playRound = (divClicked) => {
        getCurrentPlayer();
    }

    return {startGame, playRound}
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

function compareNestedArray(nestedArr, arr) {

    let result;

    for (let i = 0; i < nestedArr.length; i++) {

        result = nestedArr[i].every((element, index) => {
            return element === arr[index]
        })

        if (result === true) {
            break;
        }

    }

    return result;
}