"use strict"

const Player = (name, marker, isTheirTurn) => {
    let score = 0;
    let board = [
        "", "", "",
        "", "", "",
        "", "", ""
    ];

    const changeTurn = () => {
        isTheirTurn = !isTheirTurn;
    };

    const increaseScore = () => {
        score ++
    }

    const resetScore = () => {
        score = 0
    }

    const changeBoard = (index, marker) => {
        board[index] = marker
    }

    const resetBoard = () => {
        board = [
            "", "", "",
            "", "", "",
            "", "", ""
        ];
    }

    const getName = () => name;
    const getMarker = () => marker;
    const getScore = () => score;
    const getBoard = () => board;
    const getTurn = () => isTheirTurn;

    return {getName, getMarker, getScore, getBoard, getTurn, changeBoard, changeTurn, increaseScore, resetScore, resetBoard}
};

const gameBoard = (() => {

    let board = [
        "", "", "", 
        "", "", "",
        "", "", ""
    ];

    const winningCombo = [
        [0, 1, 2], 
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const resetBoard = () => {
        board = [
            "", "", "", 
            "", "", "",
            "", "", ""
        ];
    }

    const changeBoard = (index, marker) => {
        board[index] = marker
    }

    const getBoard = () => board;

    return {changeBoard, winningCombo, resetBoard, getBoard}
})();

const gameController = (() => {

    let playerOne = {};
    let playerTwo = {};
    let currentPlayer;
    let turnNumber = 0;
    let winner = false;

    const createPlayer = (formData) => {
        playerOne = Player(formData.get("firstPlayerName"), formData.get("marker"), true);
        playerTwo = Player(formData.get("secondPlayerName"), playerOne.getMarker() === "O" ? "X" : "O", !playerOne.getTurn());
    }

    const startGame = (formData) => {
        createPlayer(formData);
        domElement.createBoard();
    }

    const getCurrentPlayer = () => {
        currentPlayer = playerOne.getTurn() ?  playerOne : playerTwo;
    };

    const changeTurn = () => {
        playerOne.changeTurn();
        playerTwo.changeTurn();
    }

    const markBoard = (divClicked) => {
        currentPlayer.changeBoard(divClicked.dataset.arrayIndex, 1)
        gameBoard.changeBoard(divClicked.dataset.arrayIndex, currentPlayer.getMarker());
        domElement.refreshBoard();
    }

    const gameReset = () => {

        gameBoard.resetBoard();
        domElement.refreshBoard();
        playerOne.resetBoard();
        playerTwo.resetBoard();
        winner = false;
        turnNumber = 0;

    }

    const playRound = (divClicked) => {

        if (divClicked.innerHTML === "" && winner === false) {
            getCurrentPlayer();
            turnNumber ++;
            markBoard(divClicked);

            if (turnNumber >= 5) winner = checkWinner();

            if (winner === true && currentPlayer.getScore() < 3) {
                declareWinner();
                gameReset();
            }

            if (winner === false && turnNumber === 9) {
                declareTie();
            }

            if (winner === true && currentPlayer.getScore() === 3) {
                let userChoice = confirm("Play again ?");
                if (userChoice) { 
                    gameReset(); 
                    playerOne.resetScore();
                    playerTwo.resetScore();
                }
            }

            changeTurn();
        }

    }

    const declareTie = () => {
        alert("it's a tie !");
        gameReset();
    }

    const declareWinner = () => {
        alert(`${currentPlayer.getName()} a gagné !!!`);
        currentPlayer.increaseScore();
    }

    const checkWinner = () => {

        let result = false;
        let board = currentPlayer.getBoard();

        gameBoard.winningCombo.forEach(element => {
            if (board[element[0]] != "" && 
                board[element[1]] != "" &&
                board[element[2]]) {
                result = true 
            }
        })

        return result;
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
        gameBoard.getBoard().forEach((item, index) => {
            gameBoardHtml += `<div 
            data-array-index="${index}"
            onclick="gameController.playRound(this)"
            >${item}</div>`
        });
        boardContainer.innerHTML = gameBoardHtml;
    };

    const refreshBoard = () => {
        gameBoard.getBoard().forEach((item, index) => {
            document.querySelector(`[data-array-index="${index}"]`).innerHTML = item;
        })
    }

    return {createBoard, refreshBoard}
})(); 