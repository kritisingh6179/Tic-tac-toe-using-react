import React, { useState } from 'react';
import './Tictacetoe.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';

const Tictacetoe = () => {
    const [board, setBoard] = useState(Array(9).fill(''));
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const [winner, setWinner] = useState(null);

    const t = (index) => {
        if (lock || board[index] !== '') {
            return;
        }

        const newBoard = [...board];
        newBoard[index] = count % 2 === 0 ? 'x' : 'o';
        setBoard(newBoard);
        setCount(count + 1);

        checkWin(newBoard);
        checkDraw(newBoard);
    };

    const checkWin = (currentBoard) => {
        const winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (
                currentBoard[a] &&
                currentBoard[a] === currentBoard[b] &&
                currentBoard[a] === currentBoard[c]
            ) {
                setWinner(currentBoard[a]);
                setLock(true);
                return;
            }
        }
    };

    const checkDraw = (currentBoard) => {
        if (count === 8 && !winner) {
            setLock(true);
        }
    };

    const reset = () => {
        setLock(false);
        setWinner(null);
        setBoard(Array(9).fill(''));
        setCount(0);
    };

    const renderBox = (index) => (
        <div className="box" onClick={() => t(index)}>
            {board[index] === 'x' ? <img src={cross_icon} alt="cross" /> : null}
            {board[index] === 'o' ? <img src={circle_icon} alt="circle" /> : null}
        </div>
    );

    const renderResult = () => {
        if (lock) {
            if (winner) {
                return (
                    <div className="result">
                        <p className='w1'>{winner === 'x' ? 'Cross' : 'Circle'} won!</p>
                        <div className={`win-message ${winner ? 'win-animation' : ''}`}>
                            <div className="balloon"></div>
                            <div className="balloon"></div>
                            <div className="balloon"></div>
                        </div>

                    </div>

                );
            } else {
                return (
                    <div className="result">
                        <p className='w1'> It's a Draw!</p>
                    </div>
                );
            }
        }
        return null;
    };

    return (
        <div className="container">
            <h1 className="title">Tic Tac Toe Game In<span className="t1">React</span></h1>

            <div className="board">
                <div className="row1">
                    {renderBox(0)}
                    {renderBox(1)}
                    {renderBox(2)}
                </div>
                <div className="row2">
                    {renderBox(3)}
                    {renderBox(4)}
                    {renderBox(5)}
                </div>
                <div className="row3">
                    {renderBox(6)}
                    {renderBox(7)}
                    {renderBox(8)}
                </div>
            </div>

            {renderResult()}

            <button className="reset" onClick={reset}>Reset</button>

        </div>
    );
};

export default Tictacetoe;
